import React from "react";

export default function ProjectItemText(props) {
  const {
    name,
    content,
    icons
  } = props
  return (
    <div className="project-item-text">
      <div className="title-container">
        <h2 className="title">{name}</h2>
        {icons.map(icon => {
          return <img key={icon} className="icon" src={icon} alt="react icon" />
        })}
      </div>
      <div className="text">
        {content}
      </div>
    </div>
  );
}
