const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  category: { type: String, required: true },
  creatorID: { type: String, required: true },
  calories: { type: Number, required: true },
  approved: { type: Boolean, required: true, default: false },
  upvotes: { type: Array, required: true },
  downvotes: { type: Array, required: true },
  reported: { type: Array, required: true },
});

module.exports = Workout = mongoose.model("workout", workoutSchema);
