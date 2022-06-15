import React from "react";
import logo from "../assets/logo.png";
import profile from "../assets/my-img.JPG";

const Hero = () => {
  return (
    <div id="hero" class="hero pb-5">
      {/* <!-- navbar --> */}
      <nav class="navbar navbar-expand-md navbar-light bg-light bg-opacity-10">
        <div class="container">
          <a class="navbar-brand nav-font" href="#">
            <img src={logo} alt="" />
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse nav-font"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#skills">
                  skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#projects">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#about">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- hero --> */}
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-5 text-center order-md-2">
            <img src={profile} width="80%" alt="" class="rounded-circle" />
          </div>

          <div class="col-md-7 mt-5">
            Hi👋❤ I'm
            <div class="fs-1 fw-bolder mb-4">Ayushma Thapa</div>
            <p>
              I am software engineer based in sydney.I love coding and coding.
            </p>
            <button class="btn btn-danger">
              Download Resume <i class="fa-solid fa-cloud-arrow-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
