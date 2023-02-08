import React from "react";
import "./App.css";

export default function Crud() {
  return (
    <div style={{ width: "100"}}>
      <h1 style={{ textAlign: "center", padding: `${25}px` }}>
        CRUD Operation
      </h1>
      <div className="color">
        <h2>
          {" "}
          CRUD is a type of mechanism that allows you to create data, read data,
          edit it, and delete those data.{" "}
        </h2>
        <ul  style={{ marginLeft: `${10}px`, padding: `${15}px` }}>
          <h2 className = "create">
            C <span className="spanColor"> ---></span> Create
          </h2>
          <h2  className = "read">
            R <span className="spanColor"> ---></span> Read
          </h2>
          <h2  className = "update">
            U <span className="spanColor"> ---></span> Update
          </h2>
          <h2  className = "delete">
            D <span className="spanColor"> ---></span> Delete
          </h2>
        </ul>
      </div>
    </div>
  );
}
