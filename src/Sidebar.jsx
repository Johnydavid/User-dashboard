import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Buttons from "./Buttons";


import Cards from "./Cards";
import Charts from "./Charts";
import Login from "./Login";

import Tables from "./Tables";
import Register from "./Register";
import "./SbAdmin2.css";
import Layout from "./Layout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughWink, faTachometerAlt, faCog, faTable, faWrench, faChartArea } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar (){
    return(
        <>

<div id="page-top">
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/* <!-- Sidebar --> */}
          <nav>
            <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              {/* <!-- Sidebar - Brand --> */}
              <Link
                class="sidebar-brand d-flex align-items-center justify-content-center"
                to="/"
              >
                <div class="sidebar-brand-icon rotate-n-15">
                    <span className="fa-2xl">
                    <FontAwesomeIcon icon={faLaughWink} />
                    </span>
                
           
                </div>
                <div class="sidebar-brand-text mx-3">
                  SB Admin <sup>2</sup>
                </div>
              </Link>

              {/* <!-- Divider --> */}
              <hr class="sidebar-divider my-0" />

              {/* <!-- Nav Item - Dashboard --> */}
              
              <li className="nav-item  ">
              <Link className = "nav-link" to="/">
              
             
               
              <span className=" fa-fw  me-2">
              <FontAwesomeIcon icon={faTachometerAlt}/>

              </span>
             
              <span className="text-white">Dashboard</span>
              
              </Link>
              </li>

              {/* <!-- Divider --> */}
              <hr class="sidebar-divider" />
             

              {/* <!-- Heading --> */}
              <div class="sidebar-heading">Interface</div>

              {/* <!-- Nav Item - Pages Collapse Menu --> */}
              <li class="nav-item">
                <Link
                  className="nav-link  dropdown-toggle "
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  
                  <span className="fa-fw text-white"><FontAwesomeIcon icon={faCog}/> </span>
                  <span>Components</span>
                </Link>

                <div class="btn-group dropdown">
                  <ul class="dropdown-menu">
                    <div className="collapse-header text-sm-center ">Custom Components:</div>

                    <Link to="/Buttons" className="dropdown-item">
                      Buttons
                    </Link>
                    <Link to="/Cards" className="dropdown-item ">
                      Cards
                    </Link>
                  </ul>
                </div>
              </li>

              {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            
            

              <li class="nav-item">
              <Link
                  className="nav-link  dropdown-toggle "
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  
                  <span className="fa-fw "><FontAwesomeIcon icon={faWrench}/> </span>
                  <span>Utilities</span>
                </Link>
         
                  
           
                 <div class="btn-group dropdown"> 
                  <ul class="dropdown-menu">
              
                    <div className="collapse-header text-sm-center ">Custom Utilities:</div>
                    <li>
                    <Link className="dropdown-item" to="/Color">
                      Colors
                    </Link>

                    </li>
                

                  <li>
                  <Link className="dropdown-item" to="/Border">
                      Borders
                    </Link>

                  </li>
                  <li>
                  <Link className="dropdown-item" to="/Animation">
                      Animations
                    </Link>

                  </li>
                
                  <li>
                  <Link className="dropdown-item" to="/Other">
                      Other
                    </Link>

                  </li>
                    
                    </ul>
                  </div>
                
       
              </li>

         
              
                

              {/* <!-- Divider --> */}
              <hr class="sidebar-divider" />

              {/* <!-- Heading --> */}
              <div class="sidebar-heading">Addons</div>

              {/* <!-- Nav Item - Pages Collapse Menu --> */}
              <li class="nav-item">
                <a
                  class="nav-link collapsed"
                  href="#"
                  data-toggle="collapse"
                  data-target="#collapsePages"
                  aria-expanded="true"
                  aria-controls="collapsePages"
                >
                  <i class="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                </a>
                <div
                  id="collapsePages"
                  class="collapse"
                  aria-labelledby="headingPages"
                  data-parent="#accordionSidebar"
                >
                  <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Login Screens:</h6>
                    <a class="collapse-item" href="login.html">
                      Login
                    </a>
                    <Link class="collapse-item" to="/Register">
                      Register
                    </Link>
                    <a class="collapse-item" href="forgot-password.html">
                      Forgot Password
                    </a>
                    <div class="collapse-divider"></div>
                    <h6 class="collapse-header">Other Pages:</h6>
                    <a class="collapse-item" href="404.html">
                      404 Page
                    </a>
                    <a class="collapse-item" href="blank.html">
                      Blank Page
                    </a>
                  </div>
                </div>
              </li>

              {/* <!-- Nav Item - Charts --> */}
              <li class="nav-item">

<Link className="nav-link" to="/Charts">
    <span className = "fa-fw me-2">
    <FontAwesomeIcon icon = {faChartArea} />

    </span>
    

    <span>Chart</span></Link>
</li>

              {/* <!-- Nav Item - Tables --> */}
              <li class="nav-item">

<Link className="nav-link" to="/Tables">
    <span className = "fa-fw me-2">
    <FontAwesomeIcon icon = {faTable} />

    </span>
    

    <span>Tables</span></Link>
</li>

              {/* <!-- Divider --> */}
              <hr class="sidebar-divider d-none d-md-block" />

              {/* <!-- Sidebar Toggler (Sidebar) --> */}
              <div class="text-center d-none d-md-inline">
                <button
                  class="rounded-circle border-0"
                  id="sidebarToggle"
                ></button>
              </div>

              {/* <!-- Sidebar Message --> */}
              <div class="sidebar-card d-none d-lg-flex">
                <img
                  class="sidebar-card-illustration mb-2"
                  src="img/undraw_rocket.svg"
                  alt="..."
                />
                <p class="text-center mb-2">
                  <strong>SB Admin Pro</strong> is packed with premium features,
                  components, and more!
                </p>
                <a
                  class="btn btn-success btn-sm"
                  href="https://startbootstrap.com/theme/sb-admin-pro"
                >
                  Upgrade to Pro!
                </a>
              </div>
            </ul>
          </nav>
      
        {/* <!-- End of Sidebar --> */}
        </div>
        </div>
        </>
    )
}