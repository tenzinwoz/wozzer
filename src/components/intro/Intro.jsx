import React from "react";
import Introimg from "../../assets/images/intro.svg";
export default function Intro() {
  return (
    <div className="intro ">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-3">
            <span className="yellow-text">I'm </span> Tenzin Woeser
          </h1>
        </div>
        <div className="col-lg-8">
          <div className="item-center-flex ">
            <p>
              I am a Toronto-based front-end developer with a passion for
              technology and a love for dogs. I specialize in creating visually
              stunning, user-friendly web experiences using the latest front-end
              technologies.
              <br />
              <br /> When I'm not coding, I enjoy spending time with my furry
              companions and exploring the beautiful city of Toronto. My love
              for technology and dogs both drive me to constantly learn and
              grow, both personally and professionally.
            </p>
          </div>
        </div>
        <div className="col-lg-4 item-center-flex ">
          <div className="image-holder">
            <img src={Introimg} alt="Wozzer" />
          </div>
        </div>
      </div>
    </div>
  );
}
