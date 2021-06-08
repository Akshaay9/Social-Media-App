import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
function Notification({ ele }) {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.currentUser.User);
  return (
    <div>
      <div className="individual-notification ">
        <Avatar
          alt="Remy Sharp"
          src={ele?.user?.profileImage}
          className={classes.large}
        />
        <h3>{ele?.user?.name}</h3>

        {ele?.text?.split(" ").includes("post") ? (
          <p>{ele.text}</p>
        ) : (
          <p>{ele?.text}</p>
        )}
      </div>
    </div>
  );
}

export default Notification;
