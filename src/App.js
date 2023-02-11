import "./App.css";
import React from "react";
import Crud from "./Crud";
import Create from "./Create";
import Home from "./Home";
import Read from "./Read";
import Update from "./Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/crud" element={<Crud />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
