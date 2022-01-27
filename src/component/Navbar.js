import React from "react";

export default function Navbar({
  navbarRef,
  personalInfoRef,
  projectsRef,
  contactRef,
}) {
  return (
    <div className="bar" ref={navbarRef}>
      <ul className="list-container">
        <li>
          <button
            className="nav__link"
            onClick={() => {
              personalInfoRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            個人簡介
          </button>
        </li>
        <li>
          <button
            className="nav__link"
            onClick={() => {
              projectsRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            作品集
          </button>
        </li>
        <li>
          <button
            className="nav__link"
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
