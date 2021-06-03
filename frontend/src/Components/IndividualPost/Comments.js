import React from "react";
import Avatar from "@material-ui/core/Avatar";
function Comments({ ele }) {
  return (
    <>
      <div className="individual-post-comment" id="style-7">
        <div className="comments-list">
          <div className="comments">
            <Avatar alt="Remy Sharp" src={ele.user.profileImage} />
            <div className="comment">
              <h4>{ele?.user.name}</h4>
              <p>{ele.commentID.comment}</p>
            </div>
            <i class="fas fa-ellipsis-h"> </i>
            <ul>
              <li>Update </li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="individual-post-like">
        <div className="indilikeComment-like">
          <i class="far fa-thumbs-up"></i>
          <span>{3}</span>
        </div>
        <div className="indilikeComment-comment">
          <i class="fas fa-comments"></i>
          <span>{3}</span>
        </div>
        <div className="indilikeComment-share">
          <i class="fas fa-share-square"></i>
        </div>
      </div>
      <div className="add-comment individual-add-comment">
        <Avatar alt="Remy Sharp" src={ele.user.profileImage} />
        <input type="text" placeholder="Write a comment.." />
      </div>
    </>
  );
}

export default Comments;
