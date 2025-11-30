const mongoose = require("mongoose");

const AttendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  checkInTime: {
    type: Date,
    default: null,
  },

  checkOutTime: {
    type: Date,
    default: null,
  },

  status: {
    type: String,
    enum: ["present", "absent", "late", "half-day"],
    default: "present",
  },

  totalHours: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Attendance", AttendanceSchema);
