const express = require("express");
const router = express.Router();

const { protect, managerOnly } = require("../middleware/authMiddleware");

const {
  getAllAttendance,
  getEmployeeAttendance,
  getTeamSummary,
  exportCSV,
  todayStatus,
} = require("../controllers/managerController");

router.get("/attendance", protect, managerOnly, getAllAttendance);
router.get("/attendance/:id", protect, managerOnly, getEmployeeAttendance);
router.get("/summary", protect, managerOnly, getTeamSummary);
router.get("/today", protect, managerOnly, todayStatus);
router.get("/export", protect, managerOnly, exportCSV);

module.exports = router;
