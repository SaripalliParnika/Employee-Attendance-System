const express = require("express");
const { protect, managerOnly } = require("../middleware/authMiddleware");
const {
  getEmployeeDashboard,
  getManagerDashboard
} = require("../controllers/dashboardController");

const router = express.Router();

// Employee dashboard
router.get("/employee", protect, getEmployeeDashboard);

// Manager dashboard
router.get("/manager", protect, getManagerDashboard);

module.exports = router;
