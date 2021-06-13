import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-ui/core";
import { followUnfollowUser } from "../../features/Users/UserSlice";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
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
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.User);
  const [loading, setLoading] = useState(false);
  const override = css`
    margin: 0 0;
  `;

  const isFollowingTheUSer = (user) => {
    console.log(user);

    const isFollowing = user?.followers?.some(
      (ele) => ele?.user?._id == presentUser?._id
    );
    if (loading == true) {
      return <PulseLoader color="white" css={override} size={10} />;
    } else if (isFollowing == true) {
      return "unfollow";
    } else if (isFollowing == false) {
      return "follow";
    }
  };

  return (
    <div>
      {ele._id != presentUser?._id && (
        <div className="user-lists">
          <Link to={`/user/${ele._id}`}>
            <div className="left">
              <Avatar
                alt="Remy Sharp"
                src={ele?.profileImage}
                className={classes.large}
              />
              <h2>{ele?.name}</h2>
            </div>
          </Link>

          <div className="right">
            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={() => {
                const dataToBeSent = {
                  id: ele._id,
                  token: currentUser.token,
                  loader: setLoading,
                };
                dispatch(followUnfollowUser(dataToBeSent));
              }}
            >
              {isFollowingTheUSer(ele)}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
