import React from "react";
import "./App.css";
import IndividualSearchItem from "./IndividualSearchItem";
function SearchItem({ searchedUsers }) {
  return (
    <div className="search-container">
      {searchedUsers?.length > 0 ? (
        searchedUsers.map((ele) => <IndividualSearchItem ele={ele} />)
      ) : (
        <div className="search-userlist-container ">
          <div className="not-found">
            <h4>No users found</h4>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchItem;
