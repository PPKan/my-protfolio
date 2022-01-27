import React from "react";

export default function Contact({contactRef}) {
  return (
    <div className="info contact" ref={contactRef}>
      <div className="info-container">
        <h1 className="head-section">聯絡方式</h1>
        <div className="info-content">
          <div className="name title">求職中，如有興趣，歡迎直接與我聯繫！</div>
          <div className="introduction large-font">
            <ul className="contact-resource">
              <li>E-mail</li>
              <li>Mobile</li>
              <li>GitHub</li>
              <li>104</li>
            </ul>
            <ul className="contact-info">
              <a href="mailto: petervsjim@gmail.com"><li>petervsjim@gmail.com</li></a>
              <li>+886-985-732-806</li>
              <a href="https://github.com/PPKan" target="_blank" rel="noreferrer"><li>PPKan</li></a>
              <a href="https://pda.104.com.tw/profile/share/1YrBfFiPYZWr1GpnAom3oVOQuIcBDBTH" target="_blank" rel="noreferrer"><li>點此進入</li></a>
            </ul>
            
          </div>
        </div>
      </div>
    </div>
  );
}
