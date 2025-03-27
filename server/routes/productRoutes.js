const express = require("express");
const { getProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// Public routes
//router.get("/", getProducts);
//router.get("/:id", getProductById);

// Admin/Pharmacist routes
router.post("/", protect, createProduct);
//router.put("/:id", protect, updateProduct);
//router.delete("/:id", protect, deleteProduct);
//router.get('/products', getProducts);

// Define your routes
router.post('c', createProduct);
router.get('/products', getProducts);

module.exports = router;
