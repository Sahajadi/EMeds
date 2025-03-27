const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  manufacturer: { type: String, required: true },
  inStock: { type: Number, required: true, default: 0 },
  prescription: { type: Boolean, default: false },
  image: { type: String },
  reviews: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
      rating: { type: Number, required: true },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now }
    }
  ],
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 }
}, { timestamps: true });
const Product = require('../models/Product');

module.exports = mongoose.model("Product", productSchema);