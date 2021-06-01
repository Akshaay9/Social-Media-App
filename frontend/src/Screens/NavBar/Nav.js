import React, { useState } from "react";
import "./App.css";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import { SocialIcon } from "react-social-icons";
import SettingPanel from "../SettingsPanel/SettingPanel";
function Nav() {
  const [panel, setPanel] = useState({
    show: false,
    style: "top-right",
  });
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
          <div class="nav_name">
            <h2>
              Gym. <span>Sharkk</span>{" "}
            </h2>
          </div>
        </div>

        <div class="nav_right">
          <div className="nav_right_search">
            <SearchIcon />
            <input type="text" placeholder="search people" />
          </div>
          <div className="nav_right_avatar">
            <Avatar
              alt="Remy Sharp"
              src="https://pbs.twimg.com/profile_images/1119096097945739275/k5hjHB-J_400x400.jpg"
            />
            <p>Akshay</p>
            <div
              style={
                panel.show ? { backgroundColor: "#263951", color: "#2d86ff" } : {}
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

      <SettingPanel panel={panel} />
    </>
  );
}

export default Nav;
