import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { followUnfollowUser } from "../../features/Users/UserSlice";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
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
function SearchItem({ searchedUsers }) {
  const Users = useSelector((state) => state.Users.Allusers);
  const currentUser = useSelector((state) => state.currentUser.User);
  const presentUser = Users?.find((ele) => ele._id == currentUser._id);

  const classes = useStyles();
  const dispatch = useDispatch();
  const isFollowingTheUSer = (user) => {
    const isFollowing = user?.followers?.some(
      (ele) => ele?.user == presentUser._id
    );

    if (isFollowing == true) {
      return "unfollow";
    } else if (isFollowing == false) {
      return "follow";
    }
  };
  return (
    <div className="search-container">
      {searchedUsers?.length > 0 &&
        searchedUsers.map((ele) => (
          <div className="search-userlist-container">
            {ele._id != currentUser._id && (
              <div className="user-lists  search-userlist">
                <div className="left">
                  <Avatar
                    alt="Remy Sharp"
                    src={ele?.profileImage}
                    className={classes.large}
                  />
                  <h4>{ele?.name}</h4>
                </div>

                <div className="right">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      const dataToBeSent = {
                        id: ele._id,
                        token: currentUser.token,
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
        ))}
    </div>
  );
}

export default SearchItem;