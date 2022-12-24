import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/fontawesome-free-regular";

export default function Footer() {
  return (
    <>
      <div className="footerClass bg-dark text-light">
        {" "}
        Copyright{" "}
        <span className=" fa-sm mx-2">
          <FontAwesomeIcon icon={faCopyright} />
        </span>{" "}
        Your Website 2022
      </div>
    </>
  );
}
