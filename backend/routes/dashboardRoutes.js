const express = require("express");
const { protect, managerOnly } = require("../middleware/authMiddleware");
const {
  getEmployeeDashboard,
  getManagerDashboard
} = require("../controllers/dashboardController");

const router = express.Router();

// Employee dashboard
router.get("/employee", protect, getEmployeeDashboard);

// Manager dashboard (IMPORTANT: add managerOnly)
router.get("/manager", protect, managerOnly, getManagerDashboard);

module.exports = router;
