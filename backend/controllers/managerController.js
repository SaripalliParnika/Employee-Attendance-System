const User = require("../models/User");
const Attendance = require("../models/Attendance");
const { Parser } = require("json2csv");

// GET /api/manager/all
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: "employee" }).select("-password");
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch employees" });
  }
};

// GET /api/manager/employee/:id
exports.getEmployeeById = async (req, res) => {
  try {
    const attendance = await Attendance.find({ userId: req.params.id });
    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch attendance" });
  }
};

// GET /api/manager/summary
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

    res.status(200).json(summary);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch summary" });
  }
};

// GET /api/manager/today-status
exports.getTodayStatus = async (req, res) => {
  try {
    const today = new Date().toISOString().slice(0, 10);

    const attendance = await Attendance.find({ date: today }).populate(
      "userId",
      "name employeeId"
    );

    res.status(200).json(attendance);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch today's status" });
  }
};

// GET /api/manager/export
exports.exportAttendanceCSV = async (req, res) => {
  try {
    const attendanceData = await Attendance.find().lean();

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
    const csv = parser.parse(attendanceData);

    res.header("Content-Type", "text/csv");
    res.attachment("attendance_report.csv");
    return res.send(csv);
  } catch (err) {
    res.status(500).json({ message: "Failed to export CSV" });
  }
};
