import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector, useDispatch } from "react-redux";
import { deleteComment, deletePost } from "../../features/Posts/PostSlice";
import { Link, NavLink, useLocation } from "react-router-dom";
function Comments({ ele, updateCommentHandler, id }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.User);
  return (
    <>
      <div className="individual-post-comment" id="style-7">
        <div className="comments-list">
          <div className="comments">
            <Link to={`/user/${ele?.user._id}`}>
              <Avatar alt="Remy Sharp" src={ele?.user?.profileImage} />
            </Link>
            <div className="comment">
              <Link to={`/user/${ele?.user._id}`}>
                {" "}
                <h4>{ele?.user.name}</h4>{" "}
              </Link>
              <p>{ele?.commentID.comment}</p>
            </div>
            {ele?.user._id === currentUser.id && (
              <>
                {" "}
                <i class="fas fa-ellipsis-h "> </i>
                <ul>
                  <li onClick={() => updateCommentHandler(ele?.commentID._id)}>
                    Update{" "}
                  </li>
                  <li
                    onClick={() => {
                      const dataToBeSent = {
                        PostID: id,
                        commentID: ele.commentID._id,
                        token: currentUser.token,
                      };
                      dispatch(deleteComment(dataToBeSent));
                    }}
                  >
                    Delete
                  </li>
                </ul>{" "}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Comments;
