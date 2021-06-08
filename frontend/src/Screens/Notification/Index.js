import React from "react";
import Notification from "./Notification";
import "./App.css";
function Index({ presentUser, notifcationLength }) {
  console.log(presentUser?.notification);
  return (
    <div>
      <div className="notification-container">
        {notifcationLength != 0 && <h4>Mark all as read</h4>}
        {presentUser?.notification?.length > 0 &&
          presentUser?.notification.map((ele) => <Notification ele={ele} />)}
      </div>
    </div>
  );
}

export default Index;
