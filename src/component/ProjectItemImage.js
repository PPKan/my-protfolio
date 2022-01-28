import React from "react";
import clickIcon from "../images/click-with-color.svg"

export default function ProjectItemImage({image, link}) {
  return (
    <div className="project-item-image">
      <img loading="lazy" className="image" src={image} alt="" />
      <div className="demo-and-click">
      <a href={link} target="_blank" rel="noreferrer">
        <button className="demo-button">DEMO</button>
        <input className="click-button" type="image" src={clickIcon} alt="" />
        </a>
      </div>
    </div>
  );
}
