import express from "express";
import {
  addNewPost,
  getAllPost,
  updatePost,
  deletePost,
  individualUsersPost,
} from "../Controllers/PostController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPost } from "../MiddleWears/IndividualPost.js";
const router = express.Router();

// middlewear
router.param("postID", getIndividualPost);

// post
// private
// add new post
router.post("/", privateRoute, addNewPost);

// get
// pubic
// get all post
router.get("/", getAllPost);

// get
// pubic
// get all post
router.get("/:userID", privateRoute, individualUsersPost);

// get
// pubic
// update post
router.post("/:postID", privateRoute, updatePost);

// delete
// private
// delete individual post
router.delete("/:postID", privateRoute, deletePost);

export default router;
