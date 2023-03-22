import React from "react";
import Logo from "../../assets/images/logo.svg";
import Resume from "../../assets/files/tenzin_resume.pdf";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-holder">
        <img src={Logo} alt="Wozzer" />
      </div>
      <div className="menu-list">
        <ul>
          <li className="menu-item">
            <a href="">
              <span>01. </span>Education
            </a>
          </li>
          <li className="menu-item">
            <a href="">
              <span>02. </span>Experience
            </a>
          </li>
          <li className="menu-item">
            <a href="">
              <span>03. </span>Projects
            </a>
          </li>
          <li className="menu-item">
            <a href="">
              <span>04. </span>Toolkits
            </a>
          </li>
          <li className="menu-item">
            <a href="">
              <span>05. </span>Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/wozzer/" target="_blank">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/tenzinwoz" target="_blank">
          <i class="bi bi-github"></i>
        </a>
        <a href={Resume} download>
          <i class="bi bi-file-earmark-person-fill"></i>
        </a>
      </div>
    </div>
  );
}
