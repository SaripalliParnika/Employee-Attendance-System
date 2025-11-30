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

router.get("/all", protect, managerOnly, getAllAttendance);
router.get("/employee/:id", protect, managerOnly, getEmployeeAttendance);
router.get("/summary", protect, managerOnly, getTeamSummary);
router.get("/export", protect, managerOnly, exportCSV);
router.get("/today-status", protect, managerOnly, todayStatus);

module.exports = router;
