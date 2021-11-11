import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
function AllUsers() {
  const { Allusers, presentUser } = useSelector((state) => state.Users);

  return (
    <div>
      <div className="all-users">
        <div className="individual-users">
          <div className="heading">
            <h2>People</h2>
          </div>
          {Allusers?.length > 0 &&
            Allusers.map((ele) => (
              <UserProfile ele={ele} presentUser={presentUser} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
