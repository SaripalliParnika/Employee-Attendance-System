const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { checkIn, checkOut, getTodayStatus } = require("../controllers/attendanceController");

// Employee Check-In
router.post("/checkin", protect, checkIn);

// Employee Check-Out
router.post("/checkout", protect, checkOut);

// Needed for EmployeeDashboard (/api/attendance/today)
router.get("/today", protect, getTodayStatus);

module.exports = router;
