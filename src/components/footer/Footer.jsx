import React from "react";
import Eyestar from "../../assets/images/eye_star.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <div>
          <img src={Eyestar} alt="Wozzer" />
        </div>
        Design & Developed by Tenzin Woeser
      </div>
    </div>
  );
}
