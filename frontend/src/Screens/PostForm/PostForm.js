import React from "react";
import "./Postform.css";
import Avatar from "@material-ui/core/Avatar";
function PostForm({ showPostForm, setShowPostForm }) {
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
              <h3>Create post</h3>
            </div>
            <div className="postform-mid">
              <Avatar
                alt="Remy Sharp"
                src="https://pbs.twimg.com/profile_images/1119096097945739275/k5hjHB-J_400x400.jpg"
              />
              <p>Akshay</p>
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
                  <li>
                    {" "}
                    <span>😁 </span> Happy
                  </li>
                  <li>
                    <span>😔 </span>Sad
                  </li>
                  <li>
                    <span>😱</span>Excited
                  </li>
                  <li>
                    <span>😎</span>Chilling
                  </li>
                  <li>
                    <span>😍</span>Loved
                  </li>
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
