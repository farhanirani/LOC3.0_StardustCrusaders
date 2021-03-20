const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  url: { type: String, required: false },
  role: { type: String, required: true, default: "user" },
  reviewed: { type: Boolean, required: false, default: false },
});

module.exports = User = mongoose.model("user", userSchema);
