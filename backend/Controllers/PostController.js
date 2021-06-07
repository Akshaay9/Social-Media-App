import Post from "../Models/Post.model.js";
import pkg from "lodash";
const { extend } = pkg;

// allpost
export const getAllPost = async (req, res) => {
  const allPosts = await Post.find({})
    .populate("user", "_id name profileImage")
    .populate("likes.likeID", "name profileImage")
    .populate("comments.commentID")
    .populate("comments.user", "name profileImage");
  return res.status(200).json(allPosts);
};

// newpost
export const addNewPost = async (req, res) => {
  const { description, image, PostType, feeling } = req.body;
  const newPost = {
    user: req.user.id,
    description,
    image,
    PostType,
    feeling,
  };
  const savePost = new Post(newPost);
  await savePost.save();
  const allPosts = await Post.findById(savePost._id)
    .populate("user")
    .populate("likes.likeID", "name profileImage")
    .populate("comments.commentID")
    .populate("comments.user", "name profileImage");
  return res.status(200).json(allPosts);
};

// update post
export const updatePost = async (req, res) => {
  let { individualPost } = req;
  let updatedPost = req.body;
  individualPost = extend(individualPost, updatedPost);
  await individualPost.save();
  const allPosts = await Post.findById(individualPost._id)
    .populate("user")
    .populate("likes.likeID", "name profileImage")
    .populate("comments.commentID")
    .populate("comments.user", "name profileImage");
  return res.status(200).json(allPosts);
};

// delete post
export const deletePost = async (req, res) => {
  const { postID } = req.params;
  await Post.findByIdAndDelete(postID);
  return res.status(200).json(postID);
};

// individual users post

export const individualUsersPost = async (req, res) => {
  const { userID } = req.params;
  const allPosts = await Post.find({ user: userID })
    .populate("user")
    .populate("likes.likeID", "name profileImage")
    .populate("comments.commentID")
    .populate("comments.user", "name profileImage");
  return res.status(200).json(allPosts);
};
