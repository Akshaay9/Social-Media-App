import User from "../Models/User.model.js";

export const getIndividualUser = async (req, res, next, id) => {
  try {
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      res.status(400).json({ error: "invalid user id" });
    }
    const individualUser = await User.findById(id);
    if (!individualUser) {
      res.status(400).json({ error: "user not found" });
    }
    req.individualUser = individualUser;
    next();
  } catch (error) {
    console.log(error);
  }
};
