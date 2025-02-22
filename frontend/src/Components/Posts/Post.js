import React from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import TextPostCard from "./TextPostCard";
import LikeAndComment from "./LikeAndComment";
import ImagePostCard from "./ImagePostCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, deletePostlocally } from "../../features/Posts/PostSlice";
import { Link } from "react-router-dom";
import moment from "moment";
import { toast } from "react-toastify";
function Post({ ele }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.User);
  return (
    <div className="postData">
      <div className="postData-top">
        <Link to={{ pathname: `/user/${ele?.user?._id}` }}>
          {" "}
          <Avatar alt="Remy Sharp" src={ele?.user?.profileImage} />{" "}
        </Link>
        <div className="postData-top-details">
          {console.log(ele)}
          <Link to={{ pathname: `/user/${ele?.user?._id}` }}>
            <div className="postData-top-metData" style={{ display: "flex" }}>
              <h3>{ele.user?.name}</h3>
              {ele?.feeling && (
                <p style={{ marginLeft: ".5rem" }}>
                  is {ele?.feeling?.split?.(" ")?.[0]} <span>feeling</span>
                  {ele?.feeling?.split?.(" ")?.[1]}{" "}
                </p>
              )}
            </div>
          </Link>

          <span>
            {moment(ele?.updatedAt)?.format("DD")} /&nbsp;
            {moment(ele?.updatedAt)?.format("M")}
          </span>
          <span>.</span>
          <i class="fas fa-globe-asia"></i>
        </div>
        {currentUser.id == ele.user._id && (
          <>
            {" "}
            <i class="fas fa-ellipsis-h"> </i>
            <ul>
              <li onClick={() => navigate(`/modal/${ele._id}?update=true`)}>
                Update{" "}
              </li>
              <li
                onClick={() => {
                  dispatch(deletePostlocally(ele._id));
                  toast.error("poast has been deleted !", {});
                  const dataToBeSent = {
                    id: ele._id,
                    token: currentUser.token,
                  };
                  dispatch(deletePost(dataToBeSent));
                }}
              >
                Delete
              </li>
            </ul>{" "}
          </>
        )}
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
