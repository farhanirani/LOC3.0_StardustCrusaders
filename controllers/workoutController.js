const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const Steps = require("../models/stepsModel");
const Completed = require("../models/completedModel");

//========================================================================================
/*                                                                                      *
 *                              Workout create
 *                                                                                      */
//========================================================================================
// name1;123;link1$name2;32;$3333;60;

module.exports.createWorkout = async (req, res) => {
  try {
    const { name, desc, category, calories, steps } = req.body;
    const user = await User.findOne({ _id: req.user });
    const newWorkout = new Workout({
      name: name,
      desc: desc,
      category: category,
      creatorID: req.user,
      creatorname: user.userName,
      calories: calories,
      upvotes: [],
      downvotes: [],
      reported: [],
    });
    var saved = await newWorkout.save();
    // console.log(saved);

    const stepss = steps.split("$");
    for (var i = 0; i < stepss.length; i++) {
      temp = stepss[i].split(";");
      //   console.log(temp);

      const newStep = new Steps({
        workoutid: saved._id,
        number: i + 1,
        information: temp[0],
        duration: temp[1],
        link: temp[2],
      });
      await newStep.save();
    }

    res.status(200).json(saved);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//========================================================================================
/*                                                                                      *
 *                              get workouts
 *                                                                                      */
//========================================================================================]

module.exports.getWorkout = async (req, res) => {
  try {
    const { category } = req.body;
    if (category == "general") {
      const ans = await Workout.find({});
      res.json(ans);
    } else {
      const ans = await Workout.find({ category: category });
      res.json(ans);
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              get workout
 *                                                                                      */
//========================================================================================]

module.exports.getWorkoutid = async (req, res) => {
  try {
    const workoutid = req.params.wid;
    var main = await Workout.find({ _id: workoutid });
    const ans = await Steps.find({ workoutid: workoutid }).sort({ number: 1 });
    for (var i = 0; i < ans.length; i++) {
      main.push(ans[i]);
    }
    res.json(main);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Workout completed
 *                                                                                      */
//========================================================================================

module.exports.completedworkout = async (req, res) => {
  try {
    const workoutid = req.params.wid;
    const { username } = req.body;
    // console.log(workoutid);
    const temp = await Workout.findById(workoutid);
    const newComplete = new Completed({
      userid: req.user,
      username: username,
      workoutid: workoutid,
      calories: temp.calories,
    });

    const saved = await newComplete.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Workout leaderboard
 *                                                                                      */
//========================================================================================

module.exports.getLeaderboard = async (req, res) => {
  try {
    const ans = await Completed.aggregate([
      {
        $group: {
          _id: "$userid",
          username: { $first: "$username" },
          totalcalories: { $sum: "$calories" },
        },
      },
      { $sort: { totalcalories: -1 } },
    ]);
    console.log(ans);
    res.json(ans);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Workout leaderboard today
 *                                                                                      */
//========================================================================================

module.exports.getLeaderboardtoday = async (req, res) => {
  try {
    var start = new Date();
    start.setHours(0, 0, 0, 0);
    var end = new Date();
    end.setHours(23, 59, 59, 999);

    const ans = await Completed.aggregate([
      {
        $match: { created_at: { $gte: start, $lte: end } },
      },
      {
        $group: {
          _id: "$userid",
          username: { $first: "$username" },
          totalcalories: { $sum: "$calories" },
        },
      },
      { $sort: { totalcalories: -1 } },
    ]);

    console.log(ans);
    res.json(ans);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

//========================================================================================
/*                                                                                      *
 *                              Workout
 *                                                                                      */
//========================================================================================
