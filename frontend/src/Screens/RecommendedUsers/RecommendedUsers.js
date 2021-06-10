import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUnfollowUser } from "../../features/Users/UserSlice";
import { Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

function RecommendedUsers() {
  const currentUser = useSelector((state) => state.currentUser.User);
  const { Allusers, presentUser } = useSelector((state) => state.Users);

  const classes = useStyles();
  const dispatch = useDispatch();
  const isFollowingTheUSer = (user) => {
    const isFollowing = user?.followers?.some(
      (ele) => ele?.user == presentUser?._id
    );

    if (isFollowing == true) {
      return "unfollow";
    } else if (isFollowing == false) {
      return "follow";
    }
  };

  return (
    <div className="recommended-users">
      {Allusers?.length > 0 &&
        Allusers.map((ele) => (
          <div className="">
            {ele._id != currentUser._id &&
            !presentUser?.following?.some((user) => user.user == ele._id) ? (
              <div className="recommended-users-list">
                <Link to={`/user/${ele._id}`}>
                  <div
                    className=""
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        ele?.profileImage ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8-ixw2ZnQsPJj5GUxaRhyam0tbduUsbWJw&usqp=CAU"
                      }
                      className={classes.large}
                    />
                    <h4 style={{ paddingLeft: ".8rem" }}>{ele?.name}</h4>
                  </div>
                </Link>

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
            ) : (
              ""
            )}
          </div>
        ))}
    </div>
  );
}

export default RecommendedUsers;
