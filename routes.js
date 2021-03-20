const router = require("express").Router();
const auth = require("./middleware/auth");

//========================================================================================
/*                                                                                      *
 *                              User Routes
 *                                                                                      */
//========================================================================================

const User = require("./controllers/userController");

router.get("/users/", auth, User.homeUser);
router.post("/users/register", User.registerUser);
router.post("/users/login", User.loginUser);
router.post("/users/checktoken", User.tokenIsValid);

// router.delete("/users/delete", auth, User.deleteUser);

module.exports = router;
