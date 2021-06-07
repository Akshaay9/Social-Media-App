import React, { useEffect, useState } from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import PostBar from "../PostForm/Post";
import Background from "./Background";
import UsersPost from "../../Components/Posts/Index";
import { useLocation, useParams } from "react-router";
import IndividualPost from "../../Components/IndividualPost/IndividualPost";
import { useSelector, useDispatch } from "react-redux";

function Index() {
  const { id } = useParams();
  const location = useLocation();
  let postType = location.pathname.split("/")[2];
  const individualUserStyle = "individualUserStyle";
  const allUsers = useSelector((state) => state.Users.Allusers);
  const currentUser = useSelector((state) => state.currentUser.User);
  const [individualUser, setIndividualUser] = useState({});

  useEffect(() => {
    const indiUSer = allUsers?.find((ele) => ele._id == id);
    setIndividualUser(indiUSer);
  }, [allUsers]);

  console.log(individualUser);

  return (
    <div>
      <Background individualUser={individualUser} />
      <LeftSideBar individualUserStyle={individualUserStyle} />
      {currentUser?._id === individualUser?._id && (
        <PostBar individualUserStyle={individualUserStyle} />
      )}
      <UsersPost />

      {/* modal for individual post */}
      {(location.pathname.includes("image") && (
        <IndividualPost postType={postType} />
      )) ||
        (location.pathname.includes("text") && (
          <IndividualPost postType={postType} />
        ))}
    </div>
  );
}

export default Index;
