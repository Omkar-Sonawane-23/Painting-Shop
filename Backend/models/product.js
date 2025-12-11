const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: { type: String, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  priceCents: { type: Number, default: 0 },
  currency: { type: String, default: 'INR' },
  stock: { type: Number, default: 0 },
  images: { type: [String], default: [] }, // S3/URL strings
  metadata: { type: mongoose.Schema.Types.Mixed, default: {} }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
