import React from "react";

import Resume from "../../assets/files/tenzin_resume.pdf";

export default function MobileSidebar({
  setShowMobileMenu,
  showMobileMenu,
  handleThemeChange,
}) {
  return (
    <div className={`mobile-menu ${showMobileMenu ? "active" : ""}`}>
      <div className="closing-div">
        <i
          className="bi bi-x-octagon close-button"
          type="button"
          onClick={() => setShowMobileMenu(false)}
        ></i>
        <div class="theme-toggler">
          <input
            type="checkbox"
            class="checkbox"
            id="chkbox"
            onClick={(e) => handleThemeChange(e)}
          />
          <label class="label" for="chkbox">
            <i class="bi bi-brightness-high-fill"></i>
            <i class="bi bi-moon-fill"></i>
            <div class="ball"></div>
          </label>
        </div>
      </div>

      <div className="menu-list">
        <ul>
          <li className="menu-item">
            <a href="#education" onClick={() => setShowMobileMenu(false)}>
              <span>01. </span>Education
            </a>
          </li>
          <li className="menu-item">
            <a href="#experience" onClick={() => setShowMobileMenu(false)}>
              <span>02. </span>Experience
            </a>
          </li>
          <li className="menu-item">
            <a href="#projects" onClick={() => setShowMobileMenu(false)}>
              <span>03. </span>Projects
            </a>
          </li>
          <li className="menu-item">
            <a href="#toolkits" onClick={() => setShowMobileMenu(false)}>
              <span>04. </span>Toolkits
            </a>
          </li>
          <li className="menu-item">
            <a href="#contact" onClick={() => setShowMobileMenu(false)}>
              <span>05. </span>Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="social-links d-flex">
        <a
          href="https://www.linkedin.com/in/wozzer/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/tenzinwoz" target="_blank" rel="noreferrer">
          <i class="bi bi-github"></i>
        </a>
        <a href={Resume} download>
          <i class="bi bi-file-earmark-person-fill"></i>
        </a>
      </div>
    </div>
  );
}
