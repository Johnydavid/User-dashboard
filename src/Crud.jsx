import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

export default function Crud() {
  return (
    <div className="container">
      <h1 className="crudText">CRUD Operation</h1>
      <div className="color">
        <h2>
          <span style={{ fontFamily: "IBM Plex Mono" }}> CRUD </span>
          <span style={{ fontFamily: "'Andika" }}>
            is a type of mechanism that allows you to Create, Read, Edit, and
            Delete data.
          </span>
        </h2>

        <div className="homeText">
          <Typewriter
            options={{
              strings: ["Create", "Read", "Update", "Delete"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  );
}
