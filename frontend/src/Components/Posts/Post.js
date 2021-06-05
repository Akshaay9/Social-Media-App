import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import TextPostCard from "./TextPostCard";
import LikeAndComment from "./LikeAndComment";
import ImagePostCard from "./ImagePostCard";
import { useNavigate } from "react-router-dom";
function Post({ ele }) {
  const navigate = useNavigate();
  console.log(ele.feeling);
  return (
    <div className="postData">
      {/*  */}
      <div className="postData-top">
        <Avatar alt="Remy Sharp" src={ele?.user?.profileImage} />
        <div className="postData-top-details">
          <div className="postData-top-metData" style={{ display: "flex" }}>
            <h3>{ele.user.name}</h3>
            {ele.feeling && (
              <p style={{marginLeft:".5rem"}}>
                is {ele.feeling.split(" ")[1]} feeling{" "}
                {ele.feeling.split(" ")[0]}{" "}
              </p>
            )}
          </div>

          <span>24 m</span>
          <span>.</span>
          <i class="fas fa-globe-asia"></i>
        </div>
        <i class="fas fa-ellipsis-h"> </i>
        <ul>
          <li onClick={() => navigate("/modal/1?update=true")}>Update </li>
          <li>Delete</li>
        </ul>
      </div>
      {/* mid */}
      {/*  */}

      {ele?.PostType == "text" ? (
        <TextPostCard description={ele.description} />
      ) : ele?.PostType == "image" ? (
        <ImagePostCard description={ele.description} image={ele.image} />
      ) : (
        ""
      )}

      <LikeAndComment ele={ele} />
    </div>
  );
}

export default Post;
