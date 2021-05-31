import Post from "../Models/Post.model.js";

export const getAllPost = async (req, res) => {
  const allPosts = await Post.find({});
  return res.status(200).json(allPosts);
};

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
  res.status(200).json(savePost);
};

export const updatePost = async (req, res) => {
  const { individualPost } = req;
  res.status(200).json(individualPost);
};
