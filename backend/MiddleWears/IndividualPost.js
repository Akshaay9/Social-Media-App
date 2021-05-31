import Post from "../Models/Post.model.js";


export const getIndividualPost = async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid Post id" });
      }
      const individualPost = await Post.findById(id);
      if (!individualPost) {
        res.status(400).json({ error: "note not found" });
      }
      req.individualPost = individualPost
      next()
  } catch (error) {
    console.log(error);
  }
};