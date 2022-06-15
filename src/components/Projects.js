import React from "react";
import cal from "../assets/calculator.jpg";

const Projects = () => {
  return (
    <section id="projects" class="projects py-5">
      <div class="title">
        <span>Projects</span>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md ">
            <img src={cal} width="100%" alt="" />
          </div>
          <div class="col-md c-p bg-warning pt-5 text-light">
            <div class="p-2">
              <h2 class="fw-bolder">My portfolio Website</h2>
              <div>
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used HTML,CSS</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quod iusto cumque quos tempore, aspernatur est officia, quis,
                vitae repellat quia placeat accusantium obcaecati! Tempore neque
                maiores quam commodi delectus?
              </p>
            </div>
          </div>
        </div>

        <div class="row mt-4 mt-md-0">
          <div class="col-md order-md-2 ">
            <img src={cal} width="100%" alt="" />
          </div>
          <div class="col-md c-p bg-primary pt-5 text-light">
            <div class="p-2">
              <h2 class="fw-bolder">My portfolio Website</h2>
              <div>
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used HTML,CSS</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quod iusto cumque quos tempore, aspernatur est officia, quis,
                vitae repellat quia placeat accusantium obcaecati! Tempore neque
                maiores quam commodi delectus?
              </p>
            </div>
          </div>
        </div>
        <div class="row  mt-4 mt-md-0">
          <div class="col-md ">
            <img src={cal} width="100%" alt="" />
          </div>
          <div class="col-md c-p bg-info pt-5 text-light">
            <div class="p-2">
              <h2 class="fw-bolder">My portfolio Website</h2>
              <div>
                <a href="">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </div>
              <p class="mt-2">Tech used HTML,CSS</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quod iusto cumque quos tempore, aspernatur est officia, quis,
                vitae repellat quia placeat accusantium obcaecati! Tempore neque
                maiores quam commodi delectus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
