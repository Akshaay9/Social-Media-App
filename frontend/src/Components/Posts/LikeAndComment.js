import React, { useState } from "react";
import "./LikeAndComment.css";
import Avatar from "@material-ui/core/Avatar";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addUpdateComment,
  deleteComment,
  likeUnlike,
} from "../../features/Posts/PostSlice";
function LikeAndComment({ ele }) {
  const dispatch = useDispatch();
  let location = useLocation();
  const currentUser = useSelector((state) => state.currentUser.User);
  const [comment, setComment] = useState("");
  const [updateComment, setUpdateComment] = useState(false);

  const isPostAlredyLiked = () => {
    const isLike = ele.likes?.some((ele) => ele.likeID._id === currentUser._id);
    if (isLike) {
      return { color: "#2d88ff" };
    }
    return {};
  };
  const commentHandler = (e) => {
    e.preventDefault();
    const dataToBeSent = {
      token: currentUser.token,
      URL: updateComment
        ? `http://localhost:5000/api/user/comment/update/${ele._id}/${ele.comments[0]?.commentID._id}`
        : `http://localhost:5000/api/user/comment/${ele._id}`,
      comment: comment,
    };
    dispatch(addUpdateComment(dataToBeSent));
    setUpdateComment(false);
    setComment("");
  };

  const updateCommentHandler = () => {
    setUpdateComment(true);
    setComment(ele.comments[0]?.commentID.comment);
  };

  return (
    <div>
      <div className="postData-likeAndComment-top">
        <div
          className="likeAndComment-like"
          style={isPostAlredyLiked()}
          onClick={() => {
            const dataToBeSent = {
              id: ele._id,
              token: currentUser.token,
            };
            dispatch(likeUnlike(dataToBeSent));
          }}
        >
          <i class="far fa-thumbs-up"></i>
          <span>{ele.likes?.length}</span>
        </div>
        <div className="likeAndComment-comment">
          <i class="fas fa-comments"></i>
          <span>{ele.comments?.length}</span>
        </div>
        <div className="likeAndComment-share">
          <i class="fas fa-share-square"></i>
        </div>
      </div>

      <div className="comments-list">
        {ele?.comments?.length > 0 && (
          <div className="comments">
            <Link to={`/user/${ele.comments[0]?.user._id}`}>
              <Avatar
                alt="Remy Sharp"
                src={ele.comments[0]?.user.profileImage}
              />
            </Link>
            <div className="comment">
              <Link to={`/user/${ele.comments[0]?.user._id}`}>
                {" "}
                <h4>{ele.comments[0]?.user.name}</h4>
              </Link>
              <p>{ele.comments[0]?.commentID?.comment}</p>
            </div>
            {ele.comments[0].user._id === currentUser._id && (
              <>
                {" "}
                <i class="fas fa-ellipsis-h comment-i"> </i>
                <ul className="post-comment-ul">
                  <li onClick={() => updateCommentHandler()}>Update </li>
                  <li
                    onClick={() => {
                      const dataToBeSent = {
                        PostID: ele._id,
                        commentID: ele.comments[0]?.commentID._id,
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
        )}
        {ele?.comments?.length > 0 ? (
          <NavLink
            to={{
              pathname: `/${ele.PostType}/${ele._id}`,
            }}
            state={{ from: location.pathname }}
          >
            <p
              style={{
                color: "rgb(23 123 255)",
                cursor: "pointer",
                marginLeft: "3.5rem",
              }}
            >
              View all comments
            </p>
          </NavLink>
        ) : (
          <NavLink
            to={{
              pathname: `/${ele.PostType}/${ele._id}`,
            }}
            state={{ from: location.pathname }}
          >
            <p
              style={{
                color: "rgb(23 123 255)",
                cursor: "pointer",
                marginLeft: "1.5rem",
              }}
            >
              View Post
            </p>
          </NavLink>
        )}
      </div>
      <div className="add-comment">
        <Avatar alt="Remy Sharp" src={currentUser.profileImage} />
        <form onSubmit={(e) => commentHandler(e)}>
          <input
            type="text"
            required
            placeholder="Write a comment.."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default LikeAndComment;
