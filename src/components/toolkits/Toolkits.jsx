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
import NextJsimg from "../../assets/images/nextjs.svg";
import NestJsimg from "../../assets/images/nestjs.svg";
import Mysqlimg from "../../assets/images/mysql.svg";
import Typescriptimg from "../../assets/images/typescript.svg";
import Jestimg from "../../assets/images/jest.svg";
import Gcpimg from "../../assets/images/gcp.svg";
import Awsimg from "../../assets/images/aws.svg";
import Golangimg from "../../assets/images/go.svg";

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
                      <img src={Typescriptimg} alt="Typescript" />
                    </div>
                    <p>Typescript</p>
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
                      <img src={NextJsimg} alt="Next.js" />
                    </div>
                    <p>Next.js</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Jestimg} alt="Jest" />
                    </div>
                    <p>Jest</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder familiar">
                      <img src={Nodeimg} alt="Node.Js" />
                    </div>
                    <p>Node.Js</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4">
                  <div className="skill-box">
                    <div className="img-holder familiar">
                      <img src={Expressimg} alt="ExpressJs" />
                    </div>
                    <p>Express.Js</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={NestJsimg} alt="Nest.js" />
                    </div>
                    <p>Nest.js</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-4 ">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Mysqlimg} alt="Mysql" />
                    </div>
                    <p>MySQL</p>
                  </div>
                </div>
              </div>
              <h2 className="sub-heading mb-4">I'm familiar with</h2>
              <div className="row">
                <div className="col-lg-3 col-md-3 col-4">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Gcpimg} alt="GCP" />
                    </div>
                    <p>GCP</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-4">
                  <div className="skill-box">
                    <div className="img-holder">
                      <img src={Awsimg} alt="AWS" />
                    </div>
                    <p>AWS</p>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-4">
                  <div className="skill-box">
                    <div className="img-holder ">
                      <img src={Golangimg} alt="Golang" />
                    </div>
                    <p>Golang</p>
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
