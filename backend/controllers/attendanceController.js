const Attendance = require("../models/Attendance");
const moment = require("moment");

// Employee Check-In
exports.checkIn = async (req, res) => {
  try {
    const userId = req.user._id;
    const today = moment().startOf("day").toDate();

    const already = await Attendance.findOne({ userId, date: today });
    if (already) {
      return res.status(400).json({ message: "Already checked in today" });
    }

    const record = await Attendance.create({
      userId,
      date: today,
      checkInTime: new Date(),
      status: "present",
    });

    res.json({ message: "Check-in successful", record });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// Employee Check-Out
exports.checkOut = async (req, res) => {
  try {
    const userId = req.user._id;
    const today = moment().startOf("day").toDate();

    const record = await Attendance.findOne({ userId, date: today });

    if (!record) {
      return res.status(400).json({ message: "Check-in not found" });
    }
    if (record.checkOutTime) {
      return res.status(400).json({ message: "Already checked out today" });
    }

    record.checkOutTime = new Date();

    const hours =
      (record.checkOutTime - record.checkInTime) / (1000 * 60 * 60);

    record.totalHours = hours.toFixed(2);

    await record.save();

    res.json({ message: "Check-out successful", record });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// GET Today Attendance Status (for employee)
exports.getTodayStatus = async (req, res) => {
  try {
    const userId = req.user._id;
    const today = moment().startOf("day").toDate();

    const status = await Attendance.findOne({ userId, date: today });

    res.json(status || { message: "Not checked in yet" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
