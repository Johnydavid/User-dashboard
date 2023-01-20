import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/fontawesome-free-solid";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { hover } from "@testing-library/user-event/dist/hover";

const data = [
  {
    RRD: {
      Name: "",
    },
  },
];

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
window.addEventListener("mouseover", reveal);

export default function Experience() {
  return (
    <div>
      <AnimationOnScroll animateIn=" fadeOut">
        <div className="text-center text-success fontClass">
          <h3>My Career Journey</h3>
        </div>
      </AnimationOnScroll>

      {/* <div className="card mb-5 mb-lg-0 rounded-5 backgroundColor  text-bg-white-50 "> */}

      <section className="container reveal mb-5 position-relative">
        <div className="row ">
          <div className="col col-lg-4  rrdAnimation ">
            <div className="card mb-5 mb-lg-0 rounded-5 backgroundColor text-bg-white-50  ">
              <div className="card-body ">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/RR_Donnelley_logo.svg/1200px-RR_Donnelley_logo.svg.png"
                  alt="RR Donnelley"
                ></img>

                <h5 className="card-title mt-4 text-dark text-uppercase  text-center">
                  RR Donnelley Global India Outsource Pvt. Ltd.
                </h5>
                <h5 className="card-header p-1 text-dark text-center">
                  Senior Customer Service Executive
                </h5>
                <h6 className="card-title text-dark fontClass  text-center">
                  January 2017 - Present
                </h6>

                <hr className="text-danger mt-0"></hr>

                <ul type="none" className="list-group list-group-flush   ">
                  <li className="list-group-item fs-5 text-dark backgroundColor ">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Responsible for providing customers with technical support
                      and query handling.
                    </i>
                  </li>
                  <li className="list-group-item fs-5 text-dark backgroundColor ">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Analyzing customer experience data and provide insights to
                      the Front Desk team.
                    </i>
                  </li>
                  <li className="list-group-item fs-5 text-dark  backgroundColor  ">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Applied models and data to understand and predict customer
                      satisfaction level
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col col-lg-4 nineStarsAnimation ">
            <div className="card  mb-lg-0 rounded-5 backgroundColor  text-bg-white-50 ">
              <div className="card-body">
                <img
                  src="https://www.ninestarsglobal.com/wp-content/themes/ninestars/img/Ninestars_Logo_black.svg"
                  alt="Ninestars"
                  className="logoClass"
                ></img>

                <h5 className="card-title text-dark text-uppercase text-center">
                  Ninestars Information Technologies Pvt. Ltd.
                </h5>
                <h5 className="card-header text-dark  p-1 text-center">
                  Media Research Analyst
                </h5>
                <h6 className="card-title text-dark  fontClass text-center">
                  December 2011 - January 2017
                </h6>

                <hr className="text-danger mt-0"></hr>
                <ul className="list-group list-group-flush" type="none">
                  <li className="list-group-item fs-5 backgroundColor  ">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Media Research works for clients such as NewsAccess
                      (Ireland), Kantar Media
                    </i>
                  </li>
                  <li className="list-group-item fs-5 backgroundColor  ">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Prepare root cause analysis to address problems with
                      customer experience
                    </i>
                  </li>
                  <li className="list-group-item fs-5 backgroundColor  ">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Media Summary and Transcription Works for Australian
                      Clients
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col col-lg-4  ramtechAnimation ">
            <div className="card mb-3 mb-lg-0 rounded-5 backgroundColor   text-white-50 ">
              <div className="card-body ">
                <img
                  src="
              https://ramtech-corp.com/wp-content/uploads/2021/07/logo.png"
                  alt="RamTech"
                  className="logoClass"
                ></img>

                <h5 className="card-title text-dark text-uppercase text-center">
                  RAMTeCH Software Solutions Pvt. Ltd.
                </h5>
                <h5 className="card-header text-dark p-1 text-center">
                  General Transcriptionist
                </h5>
                <h6 className=" text-dark fontClass text-center">
                  March 2006 – December 2011
                </h6>

                <hr className="text-danger mt-0"></hr>

                <ul className="list-group list-group-flush  " type="none">
                  <li className="list-group-item fs-5 backgroundColor  text-dark ">
                    <span className="me-4  fs-5 ">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>

                    <i>
                      Financial, Insurance, and Business Transcription works for
                      the US and British Clients
                    </i>
                  </li>
                  <li className="list-group-item fs-5 backgroundColor text-dark ">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Transcript Quarterly Earnings Conference Calls for Fortune
                      500 Companies
                    </i>
                  </li>
                  <li className="list-group-item fs-5 backgroundColor text-dark">
                    <span className="me-4  fs-5">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <i>
                      Primary and Secondary Research Analyst for TomTom Maps
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
