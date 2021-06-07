import express from "express";
import {
  followUnfollow,
  getAllUser,
  userLogin,
  userRegistraion,
} from "../Controllers/UserController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualUser } from "../MiddleWears/IndividualUser.js";
const router = express.Router();

router.param("userID", getIndividualUser);

// post
// pubic
// user login
router.post("/login", userLogin);

// post
// pubic
// user signup
router.post("/signup", userRegistraion);

// get
// pubic
// get all user
router.get("/", getAllUser);

// get
// pubic
// get all user
router.post("/followUnfollow/:userID", privateRoute, followUnfollow);

export default router;
