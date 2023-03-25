import React from "react";
import Logo from "../../assets/images/logo.svg";
import Resume from "../../assets/files/tenzin_resume.pdf";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-holder">
        <a href="#intro">
          <img src={Logo} alt="Wozzer" />
        </a>
      </div>
      <div className="menu-list">
        <ul>
          <li className="menu-item">
            <a href="#education">
              <span>01. </span>Education
            </a>
          </li>
          <li className="menu-item">
            <a href="#experience">
              <span>02. </span>Experience
            </a>
          </li>
          <li className="menu-item">
            <a href="#projects">
              <span>03. </span>Projects
            </a>
          </li>
          <li className="menu-item">
            <a href="#toolkits">
              <span>04. </span>Toolkits
            </a>
          </li>
          <li className="menu-item">
            <a href="#contact">
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
