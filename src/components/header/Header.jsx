import React from "react";

export default function Header() {
  const handleClick = () => {
    const bodyEle = document.getElementById("body-id");
    bodyEle.classList.toggle("dark-mode");
  };
  return (
    <div className="header">
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
    </div>
  );
}
