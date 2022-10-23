import React from "react";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
  console.log(ele);
  const classes = useStyles();
  const currentUser = useSelector((state) => state.currentUser.User);
  return (
    <div>
      <div
        className="individual-notification " id="style-7"
        style={ele?.viewed == false ? { backgroundColor: "#24252638" } : {}}
      >
        <Link to={`/user/${ele.user?._id}`}>
          <Avatar
            alt="Remy Sharp"
            src={ele?.user?.profileImage}
            className={classes.large}
          />
        </Link>
        <Link to={`/user/${ele.user?._id}`}>
          <h3>{ele?.user?.name}</h3>
        </Link>

        {ele?.text?.split?.(" ").includes("post") ? (
          <p>{ele?.text}</p>
        ) : (
          <p>{ele?.text}</p>
        )}
      </div>
    </div>
  );
}

export default Notification;
