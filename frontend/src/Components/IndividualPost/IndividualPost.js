import React from "react";
import "./App.css";
import { postData } from "../../Data.js/PostData";
import Avatar from "@material-ui/core/Avatar";
import Comments from "./Comments";
import { useLocation, useParams, useNavigate } from "react-router";
import { useSelector } from "react-redux";
function IndividualPost({ postType }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const individualPosts = useSelector((state) => state.Posts.individualPost);

  console.log(id)

  const closeModal = (e) => {
    if (e.target.classList.contains("inidividual-post-container")) {
      navigate("/");
    }
  };
  return (
    <>
      {individualPosts.length > 0 && (
        <div
          className="inidividual-post-container"
          onClick={(e) => closeModal(e)}
        >
          <div className="individual-text-post">
            {postType == "text" ? (
              <div className="individual-image-post-left text-post-left">
                <p>{individualPosts[0].description}</p>
                {console.log("hey")}
              </div>
            ) : postType == "image" ? (
              <div className="individual-image-post-left ">
                <img src={individualPosts[0].image} />
                {console.log("hey")}
              </div>
            ) : (
              ""
            )}

            <div className="individual-post-right">
              <div className="individual-post-right-top">
                <div className="avatar">
                  <Avatar
                    alt="Remy Sharp"
                    src={individualPosts[0].user?.profileImage}
                  />
                  <h3>{individualPosts[0].user.name}</h3>
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
                      src={individualPosts[0].user?.profileImage}
                    />
                    <h3>
                      <span>{individualPosts[0].description}</span>
                    </h3>
                  </div>
                </div>
              )}
              <div className="individual-comments">
                {individualPosts[0].comments.length > 0 &&
                  individualPosts[0].comments.map((ele) => (
                    <>
                      <h4>Comments</h4>
                      <Comments ele={ele} />
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default IndividualPost;
