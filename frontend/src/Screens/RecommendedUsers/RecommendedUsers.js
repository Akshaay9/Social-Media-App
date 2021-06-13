import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RecommenderUserList from "./RecommenderUserList";

function RecommendedUsers() {
  const { Allusers, loadUsers } = useSelector((state) => state.Users);
  return (
    <div className="recommended-users">
      {Allusers?.length > 0 &&
        Allusers.map((ele) => (
          <RecommenderUserList ele={ele} loadUsers={loadUsers} />
        ))}
    </div>
  );
}

export default RecommendedUsers;
