import React, { useState, useRef } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import PostForm from "./PostForm";
import { feelingActiviy } from "../../Data.js/FeelingActivity";
import { useNavigate } from "react-router-dom";
function Post({ individualUserStyle }) {
  const navigate = useNavigate();
  const [feeling, setFeeling] = useState();
  const [image, setImage] = useState();
  const hiddenFileInput = React.useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage({
        image: URL.createObjectURL(event.target.files[0]),
      });
      navigate("/home/modal/1?update=false");
    }
  };

  return (
    <>
      <div
        className="post-bar"
        style={individualUserStyle ? { marginTop: "1rem" } : {}}
      >
        <div className="post-bar-top">
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src="https://pbs.twimg.com/profile_images/1119096097945739275/k5hjHB-J_400x400.jpg"
          />
          <div
            className="post-bar-top-round"
            onClick={() => navigate("/home/modal/1?update=false")}
          >
            <p>Whats on your mind Akshay ?</p>
          </div>
        </div>
        <div className="post-bar-bottom">
          <div className="post-bar-bottom-row-one">
            {image?.image ? (
              <>
                <Avatar alt="Remy Sharp" variant="rounded" src={image?.image} />
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
          <div className="post-bar-bottom-row-two">
            <i class="far fa-smile-wink"></i>
            <p>Feeling/activity</p>
            <ul>
              {feelingActiviy.map((ele) => (
                <li
                  onClick={() => {
                    setFeeling(ele);
                    navigate("/home/modal/1?update=false");
                  }}
                >
                  <span>{ele.emoji}</span>
                  {ele.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <PostForm
        feelingActiviy={feelingActiviy}
        feeling={feeling}
        setFeeling={setFeeling}
        image={image}
        setImage={setImage}
      />
    </>
  );
}

export default Post;
