import express from "express";
import { addOrRemoveLike } from "../Controllers/LikeController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPost } from "../MiddleWears/IndividualPost.js";
const router = express.Router();
// middlewear
router.param("postID", getIndividualPost);

// post
// private
// add new post
router.post("/:postID", privateRoute, addOrRemoveLike);

export default router;
