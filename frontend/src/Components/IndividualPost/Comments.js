import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
function Comments({ ele, comment, setComment, updateCommentHandler }) {
  return (
    <>
      <div className="individual-post-comment" id="style-7">
        <div className="comments-list">
          <div className="comments">
            <Avatar alt="Remy Sharp" src={ele.user.profileImage} />
            <div className="comment">
              <h4>{ele?.user.name}</h4>
              <p>{ele?.commentID.comment}</p>
            </div>
            <i class="fas fa-ellipsis-h "> </i>
            <ul>
              <li onClick={() => updateCommentHandler(ele?.commentID._id)}>
                Update{" "}
              </li>
              <li>Delete</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
