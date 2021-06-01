import React from "react";
function LeftSideBar() {
  return (
    <div className="left_nav_bar">
      <ul>
        <li>
          <i class="fas fa-home"></i>
          News Feed
        </li>
        <li>
          <i class="fas fa-user-circle"></i>
          Profile
        </li>
        <li>
          <i class="fas fa-users"></i>
          People
        </li>
        <li>
          <i class="fas fa-cog"></i>
          Seetings
        </li>
        <li>
          <i class="fas fa-sign-out-alt"></i>
          Log-Out
        </li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
