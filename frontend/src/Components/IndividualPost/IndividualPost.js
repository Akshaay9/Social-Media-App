import React, { useEffect, useState } from "react";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";
import Comments from "./Comments";
import { useParams, useNavigate } from "react-router";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getIndividualPost,
  clearIndividualPost,
  addUpdateComment,
  deletePost,
  likeUnlike,
  likeUnlikePost,
  updateComments,
  addNewComment,
  deletePostlocally,
} from "../../features/Posts/PostSlice";
import { toast } from "react-toastify";
import { BE_URL } from "../../const";
function IndividualPost() {
  const { id } = useParams();
  let location = useLocation();
  const navigate = useNavigate();
  const { posts, status, individualPost } = useSelector((state) => state.Posts);
  const currentUser = useSelector((state) => state.currentUser.User);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  const [updateComment, setUpdateComment] = useState(false);
  const [commentID, setCommentID] = useState();
  const { presentUser } = useSelector((state) => state.Users);

  useEffect(() => {
    dispatch(getIndividualPost(id));
  }, [status, posts]);

  // modal close
  const closeModal = (e) => {
    if (e.target.classList.contains("inidividual-post-container")) {
      navigate(location?.state?.from ? location?.state?.from : "/");
      dispatch(clearIndividualPost());
    }
  };

  // comment handler
  const commentHandler = (e) => {
    e.preventDefault();
    const dataToBeSent = {
      token: currentUser.token,
      URL: updateComment
        ? `${BE_URL}/api/user/comment/update/${id}/${commentID}`
        : `${BE_URL}/api/user/comment/${id}`,
      comment: comment,
    };
    updateComment
      ? dispatch(
          updateComments({
            postID: id,
            comment: comment,
            commentID: commentID,
          })
        )
      : dispatch(
          addNewComment({
            comment: comment,
            postID: id,
            user: {
              _id: presentUser._id,
              name: presentUser.name,
              profileImage: presentUser.profileImage,
            },
          })
        );
    dispatch(addUpdateComment(dataToBeSent));
    setUpdateComment(false);
    setCommentID();
    setComment("");
  };

  // update comment
  const updateCommentHandler = (id) => {
    setCommentID(id);
    setUpdateComment(true);
    const updateCommentText = individualPost[0].comments.find(
      (ele) => ele.commentID._id == id
    );
    setComment(updateCommentText.commentID.comment);
  };

  const isPostAlredyLiked = () => {
    const isLike = individualPost[0]?.likes?.some(
      (ele) => ele.likeID._id === currentUser.id
    );
    if (isLike) {
      return { color: "#2d88ff" };
    }
    return {};
  };

  return (
    <>
      {individualPost.length > 0 && (
        <div
          className="inidividual-post-container"
          onClick={(e) => closeModal(e)}
        >
          <div className="individual-text-post">
            {individualPost[0].PostType == "text" ? (
              <div className="individual-image-post-left text-post-left">
                <p>{individualPost[0].description}</p>
              </div>
            ) : individualPost[0].PostType == "image" ? (
              <div className="individual-image-post-left ">
                <img src={individualPost[0].image} />
              </div>
            ) : (
              ""
            )}

            <div className="individual-post-right">
              <div className="individual-post-right-top">
                <div className="avatar">
                  <Link to={`/user/${individualPost[0]?.user._id}`}>
                    <Avatar
                      alt="Remy Sharp"
                      src={individualPost[0].user.profileImage}
                    />
                  </Link>
                  <Link to={`/user/${individualPost[0]?.user._id}`}>
                    <h3>{individualPost[0].user.name}</h3>
                  </Link>

                  {individualPost[0].feeling && (
                    <p style={{ marginLeft: ".5rem" }}>
                      is {individualPost?.[0]?.feeling?.split(" ")?.[0]} feeling
                      &nbsp;{individualPost?.[0]?.feeling?.split?.(" ")[1]}{" "}
                    </p>
                  )}
                </div>

                {individualPost[0]?.user._id === currentUser.id && (
                  <>
                    {" "}
                    <i class="fas fa-ellipsis-h"> </i>
                    <ul>
                      <NavLink
                        to={{
                          pathname: `/modal/${individualPost[0]._id}?update=true`,
                        }}
                        state={{ from: location.pathname }}
                      >
                        {" "}
                        <li> Update Post </li>
                      </NavLink>

                      <li
                        onClick={() => {
                          dispatch(deletePostlocally(id));
                          const dataToBeSent = {
                            id: id,
                            token: currentUser.token,
                          };
                          dispatch(deletePost(dataToBeSent));
                          navigate(
                            location?.state?.from ? location?.state?.from : "/"
                          );
                        }}
                      >
                        Delete Post
                      </li>
                    </ul>{" "}
                  </>
                )}
              </div>
              {location.pathname.includes("image") && (
                <div className="individual-post-right-top">
                  <div className="avatar">
                    <Link to={`/user/${individualPost[0]?.user._id}`}>
                      <Avatar
                        alt="Remy Sharp"
                        src={individualPost[0].user?.profileImage}
                      />
                    </Link>
                    <h3>
                      <span>{individualPost[0].description}</span>
                    </h3>
                  </div>
                </div>
              )}
              <h4>Comments</h4>
              <div className="individual-comments">
                {individualPost[0].comments.map((ele) => (
                  <>
                    <Comments
                      ele={ele}
                      updateCommentHandler={updateCommentHandler}
                      id={id}
                    />
                  </>
                ))}
              </div>
              <div className="individual-post-like">
                <div
                  className="indilikeComment-like"
                  style={isPostAlredyLiked()}
                >
                  <i
                    class="far fa-thumbs-up"
                    onClick={() => {
                      dispatch(
                        likeUnlikePost({
                          postID: individualPost[0]._id,
                          userID: currentUser.id,
                        })
                      );
                      const dataToBeSent = {
                        id: individualPost[0]._id,
                        token: currentUser.token,
                      };
                      dispatch(likeUnlike(dataToBeSent));
                    }}
                  ></i>
                  <span>{individualPost[0].likes?.length}</span>
                </div>
                <div className="indilikeComment-comment">
                  <i class="fas fa-comments"></i>
                  <span>{individualPost[0].comments?.length}</span>
                </div>
                <div className="indilikeComment-share">
                  <i class="fas fa-share-square"></i>
                </div>
              </div>
              <div className="add-comment individual-add-comment">
                <Avatar alt="Remy Sharp" src={presentUser.profileImage} />
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
          </div>
        </div>
      )}
    </>
  );
}

export default IndividualPost;
