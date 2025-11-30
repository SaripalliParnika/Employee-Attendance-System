// backend/middleware/authMiddleware.js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      if (!req.user) return res.status(401).json({ message: "User not found" });
      return next();
    }
    return res.status(401).json({ message: "No token, not authorized" });
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(401).json({ message: "Not authorized" });
  }
};

const managerOnly = (req, res, next) => {
  if (!req.user) return res.status(401).json({ message: "Not authorized" });
  if (req.user.role !== "manager") {
    return res.status(403).json({ message: "Access denied: Managers only" });
  }
  next();
};

// Export names exactly: protect and managerOnly
module.exports = {
  protect,
  managerOnly,
};
