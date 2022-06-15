import React from "react";

const Contact = () => {
  return (
    <div id="contact" class="container">
      <div class="title">
        <span>Contact Me</span>
      </div>
      <div class="row fa-5x">
        <div class="col d-flex justify-content-around">
          <a href="mailto:myemail@.com">
            <i class="fas fa-envelope text-danger"></i>
          </a>
          <a href="">
            <i class="fab fa-linkedin "></i>
          </a>
          <a href="">
            <i class="fab fa-facebook "></i>
          </a>
          <a href="https://github.com/" target="_blank" />
          <a href="">
            <i class="fab fa-instagram text-danger"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
