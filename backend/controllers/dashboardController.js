const Attendance = require("../models/Attendance");
const User = require("../models/User");

// ========================
// Employee Dashboard
// ========================
exports.getEmployeeDashboard = async (req, res) => {
  try {
    const userId = req.user._id;

    const presentCount = await Attendance.countDocuments({
      userId,
      status: "present"
    });

    const absentCount = await Attendance.countDocuments({
      userId,
      status: "absent"
    });

    const lateCount = await Attendance.countDocuments({
      userId,
      status: "late"
    });

    const totalHours = await Attendance.aggregate([
      { $match: { userId } },
      { $group: { _id: null, total: { $sum: "$totalHours" } } }
    ]);

    const recentAttendance = await Attendance.find({ userId })
      .sort({ date: -1 })
      .limit(7);

    res.json({
      presentCount,
      absentCount,
      lateCount,
      totalHours: totalHours[0]?.total || 0,
      recentAttendance
    });
  } catch (error) {
    res.status(500).json({ message: "Dashboard error", error });
  }
};

// ========================
// Manager Dashboard
// ========================
exports.getManagerDashboard = async (req, res) => {
  try {
    // Total employees
    const totalEmployees = await User.countDocuments({ role: "employee" });

    // Who is present today
    const today = new Date().toISOString().split("T")[0];

    const presentToday = await Attendance.countDocuments({
      date: today,
      status: "present"
    });

    const absentToday = totalEmployees - presentToday;

    // Find late employees
    const lateToday = await Attendance.countDocuments({
      date: today,
      status: "late"
    });

    res.json({
      totalEmployees,
      presentToday,
      absentToday,
      lateToday
    });
  } catch (error) {
    res.status(500).json({ message: "Manager dashboard error", error });
  }
};
