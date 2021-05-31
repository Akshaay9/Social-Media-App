import express from "express"
import { addNewPost, getAllPost, updatePost } from "../Controllers/PostController.js";
import privateRoute from "../MiddleWears/Authentication.js";
import { getIndividualPost } from "../MiddleWears/IndividualPost.js";
const router = express.Router();


router.param("postID",getIndividualPost)


// private
// pubic
// add new post
router.post("/", privateRoute, addNewPost)

// get
// pubic
// get all post
router.get("/", getAllPost)

// get
// pubic
// get individual post
router.get("/:postID",updatePost)

export default router;