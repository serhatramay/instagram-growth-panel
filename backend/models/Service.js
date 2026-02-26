const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  type: {
    type: String,
    enum: ['followers', 'likes', 'views', 'comments', 'story_views', 'reel_views'],
    required: true
  },
  category: {
    type: String,
    enum: ['instagram', 'tiktok', 'youtube', 'twitter'],
    default: 'instagram'
  },
  description: {
    type: String,
    required: true
  },
  packages: [{
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discount: {
      type: Number,
      default: 0
    },
    deliveryTime: {
      type: String,
      default: '1-24 hours'
    },
    minQuantity: {
      type: Number,
      default: 100
    },
    maxQuantity: {
      type: Number,
      default: 100000
    }
  }],
  features: [{
    type: String
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  sortOrder: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);