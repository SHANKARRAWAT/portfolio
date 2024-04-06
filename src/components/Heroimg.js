import "./HeroimgStyle.css";
import React from "react";
import intro from "../assests/intro.jpg";
import { Link } from "react-router-dom";
const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={intro} alt="" />
      </div>
      <div className="content">
        <p>Hi, I am Shankar Rawat</p>
        <h1>web developer.</h1>
        <div className="links">
          <Link to="/project" className="btn btn-project">
            Projects
          </Link>
          <Link
            to="https://drive.google.com/file/d/1AKtv2iZUGGVrdopSKVT9hgNYZxLqwDFo/view?usp=sharing"
            className="btn btn-resume"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
