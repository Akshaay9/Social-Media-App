import React from "react";
import "./LikeAndComment.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likeUnlike } from "../../features/Posts/PostSlice";
function LikeAndComment({ ele }) {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.User);
  const isPostAlredyLiked = () => {
    const isLike = ele.likes.some((ele) => ele.likeID._id === currentUser._id);
    if (isLike) {
      return { color: "#2d88ff" };
    }
    return {};
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
        {ele.comments.length > 0 && (
          <div className="comments">
            <Avatar alt="Remy Sharp" src={ele.comments[0]?.user.profileImage} />
            <div className="comment">
              <h4>{ele.comments[0]?.user.name}</h4>
              <p>{ele.comments[0]?.commentID.comment}</p>
            </div>
            <i class="fas fa-ellipsis-h comment-i"> </i>
            <ul>
              <li>Update </li>
              <li>Delete</li>
            </ul>
          </div>
        )}
        {
          <Link to={`/${ele.PostType}/${ele._id}`}>
            <p
              style={{
                color: "rgb(23 123 255)",
                cursor: "pointer",
                marginLeft: "3.5rem",
              }}
            >
              View all comments
            </p>
          </Link>
        }
      </div>
      <div className="add-comment">
        <Avatar alt="Remy Sharp" src={currentUser.profileImage} />
        <input type="text" placeholder="Write a comment.." />
      </div>
    </div>
  );
}

export default LikeAndComment;
