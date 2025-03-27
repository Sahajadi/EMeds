const express = require("express");
const { register, login, getProfile, updateProfile } = require("../controllers/userController");

const {protect} = require("../middlewares/authMiddleware");

const router = express.Router();

console.log("getProfile:", getProfile);
console.log("protect:", protect);

// Public routes
router.post("/register", register);
router.post("/login", login);

// Protected routes
router.get("/profile/:id", protect, getProfile);
router.put("/profile/:id", protect, updateProfile);

module.exports = router;
