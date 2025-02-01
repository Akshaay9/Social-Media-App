import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
function BottomNav() {
  const location = useLocation();
  const currentUser = useSelector((state) => state.currentUser.User);
  return (
    <>
      {!location.pathname.includes("landing") && (
        <div className="bottom-nav ">
          <div className="nav-container">
            <Link to={{ pathname: "/" }}>
              <i class="fas fa-home"></i>
            </Link>

            <Link to={{ pathname: `/user/${currentUser._id}` }}>
              <i class="fas fa-user-circle"></i>
            </Link>

            <Link to={{ pathname: "/user/all" }}>
              <i class="fas fa-users"></i>
            </Link>
            <i class="fas fa-sign-out-alt"></i>
          </div>
        </div>
      )}
    </>
  );
}

export default BottomNav;
