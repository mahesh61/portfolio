import React from "react";
import "./intro.css";
import Photo from "../img/cartoonbg.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="left">
        <div className="i-wrapper">
          <h2 className="i-intro">Hello My name is</h2>
          <h1 className="i-name">Mahesh Nimmala</h1>
          <div className="i-tittle">
            <div className="i-tittle-wraper">
              <div className="i-tittle-item">Web Developer</div>
              <div className="i-tittle-item">Web Developer</div>
              <div className="i-tittle-item">Web Developer</div>
              <div className="i-tittle-item">Web Developer</div>
            </div>
          </div>
          <div className="i-desc">
            “The art of debugging is figuring out what you really told your
            program to do rather than what you thought you told it to do.”
          </div>
        </div>
      </div>
      <div className="right">
        <div className="i-bg"></div>
        <img src={Photo} alt="" className="i-image" />
      </div>
    </div>
  );
};

export default Intro;
