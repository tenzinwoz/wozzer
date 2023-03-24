import React from "react";

export default function Education() {
  return (
    <div className="projects">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-5 content-heading">
            <span className="yellow-text">01. </span> My Educations
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-6  mb-3">
            <div className="project-box">
              <div className="head mb-2">
                <div>
                  <i class="bi bi-folder-symlink"></i>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://github.com/tenzinwoz/DevConnectot"
                    rel="noreferrer"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                  {/* <i class="bi bi-link-45deg"></i> */}
                </div>
              </div>
              <div className="body">
                <p className="sub-heading">DevConnector</p>
                <p>
                  Fullstack application build upon MERN stack that allows users
                  to browse and connect with other developers.
                </p>
              </div>
              <div className="foot">
                <p className="yellow-text">
                  NodeJs, ExpressJs, MongoDb, ReactJs, Redux, Redux-thunk,
                  GitHub, Github API's
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3 ">
            <div className="project-box">
              <div className="head mb-2">
                <div>
                  <i class="bi bi-folder-symlink"></i>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://github.com/tenzinwoz/stylo"
                    rel="noreferrer"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://stylo-821a2.web.app"
                    rel="noreferrer"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              <div className="body">
                <p className="sub-heading">Stylo</p>
                <p>
                  Designed and developed an Ecommerce wep app with intituitive
                  and modern user interface
                </p>
              </div>
              <div className="foot">
                <p className="yellow-text">ReactJs, Redux, Redux-thunk, Sass</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3 ">
            <div className="project-box">
              <div className="head mb-2">
                <div>
                  <i class="bi bi-folder-symlink"></i>
                </div>
                <div>
                  <a
                    target="_blank"
                    href="https://github.com/tenzinwoz/faith"
                    rel="noreferrer"
                  >
                    <i class="bi bi-github"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://tenzinwoz.github.io/faith"
                    rel="noreferrer"
                  >
                    <i class="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
              <div className="body">
                <p className="sub-heading">Faith</p>
                <p>
                  Faith is a charity-focused, static website aimed at assisting
                  homeless individuals in need of donations, volunteer work, and
                  meals. The website is designed for client-facing purposes and
                  utilizes a mobile-first approach with a single-page
                  application (SPA) design.
                </p>
              </div>
              <div className="foot">
                <p className="yellow-text">
                  Html, Scss, ReactJs, Bootstrap, Github
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6  mb-3 item-center-flex ">
            {/* <div className="image-holder">
              <img src={Projectsimg} alt="Projects" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}