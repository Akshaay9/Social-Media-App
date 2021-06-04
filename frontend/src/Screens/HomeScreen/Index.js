import React from "react";
import LeftSideBar from "../LeftSideBar/index";
import PostBar from "../PostForm/Post";
import UsersPost from "../../Components/Posts/Index";
import { useLocation, useParams } from "react-router";
import IndividualPost from "../../Components/IndividualPost/IndividualPost";

function Index() {
  const { id } = useParams();
  const location = useLocation();
  let postType = location.pathname.split("/")[2];

  return (
    <div>
      <LeftSideBar />
      <PostBar />
      <UsersPost />

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
