import Comment from "../Models/Comment.model.js";

export const getIndividualComment = async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid Comment id" });
    }
    const individualComment = await Comment.findById(id);
    if (!individualComment) {
      res.status(400).json( "Comment not found" );
    }
    req.individualComment = individualComment;
    next();
  } catch (error) {
    console.log(error);
  }
};
