import assignJWT from "../MiddleWears/AssignJWT.js";
import Users from "../Models/User.model.js";
import bcrypt from "bcryptjs";
import pkg from "lodash";
import Post from "../Models/Post.model.js";
const { extend } = pkg;

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
  const newNotification = {
    user: "60fe23d7825d97186c4f3807",
    text: "Welcome's you to Fit.Shark",
  };
  newUser.notification.push(newNotification);
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
  const allUsers = await Users.find({})
    .sort({ created_at: -1 })
    .select("-password")
    .populate("notification.user", "_id name profileImage")
    .populate("following.user", "_id name profileImage")
    .populate("followers.user", "_id name profileImage");

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
    const allUsers = await Users.find({})
      .select("-password")
      .populate("notification.user", "_id name profileImage")
      .populate("following.user", "_id name profileImage")
      .populate("followers.user", "_id name profileImage");
    res.status(200).json(allUsers);
  } else {
    currUser.following.push({ user: individualUser._id });
    individualUser.followers.push({ user: currUser._id });
    const newNotification = {
      user: req.user.id,
      text: "started following you",
    };

    individualUser.notification.push(newNotification);
    await currUser.save();
    await individualUser.save();
    const allUsers = await Users.find({})
      .select("-password")
      .populate("notification.user", "_id name profileImage")
      .populate("following.user", "_id name profileImage")
      .populate("followers.user", "_id name profileImage");
    res.status(200).json(allUsers);
  }
};

// clear all notification
export const clearAllNotification = async (req, res) => {
  let { user } = req;
  let presentUser = await Users.findById(user.id);
  let update = { viewed: true };

  let test = presentUser.notification.map((ele) => {
    return {
      user: ele.user,
      text: ele.text,
      postID: ele?.postID,
      viewed: true,
    };
  });
  presentUser.notification = test;
  await presentUser.save();
  const allUsers = await Users.find({})
    .select("-password")
    .populate("notification.user", "_id name profileImage")
    .populate("following.user", "_id name profileImage")
    .populate("followers.user", "_id name profileImage");
  res.status(200).json(allUsers);
};

export const updateUserImage = async (req, res) => {
  let { user } = req;
  let presentUser = await Users.findById(user.id);
  console.log(req.body);
  presentUser = extend(presentUser, req.body);
  await presentUser.save();
  const allUsers = await Users.find({})
    .select("-password")
    .populate("notification.user", "_id name profileImage")
    .populate("following.user", "_id name profileImage")
    .populate("followers.user", "_id name profileImage");
  res.status(200).json(allUsers);
};
