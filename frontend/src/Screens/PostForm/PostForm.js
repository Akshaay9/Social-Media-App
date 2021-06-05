import React, { useState, useRef } from "react";
import "./Postform.css";
import Avatar from "@material-ui/core/Avatar";
import { feelingActiviy } from "../../Data.js/FeelingActivity";
import { useLocation, useNavigate, useParams } from "react-router-dom";
function PostForm({
  showPostForm,
  setShowPostForm,
  feeling,
  setFeeling,
  image,
  setImage,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  // close modal

  const closeModal = (e) => {
    if (e.target.classList.contains("postform-container")) {
      navigate("/home");
    }
  };
  // useref for image
  const hiddenFileInput = React.useRef(null);
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  // upload image
  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };
  return (
    <>
      {location.pathname.includes("modal") && (
        <div className="postform-container" onClick={(e) => closeModal(e)}>
          <div className="postform">
            <div className="postform-top">
              <h2>Create post</h2>
            </div>
            <div className="postform-mid">
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/1119096097945739275/k5hjHB-J_400x400.jpg"
              />
              <h3>Akshay</h3>
              {feeling && (
                <div className="postform-feeling">
                  <span>
                    is {feeling.emoji} feeling {feeling.text}
                  </span>
                  <i
                    class="far fa-times-circle"
                    onClick={() => setFeeling()}
                  ></i>
                </div>
              )}
            </div>
            <div className="postform-mid">
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                placeholder="Whats on your mind,  Akshay ? "
              />
            </div>
            <div className="postform-bottom">
              <div className="postform-bottom-row-one">
                {image?.image ? (
                  <>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={image?.image}
                    />
                    <i class="far fa-times-circle" onClick={() => setImage()} />
                  </>
                ) : (
                  <div
                    onClick={() => {
                      handleClick();
                    }}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <i class="fas fa-images" />
                    <p>upload Photo</p>
                    <input
                      type="file"
                      accept="image/png, image/jpeg"
                      ref={hiddenFileInput}
                      onChange={handleChange}
                      style={{ display: "none" }}
                    />
                  </div>
                )}
              </div>
              <div className="postform-bottom-row-two">
                <i class="far fa-smile-wink"></i>
                <p>Feeling/activity</p>
                <ul>
                  {feelingActiviy.map((ele) => (
                    <li onClick={() => setFeeling(ele)}>
                      <span>{ele.emoji}</span>
                      {ele.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button>Post</button>
          </div>
        </div>
      )}
    </>
  );
}

export default PostForm;
