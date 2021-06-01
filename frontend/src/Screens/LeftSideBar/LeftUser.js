import React from "react";
import Avatar from "@material-ui/core/Avatar";
function LeftUser() {
  return (
    <div>
      <div className="left-bar-user">
        <Avatar
          variant="rounded"
          alt="Remy Sharp"
          src="https://pbs.twimg.com/profile_images/1119096097945739275/k5hjHB-J_400x400.jpg"
        />
        <div className="left-bar-user-details">
          <h4>Akshay Nair</h4>
          <p>@akshay</p>
        </div>
      </div>
    </div>
  );
}

export default LeftUser;
