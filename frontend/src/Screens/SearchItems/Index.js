import React from "react";
import SearchItem from "./SearchItem";

function Index({ searchedUsers }) {
  return (
    <div>
      <SearchItem searchedUsers={searchedUsers} />
    </div>
  );
}

export default Index;
