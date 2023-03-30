import React, { Fragment, useState } from "react";
import MobileSidebar from "../mobile-sidebar/MobileSidebar";
import Logo from "../../assets/images/logo.svg";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = () => {
    const bodyEle = document.getElementById("body-id");
    bodyEle.classList.toggle("dark-mode");
  };

  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div class="theme-toggler">
            <input
              type="checkbox"
              class="checkbox"
              id="chk"
              onClick={(e) => handleClick(e)}
            />
            <label class="label" for="chk">
              <i class="bi bi-brightness-high-fill"></i>
              <i class="bi bi-moon-fill"></i>
              <div class="ball"></div>
            </label>
          </div>
          <div className="logo-holder">
            <a href="#intro">
              <img src={Logo} alt="Wozzer" />
            </a>
          </div>
          <i
            className="bi bi-list menu-button"
            type="button"
            onClick={() => setShowMobileMenu(true)}
          ></i>
        </div>
      </div>

      <MobileSidebar
        setShowMobileMenu={setShowMobileMenu}
        showMobileMenu={showMobileMenu}
        handleThemeChange={handleClick}
      />
    </Fragment>
  );
}
