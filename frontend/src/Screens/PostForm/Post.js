import React from "react";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post-bar">
      <div className="post-bar-top">
        <Avatar
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/1119096097945739275/k5hjHB-J_400x400.jpg"
        />
        <div className="post-bar-top-round">
          <p>Whats on your mind Akshay ?</p>
        </div>
      </div>
      <div className="post-bar-bottom">
        <div className="post-bar-bottom-row-one">
          <i class="fas fa-images"></i>
          <p>upload Photo</p>
        </div>
        <div className="post-bar-bottom-row-two">
          <i class="far fa-smile-wink"></i>
          <p>Feeling/activity</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
