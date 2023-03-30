import React from "react";
import Educationimg from "../../assets/images/education.svg";

export default function Education() {
  return (
    <div className="educations item-center-flex h-80" id="education">
      <div className="w-100">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-5 content-heading">
              <span className="yellow-text">01. </span> My Educations
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12  mb-3 item-center-flex ">
              <div className="image-holder">
                <img src={Educationimg} alt="Educations" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
              <div className="edu-box">
                <div className="body">
                  <p className="sub-heading mb-1">
                    Postgraduate in Web Development
                  </p>
                  <p>at George Brown College.</p>
                  <p className="mb-0">
                    <i class="bi bi-geo-alt-fill yellow-text"></i> Canada
                    <span className="yellow-text"> (Sept 2022 - Aug 2023)</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6  col-md-6 col-sm-12 mb-2">
              <div className="edu-box">
                <div className="body">
                  <p className="sub-heading mb-1">
                    Bachelors of Engineering in Computer Science
                  </p>
                  <p>at Global Acadamey of Technology.</p>
                  <p>
                    <i class="bi bi-geo-alt-fill yellow-text"></i> India{" "}
                    <span className="yellow-text">(2013 -2017)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
