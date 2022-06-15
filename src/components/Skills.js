import React from "react";

const Skills = () => {
  return (
    <div id="skills" class="container">
      <div class="row mt-5">
        <div class="col">
          {/* <!-- title --> */}
          <div class="title">
            <span>Skills</span>
          </div>

          {/* <!-- icons --> */}
          <div class="icons fw-bolder mt-5 d-flex flex-wrap justify-content-around">
            <div>
              {" "}
              <i class="fab fa-html5 text-danger"></i>HTML5
            </div>

            <div>
              <i class="fa-brands fa-js text-warning"></i> Javascript
            </div>

            <div>
              <i class="fa-brands fa-bootstrap text-info"></i> Bootstrap
            </div>
            <div>
              <i class="fa-brands fa-figma text-danger"></i>Figma
            </div>
            <div>
              <i class="fa-brands fa-github text-black"></i>Github
            </div>
            <div>
              <i class="fa-brands fa-css3-alt text-primary"></i>CSS3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
