const router = require("express").Router();
const auth = require("./middleware/auth");

//========================================================================================
/*                                                                                      *
 *                              User Routes
 *                                                                                      */
//========================================================================================

const User = require("./controllers/userController");

router.get("/users/:id", User.homeUser);
router.post("/users/register", User.registerUser);
router.post("/users/login", User.loginUser);
router.post("/users/checktoken", User.tokenIsValid);

// router.delete("/users/delete", auth, User.deleteUser);

//========================================================================================
/*                                                                                      *
 *                              Workout Routes
 *                                                                                      */
//========================================================================================

const Workout = require("./controllers/workoutController");

router.post("/workout/create", auth, Workout.createWorkout);
router.post("/workout/completed/:wid", auth, Workout.completedworkout);
router.get("/workout", Workout.getWorkout);
router.get("/workout/leaderboard", Workout.getLeaderboard);
router.get("/workout/todayleaderboard", Workout.getLeaderboardtoday);
router.get("/workout/:wid", Workout.getWorkoutid);

//========================================================================================
/*                                                                                      *
 *                              asdasdasd Routes
 *                                                                                      */
//========================================================================================

module.exports = router;
