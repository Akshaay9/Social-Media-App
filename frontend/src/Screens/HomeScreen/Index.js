import React from "react";
import LeftSideBar from "../LeftSideBar/index";
import PostBar from "../PostForm/Post";
import UsersPost from "../../Components/Posts/Index";
import IndividualTextPost from "../../Components/IndividualPost/IndividualTextPost";
import IndividualImagePost from "../../Components/IndividualPost/IndividualImagePost";
import { useLocation, useParams } from "react-router";

function Index() {
  const { id } = useParams();
  const location = useLocation();

  // console.log(id)
  console.log(location.pathname.includes("home/text"));

  return (
    <div>
      <LeftSideBar />
      <PostBar />
      <UsersPost />

      {location.pathname.includes("/home/text") ?<IndividualTextPost /> : location.pathname.includes("home/image") ?  <IndividualImagePost /> :"" }

     
    </div>
  );
}

export default Index;
