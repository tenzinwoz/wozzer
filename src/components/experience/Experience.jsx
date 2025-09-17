import React from "react";

export default function Experience() {
  return (
    <div className="experience  item-center-flex h-80" id="experience">
      <div className="w-100">
        <div className="row">
          <div className="col-12">
            <h1 className="mb-5 content-heading">
              <span className="yellow-text">02. </span> My Experiences
            </h1>
          </div>
          <div className="row">
            <div className="d-flex align-items-start mobile-nav-pills">
              <div
                className="nav flex-column nav-pills me-3 experience-tab-nav"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active company-name "
                  id="v-pills-swish-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-swish"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-swish"
                  aria-selected="true"
                >
                  Swish
                </button>
                <button
                  className="nav-link company-name "
                  id="v-pills-rbc-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-rbc"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-rbc"
                  aria-selected="true"
                >
                  RBC
                </button>
                <button
                  className="nav-link company-name "
                  id="v-pills-neosoft-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-neosoft"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-neosoft"
                  aria-selected="false"
                >
                  Neosoft
                </button>
              </div>
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-swish"
                  role="tabpanel"
                  aria-labelledby="v-pills-swish-tab"
                  tabIndex="0"
                >
                  <h2 className="sub-heading">Fullstack developer</h2>
                  <p className="duration">
                    Nov 2023 - Present <span> (Canada)</span>
                  </p>
                  <ul>
                    <li>
                      Worked collaboratively in a team to rewrite the quoting
                      application using Next.js and Nest.js, resulting in
                      significant improvements in application speed and
                      developer efficiency.
                    </li>
                    <li>
                      Implemented Redis caching in the product pricing API to
                      significantly improve response times and reduce database
                      load.
                    </li>
                    <li>
                      Integrated third-party vendor software, including Customer
                      Gauge and Harbr (credit check provider), into enterprise
                      systems by leveraging REST APIs and implementing webhooks
                      to streamline data exchange and automation.
                    </li>
                    <li>
                      Assisted the IT team in reducing costs by migrating
                      applications to a more cost-effective serverless
                      architecture such as Vercel and Cloud Run (GCP)
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-rbc"
                  role="tabpanel"
                  aria-labelledby="v-pills-rbc-tab"
                  tabIndex="0"
                >
                  <h2 className="sub-heading">Fullstack developer(coop)</h2>
                  <p className="duration">
                    May 2023 - Aug 2023 <span> (Canada)</span>
                  </p>
                  <ul>
                    <li>
                      Collaborated with digital accessibility team, tested
                      internal websites/apps using accessibility tools like JAWS
                      and Axe, and provided technical solutions.
                    </li>
                    <li>
                      Used MERN (MongoDB, Express, React, Node) stack to build
                      and deliver an internal testing application providing
                      accessibility scores, and assisting in identifying
                      accessibility issues for more than 100 websites/apps.
                    </li>
                    <li>
                      Used GitHub for source code management and integrated git
                      hub actions for application deployment.
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-neosoft"
                  role="tabpanel"
                  aria-labelledby="v-pills-neosoft-tab"
                  tabIndex="0"
                >
                  <h2 className="sub-heading">React Developer</h2>
                  <p className="duration">
                    June 2021 - Sept 2022 <span> (India)</span>
                  </p>
                  <ul>
                    <li>
                      Built reusable React UI components (50+), dashboards, and
                      profile modules with Redux state management.
                    </li>
                    <li>
                      Collaborated with cross-functional teams to standardize
                      developer tooling, improving delivery speed and
                      consistency.
                    </li>
                    <li>
                      Represented the company in developer interviews and
                      mentorship for new hires.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
