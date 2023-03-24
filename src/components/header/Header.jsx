import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div class="theme-toggler">
        <input type="checkbox" class="checkbox" id="chk" />
        <label class="label" for="chk">
          <i class="bi bi-brightness-high-fill"></i>
          <i class="bi bi-moon-fill"></i>

          <div class="ball"></div>
        </label>
      </div>
    </div>
  );
}
