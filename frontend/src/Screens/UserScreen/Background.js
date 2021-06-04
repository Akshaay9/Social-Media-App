import React from "react";
import "./Background.css";
import Avatar from "@material-ui/core/Avatar";
import { postData } from "../../Data.js/PostData";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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
    border:"4px solid #3a3b3c"
  },
}));
function Background() {
  const classes = useStyles();
  return (
    <div>
      <div className="background-image-container">
        <div className="background-image">
          <img src="https://images.unsplash.com/reserve/HgZuGu3gSD6db21T3lxm_San%20Zenone.jpg?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />

          <Avatar
            alt="Remy Sharp"
            src={postData[0].userID?.profileImage}
            className={classes.large}
          />
        </div>
        <div className="background-user-info">
          <h1>Kai</h1>
          <Button variant="contained" color="primary">
            Follow
          </Button>
          <div className="user-meta-data">
            <h4>4 Post</h4>
            <p>12 Following</p>
            <p>1 Followers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
