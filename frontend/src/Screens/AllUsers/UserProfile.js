import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
function UserProfile({ ele, presentUser }) {
  const classes = useStyles();

  const isFollowingTheUSer = (user) => {
    const isFollowing = user?.followers?.find(
      (ele) => ele?.user == presentUser._id
    );
    console.log(isFollowing);
    if (isFollowing == true) {
      return (
        <Button variant="contained" color="primary">
          unfollow
        </Button>
      );
    } else if (isFollowing == false || isFollowing == undefined) {
      return (
        <Button variant="contained" color="primary">
          Follow
        </Button>
      );
    }
  };

  return (
    <div>
      <div className="user-lists">
        <div className="left">
          <Avatar
            alt="Remy Sharp"
            src={ele?.profileImage}
            className={classes.large}
          />
          <h2>{ele?.name}</h2>
        </div>

        <div className="right">{isFollowingTheUSer(ele)}</div>
      </div>
    </div>
  );
}

export default UserProfile;
