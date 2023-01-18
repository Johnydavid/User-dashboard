import React from "react";
import { Outlet, Link } from "react-router-dom";
import Cover from "./Dashboard";
import Buttons from "./Buttons";
import Register from "./Register";
import Login from "./Login";

export default function Layout () {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/Buttons">Buttons</Link>
          </li>
          <li>
            <Link to="/Charts">Charts</Link>
          </li>
          <li>
            <Link to="/Tables">Tables</Link>
          </li>
          <li>
            <Link to="/Cards">Cards </Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};