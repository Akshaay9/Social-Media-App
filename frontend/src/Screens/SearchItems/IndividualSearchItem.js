import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { followUnfollowUser } from "../../features/Users/UserSlice";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";
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
function IndividualSearchItem({ ele }) {
  const [loading, setLoading] = useState(false);
  const { presentUser } = useSelector((state) => state.Users);
  const currentUser = useSelector((state) => state.currentUser.User);

  const classes = useStyles();
  const dispatch = useDispatch();
  const override = css`
    margin: 0 0;
  `;
  const isFollowingTheUSer = (user) => {
    const isFollowing = user?.followers?.some(
      (ele) => ele?.user?._id == presentUser._id
    );

    if (loading == true) {
      return <PulseLoader color="white" css={override} size={10} />;
    } else if (isFollowing == true) {
      return "unfollow";
    } else if (isFollowing == false) {
      return "follow";
    }
  };

  console.log(ele);
  return (
    <div className="search-userlist-container ">
      {ele._id != currentUser?.id && (
        <div className="user-lists  search-userlist">
          <Link to={{ pathname: `/user/${ele._id}` }}>
            <div className="left">
              <Avatar
                alt="Remy Sharp"
                src={
                  ele?.profileImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8-ixw2ZnQsPJj5GUxaRhyam0tbduUsbWJw&usqp=CAU"
                }
                className={classes.large}
              />
              <h4>{ele?.name}</h4>
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

export default IndividualSearchItem;
