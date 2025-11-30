const User = require("../models/User");
const Attendance = require("../models/Attendance");
const { Parser } = require("json2csv");
const moment = require("moment");

// GET: /api/manager/attendance  → all attendance records
exports.getAllAttendance = async (req, res) => {
  try {
    const data = await Attendance.find().populate("userId", "name email employeeId");
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch attendance" });
  }
};

// GET: /api/manager/attendance/:id → specific employee attendance
exports.getEmployeeAttendance = async (req, res) => {
  try {
    const data = await Attendance.find({ userId: req.params.id });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employee attendance" });
  }
};

// GET: /api/manager/summary → team summary
exports.getTeamSummary = async (req, res) => {
  try {
    const summary = await Attendance.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    res.json(summary);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch summary" });
  }
};

// GET: /api/manager/today → today's attendance
exports.todayStatus = async (req, res) => {
  try {
    const today = moment().startOf("day").toDate();

    const data = await Attendance.find({ date: today }).populate(
      "userId",
      "name employeeId"
    );

    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch today's status" });
  }
};

// GET: /api/manager/export → export CSV
exports.exportCSV = async (req, res) => {
  try {
    const attendance = await Attendance.find().lean();

    const fields = [
      "_id",
      "userId",
      "date",
      "status",
      "checkInTime",
      "checkOutTime",
      "totalHours",
    ];

    const parser = new Parser({ fields });
    const csv = parser.parse(attendance);

    res.header("Content-Type", "text/csv");
    res.attachment("attendance_report.csv");
    res.send(csv);
  } catch (err) {
    res.status(500).json({ message: "Failed to export CSV" });
  }
};
