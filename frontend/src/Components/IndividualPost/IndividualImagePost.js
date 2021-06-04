import React from "react";
import "./App.css";
import { postData } from "../../Data.js/PostData";
import Avatar from "@material-ui/core/Avatar";
import Comments from "./Comments";
import { useLocation, useParams, useNavigate } from "react-router";

function IndividualImagePost() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const closeModal = (e) => {
    if (e.target.classList.contains("inidividual-post-container")) {
      navigate("/home");
    }
  };

  return (
    <div className="inidividual-post-container" onClick={(e)=>closeModal(e)} >
      <div className="individual-text-post">
        <div className="individual-image-post-left ">
          <img src={postData[0].image} />
        </div>
        <div className="individual-post-right">
          <div className="individual-post-right-top">
            <div className="avatar">
              <Avatar alt="Remy Sharp" src={postData[0].userID?.profileImage} />
              <h3>{postData[0].userID.name}</h3>
            </div>
            <i class="fas fa-ellipsis-h"></i>
            <ul>
              <li>Update </li>
              <li>Delete</li>
            </ul>
          </div>
          {location.pathname.includes("home/image") && (
            <div className="individual-post-right-top">
              <div className="avatar">
                <Avatar
                  alt="Remy Sharp"
                  src={postData[0].userID?.profileImage}
                />
                <h3>
                  <span>{postData[0].description}</span>
                </h3>
              </div>
            </div>
          )}
          <div className="individual-comments">
            {postData[0].comments.length > 0 &&
              postData[0].comments.map((ele) => (
                <>
                  <h4>Comments</h4>
                  <Comments ele={ele} />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualImagePost;
