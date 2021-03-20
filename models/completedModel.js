const mongoose = require("mongoose");

const completedSchema = new mongoose.Schema(
  {
    userid: { type: String, required: true },
    workoutid: { type: String, required: true },
    calories: { type: Number, required: true },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = Completed = mongoose.model("completed", completedSchema);
