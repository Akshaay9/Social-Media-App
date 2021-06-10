import React, { useState, useEffect } from "react";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import { SocialIcon } from "react-social-icons";
import SettingPanel from "../SettingsPanel/SettingPanel";
import SearchItem from "../SearchItems/Index";
import Notification from "../Notification/Index";
import { useSelector, useDispatch } from "react-redux";

function Nav() {
  const [panel, setPanel] = useState({
    show: false,
    style: "top-right",
  });
  const [showNotification, setShowNotification] = useState({
    show: false,
    style: "top-right",
  });

  const [searchInput, setSearchInput] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [notifcationLength, setNotificationLength] = useState(0);
  const { Allusers, presentUser } = useSelector((state) => state.Users);

 

  useEffect(() => {
    if (searchInput != "") {
      const searchUsers = Allusers.filter((ele) =>
        ele.name
          .toString()
          .toLowerCase()
          .includes(searchInput.toString().toLowerCase())
      );
      setSearchedUsers(searchUsers);
    }
  }, [searchInput, Allusers]);

  useEffect(() => {
    let notificationLength = presentUser?.notification?.filter(
      (ele) => ele.viewed == false
    );
    setNotificationLength(notificationLength?.length);
  }, [Allusers, presentUser]);

  return (
    <>
      <div class="nav">
        <div class="nav_left">
          <div class="nav_logo">
            <SocialIcon
              className="face-logo"
              url="https://facebook.com/jaketrent"
              fgColor="white"
              style={{ height: "2.3rem", width: "2.3rem" }}
            />
          </div>
          <div class="nav_name mobile-hide">
            <h2>
              Gym. <span>Sharkk</span>{" "}
            </h2>
          </div>
        </div>

        <div class="nav_right ">
          <div className="nav_right_search ">
            <SearchIcon />
            <input
              type="text"
              placeholder="search people"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          {/* .viewed */}
          <div
            className="nav_right_notification"
            style={
              showNotification.show
                ? { backgroundColor: "#263951", color: "#2d86ff" }
                : {}
            }
            onClick={() =>
              setShowNotification((ele) => ({
                ...ele,
                show: !ele.show,
              }))
            }
          >
            <i class="fas fa-bell"></i>
            {notifcationLength !== 0 && (
              <div className="badge badge-blue">
                <span>{notifcationLength}</span>
              </div>
            )}
          </div>

          <div className="nav_right_avatar ">
            <Avatar
              alt="Remy Sharp"
              src={presentUser?.profileImage}
            />
            <p className="mobile-hide">{presentUser?.name}</p>
            <div
              style={
                panel.show
                  ? { backgroundColor: "#263951", color: "#2d86ff" }
                  : {}
              }
              className="down"
              onClick={() =>
                setPanel({
                  ...panel,
                  show: !panel.show,
                })
              }
            >
              <i class="fas fa-sort-down"></i>
            </div>
          </div>
        </div>
      </div>

      {/* setting panel */}
      <SettingPanel panel={panel} />

      {/* search input */}
      {searchInput != "" && <SearchItem searchedUsers={searchedUsers} />}

      {/* motificationBAr */}

      {showNotification.show && (
        <Notification
          presentUser={presentUser}
          notifcationLength={notifcationLength}
        />
      )}
    </>
  );
}

export default Nav;
