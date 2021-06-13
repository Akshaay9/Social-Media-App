import React from "react";
import "./FollowUnfollowList.css";
import { useLocation, useParams } from "react-router";
function FollowUnfollowList({ individualUser }) {
  const location = useLocation();

  console.log(location.pathname);

  let followUnfollow = location.pathname.split("/")[3];

  return (
    <div>
      <div className="followUnfollow-container">
        <div className="followUnfollowCard b">
          {individualUser?.followUnfollow?.length > 0 ? (
            <div className="followUnfollow-List">
              <h3>{followUnfollow}</h3>
              

            </div>
          ) : (
            <div>
              <h2> No {followUnfollow} found</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FollowUnfollowList;
