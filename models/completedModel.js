const mongoose = require("mongoose");

const completedSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    workoutid: { type: String, required: true },
    calories: { type: Integer, required: true },
  },
  { timespams: { createdAt: "created_at" } }
);

module.exports = Completed = mongoose.model("completed", completedSchema);
