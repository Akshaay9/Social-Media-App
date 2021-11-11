import React from "react";
import "./ImagePostCard.css";
function ImagePostCard({ description, image }) {
  return (
    <div className="postData-image-card">
          <p>{description}</p>
          <div className="postData-image-card-image">
          <img src={image} alt="" />
          </div>
    
    </div>
  );
}

export default ImagePostCard;
