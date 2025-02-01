import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function LeftUser() {
  const { presentUser } = useSelector((state) => state.Users);
  return (
    <div>
      <Link to={{ pathname: `/user/${presentUser?._id}` }}>
        <div className="left-bar-user">
          <Avatar
            variant="rounded"
            alt="Remy Sharp"
            src={presentUser?.profileImage}
          />
          <div className="left-bar-user-details">
            <h4>{presentUser?.name}</h4>
            <p>@{presentUser?.name}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LeftUser;
