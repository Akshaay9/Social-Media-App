import Comment from "../Models/Comment.model.js";
import Post from "../Models/Post.model.js";
import pkg from "lodash";
const { extend } = pkg;

// post a new comment
export const addComment = async (req, res) => {
  const { individualPost } = req;
  const { comment } = req.body;
  const newComment = new Comment({
    comment,
  });
  const savedNewComment = await newComment.save();
  individualPost.comments.push({
    user: req.user.id,
    commentID: savedNewComment._id,
  });
  await individualPost.save();
  const allPosts = await Post.find({})
    .populate("likes.likeID", "name profileImage")
    .populate("comments.commentID")
    .populate("comments.user", "name profileImage");
  return res.status(200).json(allPosts);
};

// delete comment
export const deleteComment = async (req, res) => {
  let { individualPost } = req;
  const { individualComment } = req;
  await Comment.findByIdAndDelete(individualComment._id);
  individualPost.comments = individualPost.comments.filter(
    (ele) =>
      JSON.stringify(ele.commentID) !== JSON.stringify(individualComment._id)
  );
  await individualPost.save();
  const allPosts = await Post.find({})
    .populate("likes.likeID", "name profileImage")
    .populate("comments.commentID")
    .populate("comments.user", "name profileImage");
  return res.status(200).json(allPosts);
};


// update comment
export const updateComment = async (req, res) => {
  let { individualComment } = req;
  let updatedComment = req.body;
  individualComment = extend(individualComment, updatedComment);
  await individualComment.save();
  const allPosts = await Post.find({})
    .populate("likes.likeID", "name profileImage")
    .populate("comments.commentID")
    .populate("comments.user", "name profileImage");
  return res.status(200).json(allPosts);
};
