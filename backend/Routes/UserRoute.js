import express from "express";
import {
  clearAllNotification,
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
// follow unfollow
router.post("/followUnfollow/:userID", privateRoute, followUnfollow);

// get
// pubic
// clear all notifi
router.post("/clearnotification", privateRoute, clearAllNotification);

export default router;
