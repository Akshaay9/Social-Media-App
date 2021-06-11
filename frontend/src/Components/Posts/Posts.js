import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import "./Post.css";
import { useLocation } from "react-router";
function Posts() {
  const location = useLocation();
  const Posts = useSelector((state) => state.Posts.posts);

  const style = () => {
    if (
      location.pathname.includes("image") ||
      location.pathname.includes("text")
    ) {
      return {
        height: "110vh",
        overflow: "hidden",
      };
    }
  };

  return (
    <div className="post-data-container " style={style()}>
      {Posts.length > 0 && Posts.map((ele) => <Post ele={ele} />)}
    </div>
  );
}

export default Posts;
