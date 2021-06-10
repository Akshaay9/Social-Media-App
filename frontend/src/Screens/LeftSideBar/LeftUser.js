import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
function LeftUser() {
  const { presentUser } = useSelector((state) => state.Users);
  return (
    <div>
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
    </div>
  );
}

export default LeftUser;
