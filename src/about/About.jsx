import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="a-image"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-tittl">About Me</h1>
        <p className="a-sub">
          I am Web Developer i has 1.5 years of experince as a Developer.
        </p>
        <p className="a-desc">
          I am currently working as a full stack Dot net Developer in
          <a href="https://www.insurejoy.com/" target="-blank">
            {" "}
            Insurejoy.com{" "}
          </a>
          (Capitalgram Marketing pvt lmt.),previously i worked as a intern at
          TechaWally,i completed my graduation in 2020 year from Vaagdevi Collge
          of Engineering.
        </p>
        <span> -Thank you :).</span>
      </div>
    </div>
  );
};

export default About;
