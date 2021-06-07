import express from "express";
import { getIndividualComment } from "../MiddleWears/IndividualComment.js";
import privateRoute from "../MiddleWears/Authentication.js";
import {
  addComment,
  deleteComment,
  updateComment,
} from "../Controllers/CommentController.js";
import { getIndividualPost } from "../MiddleWears/IndividualPost.js";
const router = express.Router();

// middlewear
router.param("commentID", getIndividualComment);
router.param("postID", getIndividualPost);

// post
// private
// add new comment
router.post("/:postID", privateRoute, addComment);

// post
// private
// delete comment
router.delete("/:postID/:commentID", privateRoute, deleteComment);


// post
// private
// update comment
router.post("/update/:postID/:commentID", privateRoute, updateComment);

export default router;
