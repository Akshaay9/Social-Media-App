import React from "react";
import LeftSideBar from "../LeftSideBar/index";
import PostBar from "../PostForm/Post";
import UsersPost from "../../Components/Posts/Index";
function Index() {
  return (
    <div>
      <LeftSideBar />
      <PostBar />
      <UsersPost />
    </div>
  );
}

export default Index;
