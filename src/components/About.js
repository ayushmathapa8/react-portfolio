import React from "react";
import profile from "../assets/my-img.JPG";

const About = () => {
  return (
    <div id="about" class="container about">
      <div class="title">
        <span>About Me</span>
      </div>

      <div class="row mt-5">
        <div class="col">
          <img src={profile} alt="" />
        </div>
        <div class="col">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            perspiciatis! Perferendis quam recusandae incidunt eum culpa at
            eveniet rem inventore alias vitae, perspiciatis ab debitis iure
            aliquam officiis laudantium assumenda!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            sequi ipsa qui, maxime illum labore quaerat repellat enim, unde quas
            sunt beatae magni voluptas quasi, neque inventore eligendi numquam.
            Ullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
