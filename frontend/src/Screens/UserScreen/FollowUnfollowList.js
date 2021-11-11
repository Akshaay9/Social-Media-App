import React from "react";
import "./FollowUnfollowList.css";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
function FollowUnfollowList({ users }) {
  const location = useLocation();
  const navigate = useNavigate();

  const closeModal = (e) => {
    console.log(e.target.classList);
    if (e.target.classList.contains("followUnfollow-container")) {
      navigate(`/user/${location.pathname.split("/")[2]}`);
    }
  };

  return (
    <div>
      <div className="followUnfollow-container" onClick={(e) => closeModal(e)}>
        <div className="followUnfollowCard ">
          {users?.length > 0 ? (
            <div className="followUnfollow-List">
              <h3>{location.pathname.split("/")[3]}</h3>
              {users.map((ele) => (
                <div className="individual-followUnfollow-List ">
                  <Avatar alt="Remy Sharp" src={ele?.user?.profileImage} />
                  <h4>{ele?.user?.name}</h4>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h3> No {location.pathname.split("/")[3]} found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FollowUnfollowList;
