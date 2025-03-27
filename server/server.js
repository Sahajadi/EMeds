const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');


// Load environment variables
dotenv.config();

// Connect to Database
connectDB();

// Initialize Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
//app.use(morgan("dev"));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", productRoutes);
//app.use("/api/products", require("./routes/productRoutes"));
// app.use("/api/orders", require("./routes/orderRoutes"));

// Error Handling Middleware
app.use(require("./middlewares/errorMiddleware"));

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
