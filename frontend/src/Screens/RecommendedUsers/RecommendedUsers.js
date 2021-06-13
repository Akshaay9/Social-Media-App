import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RecommenderUserList from "./RecommenderUserList"


function RecommendedUsers() {
  const { Allusers } = useSelector((state) => state.Users);
  return (
    <div className="recommended-users">
      {Allusers?.length > 0 && Allusers.map((ele) => <RecommenderUserList ele={ ele}/>)}
    </div>
  );
}

export default RecommendedUsers;
