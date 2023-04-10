import React from "react";
import Eyestar from "../../assets/images/eye_star.svg";

export default function Footer() {
  return (
    <div className="footer container">
      <div>Designed & Developed by Tenzin Woeser</div>
      <div>
        <img src={Eyestar} alt="Wozzer" />
      </div>
      <div>
        Check out my tech blogs
        <a
          href="https://tenzinwoz.hashnode.dev/"
          className="yellow-text"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          HERE
        </a>
      </div>
    </div>
  );
}
