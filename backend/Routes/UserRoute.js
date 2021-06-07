import express from "express";
import {
  getAllUser,
  userLogin,
  userRegistraion,
} from "../Controllers/UserController.js";
const router = express.Router();

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

export default router;
