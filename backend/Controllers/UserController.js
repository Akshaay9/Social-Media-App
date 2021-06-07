import assignJWT from "../MiddleWears/AssignJWT.js";
import Users from "../Models/User.model.js";
import bcrypt from "bcryptjs";
import { json } from "express";

// user registration
export const userRegistraion = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await Users.findOne({ email });
  if (user) {
    return res.status(400).json({ error: "user alredy exists,Please sign in" });
  }
  const newUser = await Users.create({
    name,
    email,
    password,
  });
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(password, salt);
  await newUser.save();
  res.status(200).json({
    id: newUser._id,
    name: newUser.name,
    email: newUser.email,
    token: assignJWT(newUser._id),
  });
};

// user login
export const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email });

  if (!user) {
    return res.status(400).json({ error: "user not found,please login" });
  }
  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    return res.status(400).json({ error: "invalid credentials" });
  }
  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    token: assignJWT(user._id),
  });
};

// get all users
export const getAllUser = async (req, res) => {
  const allUsers = await Users.find({}).select("-password");
  res.status(200).json(allUsers);
};

// followUnfollowpeople

export const followUnfollow = async (req, res) => {
  let { user, individualUser } = req;
  let currUser = await Users.findById(user.id);

  let isUserAlredyFollowing = individualUser.followers.filter(
    (ele) => JSON.stringify(ele.user) == JSON.stringify(currUser._id)
  );
  let isUserAlredyFollowed = currUser.following.filter(
    (ele) => JSON.stringify(ele.user) == JSON.stringify(individualUser._id)
  );

  if (isUserAlredyFollowing.length > 0 && isUserAlredyFollowed.length > 0) {
    individualUser.followers = individualUser.followers.filter(
      (ele) => JSON.stringify(ele.user) !== JSON.stringify(currUser._id)
    );
    currUser.following = currUser.following.filter(
      (ele) => JSON.stringify(ele.user) !== JSON.stringify(individualUser._id)
    );
    await currUser.save();
    await individualUser.save();
    const allUsers = await Users.find({});
    res.status(200).json(allUsers);
  } else {
    currUser.following.push({ user: individualUser._id });
    individualUser.followers.push({ user: currUser._id });
    await currUser.save();
    await individualUser.save();
    const allUsers = await Users.find({});
    res.status(200).json(allUsers);
  }
};
