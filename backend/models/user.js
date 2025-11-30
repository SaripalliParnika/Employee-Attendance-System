const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["employee", "manager"], default: "employee" },
  employeeId: { type: String, required: true, unique: true },  // e.g. EMP001
  department: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
