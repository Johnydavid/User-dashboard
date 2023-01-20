import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ScrollToTop from "react-scroll-to-top";

export default function Contact() {
  const goTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    <ScrollToTop smooth />;
  };

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Johnson David.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Johnson David.pdf";
        alink.click();
      });
    });
  };
  return (
    <div>
      <div className="container position-static">
        <div className="row mt-5 p-3">
          <h1 className="text-success fontClass"> Contact Me</h1>

          <div>
            <button
              className="btn btn-secondary btn-lg text-dark"
              onClick={onButtonClick}
            >
              Download My Resume
            </button>
          </div>

          <div className="col col-auto mt-5 me-3" align="center">
            <img
              src="https://i.pinimg.com/564x/c3/83/aa/c383aac9b5c231365451910306c6a341.jpg"
              alt="Gmail"
              className="logoImg"
            ></img>
            <span className="mt-3 text-white-50"> dropin2johny@gmail.com</span>
          </div>
          <div className="col col-auto  mt-5 " align="center">
            <img
              src="https://i.pinimg.com/564x/e1/89/99/e18999d527d4825cbb92878d866e9417.jpg"
              alt="phone"
              className="logoImg"
            ></img>
            <span className="ms-3 mt-3 text-white-50">9841360216</span>
          </div>
          <div className="col col-auto mt-5" align="center">
            <a
              href="https://linkedin.com/in/johnson-david-5b02ba221"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.pinimg.com/564x/85/f2/dc/85f2dcf8681c434ecbd5a3019e9ae86a.jpg"
                alt="LinkedIn"
                className="logoImg"
              ></img>
            </a>

            {/* <h5 className="mt-3 text-white-50">LinkedIn</h5> */}
          </div>
          <div className="col col-auto mt-5" align="center">
            <a
              href="https://github.com/Johnydavid"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Github"
                className="logoImg"
              ></img>
            </a>
            {/* <h5 className="mt-3 text-white-50">Github</h5> */}
          </div>
          <div className="col col-auto mt-5" align="center">
            <a
              href="https://app.netlify.com/teams/johnydavid/overview"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://i.pinimg.com/564x/95/e1/78/95e178f5b1dc1a2327595784442a866c.jpg"
                alt="Netlify"
                className="logoImg"
              ></img>
            </a>
            {/* <h5 className="mt-3 text-white-50">Netlify</h5> */}
          </div>
        </div>
      </div>

      <ScrollToTop
        smooth
        title="Move to Top"
        component={<FontAwesomeIcon icon={faAngleUp} />}
      />
    </div>
  );
}
