// import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buttons from "./Buttons";
import Testing from "./Testing";
import Cards from "./Cards";
import Charts from "./Charts";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Tables from "./Tables";
import Register from "./Register";
import "./SbAdmin2.css";
import Layout from "./Layout";
import Color from "./Color";
import Border from "./Border";
import Animation from "./Animation";
import Other from "./Other";

export default function App() {
  return (
    <>
      <Router>
      <Routes>

 <Route index element={<Dashboard />} />
           <Route path="Buttons" element={<Buttons />} />
          <Route path="Login" element={<Login />} />
          <Route path="Cards" element={<Cards />}/>
          <Route path="Charts" element={<Charts />}/>
          <Route path="Tables" element={<Tables />} />
          <Route path="Border" element={<Border />} />
          <Route path = "Color" element={<Color />} />
          <Route path = "Animation" element={<Animation />} />
          <Route path = "Other" element={<Other />} />
 {/* <Route path="*" element={<NoPage />} />    */}

</Routes>  
      </Router>  }

      {/* <Cards /> */}
      {/* <Sidebar /> */}
    </>
  );
}
