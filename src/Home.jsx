import React from "react";
// import About from "./Portfolio/About";
// import MyPortfolio from "./Portfolio/MyPortfolio";
// import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
// import Home from "./Home";
// import Projects from "./Projects";
// import About from "./About"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSsquareArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="nameClass ">
      <div className="titleName">
        <div>Hi,</div>
        <div>I'm,</div>
        <div>Johnson David</div>
      </div>

      <div className="nameClass typedOut mt-0">
        <h4 className=" subTitle text-white-50">Front-End Developer</h4>
      </div>
    </div>
  );
}
