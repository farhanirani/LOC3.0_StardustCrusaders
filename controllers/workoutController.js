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
module.exports.createWorkout = async (req, res) => {
  try {
    const { name, desc, category, calories, steps } = req.body;

    const newWorkout = new Workout({
      name: name,
      desc: desc,
      category: category,
      creatorID: req.user,
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

    res.json(true);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
//========================================================================================
/*                                                                                      *
 *                              Workout
 *                                                                                      */
//========================================================================================
//========================================================================================
/*                                                                                      *
 *                              Workout
 *                                                                                      */
//========================================================================================
//========================================================================================
/*                                                                                      *
 *                              Workout
 *                                                                                      */
//========================================================================================
//========================================================================================
/*                                                                                      *
 *                              Workout
 *                                                                                      */
//========================================================================================
//========================================================================================
/*                                                                                      *
 *                              Workout
 *                                                                                      */
//========================================================================================
//========================================================================================
/*                                                                                      *
 *                              Workout completed
 *                                                                                      */
//========================================================================================

module.exports.completedworkout = async (req, res) => {
  try {
    console.log(req.user);
    const workoutid = req.params.wid;
    console.log(workoutid);
    const temp = await Workout.findById(workoutid);
    console.log(temp);
    // const newComplete = new Completed({
    //   userid: userid,
    //   workoutid: workoutid,
    //   calories:
    // });

    // const saved = await newComplete.save();
    // res.json(saved);
    res.json(true);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
