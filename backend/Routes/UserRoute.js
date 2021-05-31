import express from "express"
import { userLogin, userRegistraion } from "../Controllers/UserController.js";
const router = express.Router();


// post
// pubic
// user login
router.post("/login", userLogin)

// post
// pubic
// user signup
router.post("/signup",userRegistraion)



export default router;