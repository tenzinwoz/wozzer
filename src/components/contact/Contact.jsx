import React from "react";
import Contactimg from "../../assets/images/contact.svg";

export default function Contact() {
  return (
    <div className="contact item-center-flex h-80" id="contact">
      <div className="w-100">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-3 content-heading">
              <span className="yellow-text">05. </span> Get in touch
            </h1>
          </div>
          <div className="col-lg-8 col-md-9 item-center-flex ">
            <div>
              <p>
                <span className="sub-heading">My inbox is always open.</span>{" "}
                <br />
                Whether you have a question or just want to say hi, I’ll try my
                best to get back to you!
              </p>
              <a href="mailto:tenzin.woeser.work@gmail.com" className="mail-to">
                tenzin.woeser.work@gmail.com{" "}
                <span>
                  <i class="bi bi-envelope"></i>
                </span>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-3 item-center-flex ">
            <div className="image-holder">
              <img src={Contactimg} alt="Wozzer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
