import express from "express";
import {
  addNewPost,
  getAllPost,
  updatePost,
  getIndividualPosts,
  deletePost,
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
// get individual post
router.post("/:postID", updatePost);

// get
// pubic
// get individual post
router.get("/:postID", getIndividualPosts);

// delete
// private
// delete individual post
router.delete("/:postID", privateRoute, deletePost);

export default router;
