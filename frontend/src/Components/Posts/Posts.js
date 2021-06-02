import React from "react";
import { postData } from "../../Data.js/PostData";
import Post from "./Post";

function Posts() {
  return (
    <div>
      {postData.map((ele) => (
        <Post ele={ele} />
      ))}
    </div>
  );
}

export default Posts;
