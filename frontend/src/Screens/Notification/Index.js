import React from "react";
import Notification from "./Notification";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { markNotificationRead } from "../../features/Users/UserSlice";
function Index({ presentUser, notifcationLength }) {

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.User);

  // markNotificationRead
  return (
    <div>
      <div className="notification-container">
        {notifcationLength != 0 && (
          <h4
            onClick={() => {
              const dataToBeSent = {
                token: currentUser.token,
              };
              dispatch(markNotificationRead(dataToBeSent));
            }}
          >
            Mark all as read
          </h4>
        )}
        {presentUser?.notification?.length > 0 &&
          presentUser?.notification.map((ele) => <Notification ele={ele} />)}
      </div>
    </div>
  );
}

export default Index;
