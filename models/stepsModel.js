const mongoose = require("mongoose");

const stepsSchema = new mongoose.Schema({
  workoutid: { type: String, required: true },
  number: { type: String, required: true },
  information: { type: String, required: true },
  duration: { type: Number, required: true },
  link: { type: String, required: false },
});

module.exports = Steps = mongoose.model("steps", stepsSchema);
