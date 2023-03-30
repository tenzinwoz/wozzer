import React from "react";
import Eyestar from "../../assets/images/eye_star.svg";

export default function Footer() {
  return (
    <div className="footer container">
      <div>
        <div>
          <img src={Eyestar} alt="Wozzer" />
        </div>
        Designed & Developed by Tenzin Woeser
      </div>
    </div>
  );
}
