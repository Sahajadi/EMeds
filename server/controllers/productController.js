const Product = require('../models/Product');
const asyncHandler = require("express-async-handler");

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
// Function to create a product
const createProduct = async (req, res) => {
  try {
    const { name, price } = req.body;  // Ensure data is received
    if (!name || !price) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Mock database save (replace with actual DB logic)
    const newProduct = { id: Date.now(), name, price };
    
    res.status(201).json({ message: "Product created", product: newProduct });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Function to get products
const getProducts = async (req, res) => {
  try {
      const products = await Product.find();
      res.status(200).json(products);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};
// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, countInStock } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.countInStock = countInStock || product.countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};