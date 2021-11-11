import React, { useState } from "react";
import SettingPanel from "../SettingsPanel/SettingPanel";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../features/Auth/AuthSlice";
import { toast } from "react-toastify";
function LeftSideBar({ individualUserStyle }) {
  const [panel, setPanel] = useState({
    show: false,
    style: "bottom-left",
  });

  const { presentUser } = useSelector((state) => state.Users);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  return (
    <>
      <div
        className="left_nav_bar"
        style={
          individualUserStyle
            ? { position: "absolute", top: "100%", left: "5%" }
            : {}
        }
      >
        <ul>
          <Link to="/">
            {" "}
            <li>
              <i class="fas fa-home"></i>
              News Feed
            </li>
          </Link>
          <Link to={`/user/${presentUser?._id}`}>
            <li>
              <i class="fas fa-user-circle"></i>
              Profile
            </li>
          </Link>

          <Link to="/user/all">
            <li>
              <i class="fas fa-users"></i>
              People
            </li>
          </Link>
          <li
            style={
              panel.show
                ? { borderLeft: "2px solid #2d88ff", color: "#2d88ff" }
                : {}
            }
            onClick={() =>
              setPanel({
                ...panel,
                show: !panel.show,
              })
            }
          >
            <i class="fas fa-cog"></i>
            Setings
          </li>

          <Link to="/user/all">
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
          </Link>
        </ul>
      </div>

      <SettingPanel panel={panel} />
    </>
  );
}

export default LeftSideBar;
