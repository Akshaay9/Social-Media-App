import React, { useState } from "react";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";
function Post() {
  return (
    <div className="post-bar">
      <div className="post-bar-top">
        <Avatar
          variant="rounded"
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
                  <ul>
                      <li> <span>😁 </span> Happy</li>
                      <li><span>😔 </span>Sad</li>
                      <li><span>😱</span>Excited</li>
                      <li><span>😎</span>Chilling</li>
                      <li><span>😍</span>Loved</li>
                  </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
