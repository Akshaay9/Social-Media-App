import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import TextPostCard from "./TextPostCard";
import LikeAndComment from "./LikeAndComment";
function Post({ ele }) {
  return (
    <div className="postData">
      {/*  */}
      <div className="postData-top">
        <Avatar alt="Remy Sharp" src={ele?.userID?.profileImage} />
        <div className="postData-top-details">
          <h3>{ele.userID.name}</h3>
          <span>24 m</span>
          <span>.</span>
          <i class="fas fa-globe-asia"></i>
        </div>
      </div>
      {/* mid */}
      <TextPostCard description={ele.description} />
      {/* end */}
      <LikeAndComment likes={ele.likes} comments={ ele.comments}/>
    </div>
  );
}

export default Post;
