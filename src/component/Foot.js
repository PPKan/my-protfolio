import React from "react";
import githubIcon from "../images/github.svg";

export default function Foot({ navbarRef }) {
  return (
    <div className="bar foot">
      <div className="credit">
        Powered by &nbsp;
        <a
          href="https://github.com/PPKan/my-protfolio"
          target={"_blank"}
          rel="noreferrer"
        >
          <img src={githubIcon} alt="github icon" />
          PPKan
        </a>
      </div>
      <ul className="list-container">
        <li>
          <button
            className="nav__link"
            onClick={() => {
              navbarRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            回上方
          </button>
        </li>
      </ul>
    </div>
  );
}
