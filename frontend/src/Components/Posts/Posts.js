import React from "react";
import Post from "./Post";
import {  useSelector } from "react-redux";
function Posts() {
  const Posts = useSelector((state) => state.Posts.posts);
  return (
    <div>
      {Posts.map((ele) => (
        <Post ele={ele} />
      ))}
    </div>
  );
}

export default Posts;
