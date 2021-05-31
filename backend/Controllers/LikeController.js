import Post from "../Models/Post.model.js";

export const addOrRemoveLike = async (req, res) => {
  let { individualPost } = req;

  const isPostAlredyLiked = individualPost.likes.some(
    (ele) => JSON.stringify(ele.likeID) == JSON.stringify(req.user.id)
  );
  if (isPostAlredyLiked) {
    individualPost.likes = individualPost.likes.filter(
      (ele) => JSON.stringify(ele.likeID) !== JSON.stringify(req.user.id)
    );
    await individualPost.save();
    const allPosts = await Post.find({});
    return res.status(200).json(allPosts);
  } else {
    individualPost.likes.push({ likeID: req.user.id });
    await individualPost.save();
    const allPosts = await Post.find({});
    return res.status(200).json(allPosts);
  }
};
