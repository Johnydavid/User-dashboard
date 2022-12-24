import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import PopularItems from "./PopularItems";
import AllProducts from "./AllProducts";
import NewArrivals from "./NewArrivals";

export default function Nav(props) {
  const { itemCount } = props;
  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg bg-light ">
          <div className="container-fluid navClass ">
            <a
              className="navbar-brand px-2"
              target={"blank"}
              href="https://getbootstrap.com/"
            >
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav   mb-lg-0 ms-lg-4">
                {["Home", "About", "Shopping"].map((page, index) => {
                  return (
                    <>
                      <ul className="navbar-nav   mb-lg-0 ms-lg-4">
                        <li className="nav-item nav-link active px-2">
                          <Link to={page} key={index}>
                            {page}
                          </Link>
                        </li>
                      </ul>
                    </>
                  );
                })}

                <li className="nav-item dropdown nav-item  active px-2 ">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle "
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </Link>

                  <ul className="dropdown-menu ">
                    <li className="dropdown-item">
                      <Link to="AllProducts">All Products</Link>
                    </li>
                    <li className="dropdown-divider"></li>

                    <li className="dropdown-item">
                      <Link to="PopularItems">Popular Items</Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="NewArrivals">New Arrivals</Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="emptyClass"></div>

              <form className="d-flex px-2">
                <button className="btn btn-outline-dark btnClass" type="submit">
                  <span className="fa-sm me-2">
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                  <span className="me-2">Cart</span>

                  <span className="badge text-bg-dark">{itemCount}</span>
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Routes>
          {[
            "Home",
            "About",
            "Shopping",
            "PopularItems",
            "AllProducts",
            "NewArrivals",
          ].map((page, index) => {
            <Route exact path="./" element={page} key={index} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}
