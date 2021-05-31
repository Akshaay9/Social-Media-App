import Post from "../Models/Post.model.js";
import pkg from "lodash";
const { extend } = pkg;

// allpost
export const getAllPost = async (req, res) => {
  const allPosts = await Post.find({});
  return res.status(200).json(allPosts);
};

// newpost
export const addNewPost = async (req, res) => {
  const { description, image, lng, lat, bgColor, PostType } = req.body;
  const newPost = {
    user: req.user.id,
    description,
    image,
    lng,
    lat,
    bgColor,
    PostType,
  };
  const savePost = new Post(newPost);
  await savePost.save();
  const allPosts = await Post.find({});
  return res.status(200).json(allPosts);
};

// update post
export const updatePost = async (req, res) => {
  let { individualPost } = req;
  let updatedPost = req.body;
  individualPost = extend(individualPost, updatedPost);
  await individualPost.save();
  const allPosts = await Post.find({});
  return res.status(200).json(allPosts);
};

// individual post
export const getIndividualPosts = async (req, res) => {
  const { individualPost } = req;
  res.status(200).json(individualPost);
};

export const deletePost = async (req, res) => {
  const { postID } = req.params;
  await Post.findByIdAndDelete(postID);
  const allPosts = await Post.find({});
  return res.status(200).json(allPosts);
};
