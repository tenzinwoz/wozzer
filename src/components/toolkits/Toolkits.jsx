import React, { Component } from "react";
import Toolkitimg from "../../assets/images/toolkits.svg";
import Htmlimg from "../../assets/images/html.svg";
import Cssimg from "../../assets/images/css.svg";
import Scssimg from "../../assets/images/scss.svg";
import Bootstrapimg from "../../assets/images/bootstrap.svg";
import Reactimg from "../../assets/images/react.svg";
import Muiimg from "../../assets/images/mui.svg";
import Nodeimg from "../../assets/images/node.svg";
import Expressimg from "../../assets/images/express.svg";
import Mongodbimg from "../../assets/images/mongodb.svg";

export default class Toolkits extends Component {
  render() {
    return (
      <div className="toolkits item-center-flex h-80" id="toolkits">
        <div className="w-100">
          <div className="row">
            <div className="col-12">
              <h1 className="mb-5 content-heading">
                <span className="yellow-text">04. </span> My Toolkits
              </h1>
            </div>
            <div className="col-lg-4 col-md-3 col-sm-12 item-center-flex ">
              <div className="image-holder">
                <img src={Toolkitimg} alt="Wozzer" />
              </div>
            </div>
            <div className="col-lg-8 col-md-9 col-sm-12">
              <h2 className="sub-heading mb-4">I'm good at</h2>
              <div className="row mb-4">
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Htmlimg} alt="HTML" />
                    </div>
                    <p>HTML</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Cssimg} alt="Css" />
                    </div>
                    <p>Css</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Scssimg} alt="Scss" />
                    </div>
                    <p>Scss</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Reactimg} alt="React" />
                    </div>
                    <p>React</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Muiimg} alt="MUI" />
                    </div>
                    <p>Material UI</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Bootstrapimg} alt="Bootstrap" />
                    </div>
                    <p>Bootstrap</p>
                  </div>
                </div>
              </div>
              <h2 className="sub-heading mb-4">I'm familiar with</h2>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-4">
                  <div className="skill-box">
                    <div className="img-holder familiar">
                      <img src={Nodeimg} alt="NodeJs" />
                    </div>
                    <p>NodeJs</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4">
                  <div className="skill-box">
                    <div className="img-holder familiar">
                      <img src={Expressimg} alt="ExpressJs" />
                    </div>
                    <p>Express</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4">
                  <div className="skill-box">
                    <div className="img-holder familiar">
                      <img src={Mongodbimg} alt="MongoDb" />
                    </div>
                    <p>MongoDb</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
