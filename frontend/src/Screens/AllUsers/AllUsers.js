import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
function AllUsers() {
  const Users = useSelector((state) => state.Users.Allusers);
  const currentUser = useSelector((state) => state.currentUser.User);

  const presentUser = Users?.find((ele) => ele._id == currentUser._id);


  return (
    <div>
      <div className="all-users">
        <div className="individual-users">
          <div className="heading">
            <h2>People</h2>
          </div>
          {Users?.length > 0 &&
            Users.map((ele) => (
              <UserProfile ele={ele} presentUser={presentUser} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
