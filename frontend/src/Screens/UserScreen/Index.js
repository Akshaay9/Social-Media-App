import React from "react";
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import PostBar from "../PostForm/Post";
import Background from "./Background";
import UsersPost from "../../Components/Posts/Index";
import { useLocation, useParams } from "react-router";
import IndividualTextPost from "../../Components/IndividualPost/IndividualTextPost";
import IndividualImagePost from "../../Components/IndividualPost/IndividualImagePost";
function Index() {
  const { id } = useParams();
  const location = useLocation();

  const individualUserStyle="individualUserStyle"
  return (
    <div>
      <Background />
      <LeftSideBar individualUserStyle={individualUserStyle} />
      <PostBar individualUserStyle={individualUserStyle} />
      <UsersPost />
      {/* modal for individual post */}
      {location.pathname.includes("/home/text") ? (
        <IndividualTextPost />
      ) : location.pathname.includes("home/image") ? (
        <IndividualImagePost />
      ) : (
        ""
      )}
    </div>
  );
}

export default Index;
