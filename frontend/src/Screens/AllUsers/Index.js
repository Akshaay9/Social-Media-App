import React from "react";
import AllUsers from "./AllUsers";
import "./App.css";
import LeftSideBar from "../LeftSideBar/index";
function Index() {
  return (
    <div>
      All people
      <AllUsers />
      <LeftSideBar />
    </div>
  );
}

export default Index;
