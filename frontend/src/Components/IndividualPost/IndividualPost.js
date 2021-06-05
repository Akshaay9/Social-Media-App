import React, { useEffect } from "react";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";
import Comments from "./Comments";
import { useLocation, useParams, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  getIndividualPost,
  clearIndividualPost,
} from "../../features/Posts/PostSlice";
function IndividualPost() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { posts, status, individualPost } = useSelector((state) => state.Posts);
  const currentUser = useSelector((state) => state.currentUser.User);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIndividualPost(id));
  }, [status]);

  console.log(posts.length);

  const closeModal = (e) => {
    if (e.target.classList.contains("inidividual-post-container")) {
      navigate("/");
      dispatch(clearIndividualPost());
    }
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
                  <Avatar
                    alt="Remy Sharp"
                    src={individualPost[0].user.profileImage}
                  />
                  <h3>{individualPost[0].user.name}</h3>
                  {individualPost[0].feeling && (
                    <p style={{ marginLeft: ".5rem" }}>
                      is {individualPost[0].feeling.split(" ")[1]} feeling{" "}
                      {individualPost[0].feeling.split(" ")[0]}{" "}
                    </p>
                  )}
                </div>

                <i class="fas fa-ellipsis-h"> </i>
                <ul>
                  <li onClick={() => navigate("/home/modal/1?update=true")}>
                    Update Post
                  </li>
                  <li>Delete Post</li>
                </ul>
              </div>
              {location.pathname.includes("image") && (
                <div className="individual-post-right-top">
                  <div className="avatar">
                    <Avatar
                      alt="Remy Sharp"
                      src={individualPost[0].user?.profileImage}
                    />
                    <h3>
                      <span>{individualPost[0].description}</span>
                    </h3>
                  </div>
                </div>
              )}
              <div className="individual-comments">
                <h4>Comments</h4>
                {individualPost[0].comments.map((ele) => (
                  <>
                    <Comments ele={ele} />
                  </>
                ))}
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
                <Avatar alt="Remy Sharp" src={currentUser.profileImage} />
                <input type="text" placeholder="Write a comment.." />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndividualPost;
