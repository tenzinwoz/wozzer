import React from "react";

export default function Experience() {
  return (
    <div className="experience ">
      <div className="row">
        <div className="col-12">
          <h1 className="mb-5 content-heading">
            <span className="yellow-text">02. </span> My Experiences
          </h1>
        </div>
        <div className="row">
          <div class="d-flex align-items-start">
            <div
              class="nav flex-column nav-pills me-3 experience-tab-nav"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="nav-link active company-name "
                id="v-pills-neosoft-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-neosoft"
                type="button"
                role="tab"
                aria-controls="v-pills-neosoft"
                aria-selected="true"
              >
                Neosoft
              </button>
              <button
                class="nav-link company-name"
                id="v-pills-resoluteai-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-resoluteai"
                type="button"
                role="tab"
                aria-controls="v-pills-resoluteai"
                aria-selected="false"
              >
                ResoluteAI
              </button>

              <button
                class="nav-link company-name"
                id="v-pills-blufig-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-blufig"
                type="button"
                role="tab"
                aria-controls="v-pills-blufig"
                aria-selected="false"
              >
                Blufig
              </button>
            </div>
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-neosoft"
                role="tabpanel"
                aria-labelledby="v-pills-neosoft-tab"
                tabindex="0"
              >
                <h2 className="sub-heading">React Developer</h2>
                <p className="duration">
                  June 2021 - Sept 2022 <span> (India)</span>
                </p>
                <ul>
                  <li>
                    Developed UI components that adhered to the app theme,
                    deploying essential features like user profile and
                    dashboard, allowing creation, update, and deletion of
                    profiles. The dashboard had eight pages with 10
                    sub-components and eight graph types. Employed React hooks
                    for form handling, conditional rendering, and converted
                    class components for cleaner code.
                  </li>
                  <li>
                    Based on my communication and leadership abilities, I was
                    selected among my team of six to represent NeoSoft in
                    interviewing 16 students from eight colleges for a junior
                    JavaScript developer position
                  </li>
                  <li>
                    Global state created with Redux to handle app states such as
                    profile and dashboard features. Three reducer files with 20+
                    states, three action files with 40+ methods, including error
                    handling
                  </li>
                </ul>
              </div>
              <div
                class="tab-pane fade"
                id="v-pills-resoluteai"
                role="tabpanel"
                aria-labelledby="v-pills-resoluteai-tab"
                tabindex="0"
              >
                <h2 className="sub-heading">React Developer (Intern)</h2>
                <p className="duration">
                  Nov 2020 - April 2021 <span> (India)</span>
                </p>
                <ul>
                  <li>
                    From scratch, I designed and implemented a Firebase database
                    structure for an AI software, including three models with
                    over 10 sub-collections each. Additionally, I created two
                    RDBMS models for real-time data syncing, and incorporated
                    Firebase's authentication service. I determined the database
                    structure based on business requirements.
                  </li>
                  <li>
                    Used ContextAPI to create four state provider wrappers for
                    different features. Each wrapper had over 10 methods. Used
                    ContextAPI with React useReducer to power the small web app
                    to the maximum
                  </li>
                </ul>
              </div>

              <div
                class="tab-pane fade"
                id="v-pills-blufig"
                role="tabpanel"
                aria-labelledby="v-pills-blufig-tab"
                tabindex="0"
              >
                <h2 className="sub-heading">Wordpress Developer </h2>
                <p className="duration">
                  July 2018 - Feb 2020 <span> (India)</span>
                </p>
                <ul>
                  <li>
                    Developed a custom WordPress theme that improved website
                    speed by 30%, using HTML and Sass and removing all page
                    builders. Additionally, I implemented necessary SEO
                    requirements prior to deploying the website powered by
                    custom theme.
                  </li>
                  <li>
                    Developed four SEO-friendly websites for different companies
                    across various sectors, using WordPress with Elementor.
                    Adhering to all SEO guidelines, I ensured the websites
                    featured proper content hierarchy, alt tags, sitemaps, and
                    accurately replicated their respective designs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
