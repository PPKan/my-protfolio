import React from "react";

export default function Navbar({ personalInfoRef, projectsRef, contactRef }) {
  return (
    <div className="navbar">
      <ul className="list-container">
        <li>
          <button
            onClick={() => {
              personalInfoRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            個人簡介
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              projectsRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            作品集
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              contactRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            聯絡方式
          </button>
        </li>
      </ul>
    </div>
  );
}
