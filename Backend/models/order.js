const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['PENDING','PAID','SHIPPED','CANCELLED','COMPLETED'], default: 'PENDING' },
  totalCents: { type: Number, required: true },
  currency: { type: String, default: 'INR' },
  shippingAddress: { type: mongoose.Schema.Types.Mixed },
  billingAddress: { type: mongoose.Schema.Types.Mixed },
  paymentIntentId: { type: String },
  items: { type: [mongoose.Schema.Types.Mixed], required: true }, // each: {productId, name, sku, qty, priceCents}
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
