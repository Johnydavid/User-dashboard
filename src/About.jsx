import React from "react";
// import MyPortfolio from "./Portfolio/MyPortfolio";

export default function About() {
  return (
    <div>
      <div className="container ">
        <div className="row mt-5">
          <div className="col-6 ">
            <h1 className="text-success fontClass"> About Me</h1>

            <ul className="mt-5 fs-4 fst-italic text-white-50 ">
              <li>
                I'm a <span className="text-warning">Front-End Developer</span>{" "}
                with a passion for developing interactive web applications.
              </li>
              <li className="mt-3 ">
                Focused and efficient learner with practical expertise in
                creating <span class="text-warning">eCommerce, gaming</span> and{" "}
                <span class="text-warning">educational</span> websites.
              </li>
              <li className="mt-3">
                I'm able to develop, present and effectively communicate complex
                ideas and strategies in both technical and user-friendly
                language to a variety of audiences.
              </li>
              <li className="mt-3">
                I'm interested in working with{" "}
                <span class="text-warning">UI effects, animations </span>and
                creating intuitive, dynamic user experiences.
              </li>
            </ul>
          </div>
          <div className="col col-6 fontClass" align="center">
            <h1 className="text-success">Technical Skills</h1>

            <h3 className="mt-5 text-danger">Languages</h3>
            <p className="mt-3 ">
              {" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                title="JavaScript"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                />{" "}
              </a>{" "}
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  title="Python"
                />{" "}
              </a>{" "}
            </p>
            <h3 className="mt-5 text-danger">Front End Development</h3>
            <p className="mt-3">
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  title="React"
                />{" "}
              </a>
              <a
                href="https://www.w3schools.com/html/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  title="HTML5"
                />{" "}
              </a>{" "}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  title="CSS"
                />{" "}
              </a>{" "}
              <a
                href="https://getbootstrap.com/"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  title="Bootstrap"
                />{" "}
              </a>{" "}
            </p>
            <h3 className="mt-5 text-danger">Back End Development</h3>
            <p className="mt-3">
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                {" "}
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  title="NodeJS"
                />{" "}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
