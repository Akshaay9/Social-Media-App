import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../features/Auth/AuthSlice";
import { toast } from "react-toastify";

function SettingPanel({ panel }) {
  const { presentUser } = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      {panel.show && (
        <div className={`setting-panel ${panel.style}`}>
          <Link to={{ pathname: `/user/${presentUser?._id}` }}>
            <div className="seeting-panel-top">
              <Avatar
                variant="rounded"
                alt="Remy Sharp"
                src={presentUser?.profileImage}
              />
              <div className="seeting-panel-top-user-details">
                <h4>{presentUser?.name}</h4>
                <p>See your profile</p>
              </div>
            </div>
          </Link>
          <ul>
            <li
              onClick={() => {
                dispatch(logOut());
                toast.error(`user has been logged out`);
                navigate("/landing");
              }}
            >
              <i class="fas fa-sign-out-alt"></i>
              Log-Out
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default SettingPanel;
