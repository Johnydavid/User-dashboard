<<<<<<< HEAD
import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="container-fluid">
      <h1 className="crudText">CRUD Operation</h1>

      <div className="homeText">
        <Typewriter
          options={{
            strings: [
              "C ---> Create",
              "R ---> Read",
              "U ---> Update",
              "D ---> Delete",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
=======
import React from "react";
import "./App.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="container-fluid">
      <h1 className="crudText">CRUD Operation</h1>

      <div className="homeText">
        <Typewriter
          options={{
            strings: [
              "C ---> Create",
              "R ---> Read",
              "U ---> Update",
              "D ---> Delete",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </div>
  );
}
>>>>>>> dd83b65f508b2cff4a4bf75f2fec9ea56159271d
