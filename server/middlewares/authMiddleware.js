const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  console.log("Headers:", req.headers); // Debugging

  let token = req.header("x-auth-token");

  // ✅ Also check Authorization header for Bearer token
  if (!token && req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1]; // Extract token from "Bearer {token}"
  }

  console.log("Received Token:", token || "No token found"); // Debugging

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded); // Debugging
    req.user = decoded;
    next();
  } catch (err) {
    console.log("Token Verification Error:", err); // Debugging error
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { protect };
