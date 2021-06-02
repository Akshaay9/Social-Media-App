import React from "react";
import "./Postform.css";
import Avatar from "@material-ui/core/Avatar";
import { feelingActiviy } from "../../Data.js/FeelingActivity";
function PostForm({ showPostForm, setShowPostForm, feeling, setFeeling }) {
  const closeModal = (e) => {
    if (e.target.classList.contains("postform-container")) {
      setShowPostForm(false);
    }
  };
  return (
    <>
      {showPostForm && (
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
                <i class="fas fa-images"></i>
                <p>upload Photo</p>
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
