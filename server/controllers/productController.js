const Product = require('../models/Product');
const asyncHandler = require("express-async-handler");

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
// Function to create a product
const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, manufacturer, inStock, prescription, image } = req.body;  // Ensure data is received
    if (!name || !description || !price || !category || !manufacturer || typeof inStock !== "boolean" || typeof prescription !== "boolean"  || !image) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Mock database save (replace with actual DB logic)
    const newProduct = new Product({ name, description, price, category, manufacturer, inStock, prescription, image });
    const savedProduct = await newProduct.save();
    
    res.status(201).json({ message: "Product created", "Saved Product": savedProduct });
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

   // Clean the product ID by trimming it
   const productId = req.params.id.trim();
   
  //find the product by id
  const product = await Product.findById(req.params.id);

  if (product) {
    //update the fields
    product.name = name || product.name;
    product.price = price || product.price;
    product.category = category || product.category;
    product.description = description || product.description;
    product.image = image || product.image;
    product.countInStock = countInStock || product.countInStock;

    //save the updated product
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
    await Product.deleteOne({ _id: req.params.id });
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