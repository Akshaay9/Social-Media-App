import React from "react";
import "./LikeAndComment.css";
import Avatar from "@material-ui/core/Avatar";
function LikeAndComment({ likes, comments }) {
  return (
    <div>
      <div className="postData-likeAndComment-top">
        <div className="likeAndComment-like" style={{ color: "#2d88ff" }}>
          <i class="far fa-thumbs-up"></i>
          <span>{likes?.length}</span>
        </div>
        <div className="likeAndComment-comment">
          <i class="fas fa-comments"></i>
          <span>{comments?.length}</span>
        </div>
        <div className="likeAndComment-share">
          <i class="fas fa-share-square"></i>
        </div>
      </div>

      <div className="comments-list">
        {comments.length > 0 && (
          <div className="comments">
            <Avatar alt="Remy Sharp" src={comments[0]?.user.profileImage} />
            <div className="comment">
              <h4>{comments[0]?.user.name}</h4>
              <p>{comments[0]?.commentID.comment}</p>
            </div>
          </div>
        )}
        <p style={{ color: "rgb(23 123 255)", cursor: "pointer" }}>
          View all comments
        </p>
      </div>
      <div className="add-comment">
        <Avatar alt="Remy Sharp" src={comments[0]?.user.profileImage} />
        <input type="text" placeholder="Write a comment.." />
      </div>
    </div>
  );
}

export default LikeAndComment;
