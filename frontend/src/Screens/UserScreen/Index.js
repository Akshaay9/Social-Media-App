import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import PostBar from "../PostForm/Post";
import Background from "./Background";
import UsersPost from "../../Components/Posts/Index";
import { useLocation, useParams } from "react-router";
import IndividualPost from "../../Components/IndividualPost/IndividualPost";

function Index() {
  const { id } = useParams();
  const location = useLocation();
  let postType = location.pathname.split("/")[2];

  const individualUserStyle = "individualUserStyle";
  return (
    <div>
      <Background />
      <LeftSideBar individualUserStyle={individualUserStyle} />
      <PostBar individualUserStyle={individualUserStyle} />
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
