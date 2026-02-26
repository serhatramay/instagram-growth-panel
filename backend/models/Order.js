const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  targetUsername: {
    type: String,
    required: true,
    trim: true
  },
  targetUrl: {
    type: String,
    trim: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'in_progress', 'completed', 'partial', 'cancelled', 'refunded'],
    default: 'pending'
  },
  startCount: {
    type: Number,
    default: 0
  },
  currentCount: {
    type: Number,
    default: 0
  },
  deliveredCount: {
    type: Number,
    default: 0
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['balance', 'stripe', 'paypal', 'crypto'],
    default: 'balance'
  },
  paymentId: {
    type: String
  },
  notes: {
    type: String
  },
  apiOrderId: {
    type: String
  },
  completedAt: {
    type: Date
  }
}, {
  timestamps: true
});

// Index for faster queries
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ status: 1 });

module.exports = mongoose.model('Order', orderSchema);