import React, { useState, useRef, useEffect } from "react";
import "./Postform.css";
import Avatar from "@material-ui/core/Avatar";
import { feelingActiviy } from "../../Data.js/FeelingActivity";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { uploadImage } from "../../Utils/UploadImage";
import { uploadPoast, upDatePoast } from "../../features/Posts/PostSlice";
import { useDispatch, useSelector } from "react-redux";
function PostForm({ feeling, setFeeling, image, setImage }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [postDescription, setPostDescription] = useState("");
  const currentUser = useSelector((state) => state.currentUser.User);
  const { posts, status } = useSelector((state) => state.Posts);

 

  const cleanUp = () => {
    setFeeling();
    setPostDescription("");
    setImage();
    navigate(location?.state?.from ? location?.state?.from : "/");
  };



  // close modal
  const closeModal = (e) => {
    if (e.target.classList.contains("postform-container")) {
      cleanUp();
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
        image: event.target.files[0],
      });
    }
  };

  // submit the post
  const submiHandler = async () => {
    let imageURL = undefined;
    let dataToBeUploaded = {};
    if (feeling) {
      dataToBeUploaded.feeling = `${feeling?.emoji} ${feeling?.text}`;
    }
    if (postDescription) {
      dataToBeUploaded.description = postDescription;
    }
    if (image?.image?.name) {
      imageURL = await uploadImage(image.image);
      dataToBeUploaded = {
        ...dataToBeUploaded,
        image: imageURL,
        PostType: "image",
      };
    } else if (image?.image) {
      dataToBeUploaded = {
        ...dataToBeUploaded,
        image: image.image,
        PostType: "image",
      };
    } else {
      dataToBeUploaded = {
        ...dataToBeUploaded,
        PostType: "text",
      };
    }
    const dataPayload = {
      data: dataToBeUploaded,
      token: currentUser.token,
      id,
    };

    if (location?.search?.split("=")[1] == "true") {
      dispatch(upDatePoast(dataPayload));
    } else {
      dispatch(uploadPoast(dataPayload));
    }

    cleanUp();
  };

  useEffect(() => {
    if (location?.search?.split("=")[1] == "true") {
      let updatablePost = posts.filter((ele) => ele._id == id);
      if (updatablePost[0]?.image) {
        setImage({
          image: updatablePost[0]?.image,
        });
      }
      if (updatablePost[0]?.description) {
        setPostDescription(updatablePost[0]?.description);
      }
      if (updatablePost[0]?.feeling) {
        setFeeling({
          text: updatablePost[0]?.feeling?.split(" ")[1],
          emoji: updatablePost[0]?.feeling?.split(" ")[0],
        });
      }
    }
  }, [location, status]);

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
                value={postDescription}
                onChange={(e) => setPostDescription(e.target.value)}
              />
            </div>
            <div className="postform-bottom">
              <div className="postform-bottom-row-one">
                {image?.image ? (
                  <>
                    <Avatar
                      alt="Remy Sharp"
                      variant="rounded"
                      src={
                        image?.image?.name
                          ? URL.createObjectURL(image?.image)
                          : image.image
                      }
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
            <button
              disabled={image == undefined && postDescription== ""}  
              onClick={() => submiHandler()}
            >
              Post
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PostForm;
