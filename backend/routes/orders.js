const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Order = require('../models/Order');
const Service = require('../models/Service');
const User = require('../models/User');

// Middleware to verify token
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ success: false, message: 'Token gerekli' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Geçersiz token' });
  }
};

// Create order
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { serviceId, targetUsername, targetUrl, quantity } = req.body;

    // Get service
    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ success: false, message: 'Servis bulunamadı' });
    }

    // Find package
    const package = service.packages.find(p => 
      quantity >= p.minQuantity && quantity <= p.maxQuantity
    );
    if (!package) {
      return res.status(400).json({ success: false, message: 'Geçersiz miktar' });
    }

    // Calculate price
    const price = (package.price / package.quantity) * quantity;

    // Check user balance
    const user = await User.findById(req.userId);
    if (user.balance < price) {
      return res.status(400).json({ success: false, message: 'Yetersiz bakiye' });
    }

    // Deduct balance
    user.balance -= price;
    user.totalSpent += price;
    user.ordersCount += 1;
    await user.save();

    // Create order
    const order = new Order({
      user: req.userId,
      service: serviceId,
      targetUsername,
      targetUrl,
      quantity,
      price,
      paymentStatus: 'paid',
      paymentMethod: 'balance'
    });

    await order.save();

    res.status(201).json({
      success: true,
      message: 'Sipariş oluşturuldu',
      order
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get user's orders
router.get('/', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .populate('service', 'name type')
      .sort({ createdAt: -1 });
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get order by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.userId
    }).populate('service');

    if (!order) {
      return res.status(404).json({ success: false, message: 'Sipariş bulunamadı' });
    }

    res.json({ success: true, order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Cancel order
router.post('/:id/cancel', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findOne({
      _id: req.params.id,
      user: req.userId
    });

    if (!order) {
      return res.status(404).json({ success: false, message: 'Sipariş bulunamadı' });
    }

    if (order.status !== 'pending') {
      return res.status(400).json({ success: false, message: 'Bu sipariş iptal edilemez' });
    }

    // Refund
    const user = await User.findById(req.userId);
    user.balance += order.price;
    await user.save();

    order.status = 'cancelled';
    order.paymentStatus = 'refunded';
    await order.save();

    res.json({ success: true, message: 'Sipariş iptal edildi', order });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;