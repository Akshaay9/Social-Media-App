import React from "react";
import "./Background.css";
import Avatar from "@material-ui/core/Avatar";
import { postData } from "../../Data.js/PostData";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(19),
    height: theme.spacing(19),
    display: "block",
    margin: "auto",
    position: "absolute",
    top: "73%",
    left: "45%",
    border: "4px solid #3a3b3c",
  },
}));
const useStyles2 = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    display: "block",
    margin: "auto",
    position: "absolute",
    top: "82%",
    left: "33%",
    border: "4px solid #3a3b3c",
  },
}));
function Background({ individualUser }) {
  const classes = useStyles();
  const classes2 = useStyles2();
  const currentUser = useSelector((state) => state.currentUser.User);

  return (
    <div>
      <div className="background-image-container">
        <div className="background-image">
          <img src="https://images.unsplash.com/photo-1618654661521-b9b59166b17f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ0cyUyMHZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

          <div className="mobile-hide">
            <Avatar
              alt="Remy Sharp"
              src={individualUser?.profileImage}
              className={classes.large}
            />
            <i class="fas fa-camera user-avatar-camera"></i>
          </div>
          <div className="desktop-hide">
            <Avatar
              alt="Remy Sharp"
              src={individualUser?.profileImage}
              className={classes2.large}
            />
            <i class="fas fa-camera user-avatar-camera"></i>
          </div>
        </div>
        <div className="background-user-info">
          <h1>{individualUser?.name}</h1>
          {currentUser?._id != individualUser?._id && (
            <Button variant="contained" color="primary">
              Follow
            </Button>
          )}
          <div className="user-meta-data">
            <h4>4 Post</h4>
            <p>{individualUser?.following?.length} following</p>
            <p>{individualUser?.followers?.length} followers</p>
          </div>
        </div>

        <div className="update-user-bg-image">
          <i class="fas fa-camera user-bg-camera"></i>
          <p>Edit cover photo</p>
        </div>
      </div>
    </div>
  );
}

export default Background;
