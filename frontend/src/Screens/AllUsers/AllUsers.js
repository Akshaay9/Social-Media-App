import React from "react";
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
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

function AllUsers() {
  const classes = useStyles();
  return (
    <div>
      <div className="all-users">
        <div className="individual-users">
          <div className="heading">
            <h2>People</h2>
          </div>
          <div className="user-lists">
            <div className="left">
              <Avatar
                alt="Remy Sharp"
                src={postData[0].userID?.profileImage}
                className={classes.large}
              />
                          <h2>Kai</h2>
                          
            </div>

            <div className="right">
              <Button variant="contained" color="primary">
                Follow
              </Button>
            </div>
          </div>
          <div className="user-lists">
            <div className="left">
              <Avatar
                alt="Remy Sharp"
                src={postData[0].userID?.profileImage}
                className={classes.large}
              />
              <h2>Kai</h2>
            </div>

            <div className="right">
              <Button variant="contained" color="primary">
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
