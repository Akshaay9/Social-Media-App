import React from "react";
import "./TextPostCard.css";
function TextPostCard({ description }) {
  return (
    <div className="postData-text-card">
      <p>{description}</p>
    </div>
  );
}

export default TextPostCard;
