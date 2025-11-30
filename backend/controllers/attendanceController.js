const Attendance = require("../models/Attendance");
const User = require("../models/User");
const moment = require("moment");

// Get all employees attendance
exports.getAllAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("userId", "name email role employeeId");
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Get specific employee attendance
exports.getEmployeeAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ userId: req.params.id });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Team summary
exports.getTeamSummary = async (req, res) => {
  try {
    const users = await User.find({ role: "employee" });
    const attendanceRecords = await Attendance.find();

    res.json({
      totalEmployees: users.length,
      totalAttendanceRecords: attendanceRecords.length
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Export CSV (simple version)
exports.exportCSV = async (req, res) => {
  try {
    const attendance = await Attendance.find();
    res.json({ message: "CSV export not implemented fully", attendance });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// Today's status
exports.todayStatus = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const present = await Attendance.find({ date: today });
    res.json({
      presentCount: present.length
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
