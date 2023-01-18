import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faLaughWink,
  faTachometerAlt,
  faCog,
  faWrench,
  faFolder,
  faChartArea,
  faFlag,
  faTable,
  faBars,
  faSearch,
  faFileAlt,
  faCheck,
  faInfoCircle,
  faExclamationTriangle,
  faTrash,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "./SbAdmin2.css";

export default function Other() {
  return (
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
                <Link className="nav-link" to="/">
                  <span className=" fa-fw  me-2">
                    <FontAwesomeIcon icon={faTachometerAlt} />
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
                  <span className="fa-fw text-white">
                    <FontAwesomeIcon icon={faCog} />{" "}
                  </span>
                  <span>Components</span>
                </Link>

                <div class="btn-group dropdown">
                  <ul class="dropdown-menu">
                    <div className="collapse-header text-sm-center ">
                      Custom Components:
                    </div>

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
                  <span className="fa-fw ">
                    <FontAwesomeIcon icon={faWrench} />{" "}
                  </span>
                  <span>Utilities</span>
                </Link>

                <div class="btn-group dropdown">
                  <ul class="dropdown-menu">
                    <div className="collapse-header text-sm-center ">
                      Custom Utilities:
                    </div>
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
                  <span className="fa-fw me-2">
                    <FontAwesomeIcon icon={faFolder}/>
                    </span>
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
                  <span className="fa-fw me-2">
                    <FontAwesomeIcon icon={faChartArea} />
                  </span>

                  <span>Chart</span>
                </Link>
              </li>

              {/* <!-- Nav Item - Tables --> */}
              <li class="nav-item">
                <Link className="nav-link" to="/Tables">
                  <span className="fa-fw me-2">
                    <FontAwesomeIcon icon={faTable} />
                  </span>

                  <span>Tables</span>
                </Link>
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

          {/* <!-- Content Wrapper --> */}
          <div id="content-wrapper" class="d-flex flex-column">
            {/* <!-- Main Content --> */}
            <div id="content">
              {/* <!-- Topbar --> */}
              <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  class="btn btn-link d-md-none rounded-circle mr-3"
                >
                  <i class="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button">
                        <span className="fa-sm">
                          <FontAwesomeIcon icon={faSearch} />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul class="navbar-nav ml-auto">
                  {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                  <li class="nav-item dropdown no-arrow d-sm-none">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-search fa-fw"></i>
                    </a>
                    {/* <!-- Dropdown - Messages --> */}
                    <div
                      class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form class="form-inline mr-auto w-100 navbar-search">
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                              <span className="fa-sm">
                                <FontAwesomeIcon icon={faSearch} />
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  {/* <!-- Nav Item - Alerts --> */}
                  <li class="nav-item dropdown no-arrow mx-1">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="alertsDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-bell fa-fw"></i>
                      {/* <!-- Counter - Alerts --> */}
                      <span class="badge badge-danger badge-counter">3+</span>
                    </a>
                    {/* <!-- Dropdown - Alerts --> */}
                    <div
                      class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown"
                    >
                      <h6 class="dropdown-header">Alerts Center</h6>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div class="mr-3">
                          <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div class="small text-gray-500">
                            December 12, 2019
                          </div>
                          <span class="font-weight-bold">
                            A new monthly report is ready to download!
                          </span>
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div class="mr-3">
                          <div class="icon-circle bg-success">
                            <i class="fas fa-donate text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div class="small text-gray-500">
                            December 7, 2019
                          </div>
                          $290.29 has been deposited into your account!
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div class="mr-3">
                          <div class="icon-circle bg-warning">
                            <i class="fas fa-exclamation-triangle text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div class="small text-gray-500">
                            December 2, 2019
                          </div>
                          Spending Alert: We've noticed unusually high spending
                          for your account.
                        </div>
                      </a>
                      <a
                        class="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </li>

                  {/* <!-- Nav Item - Messages --> */}
                  <li class="nav-item dropdown no-arrow mx-1">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="messagesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-envelope fa-fw"></i>
                      {/* <!-- Counter - Messages --> */}
                      <span class="badge badge-danger badge-counter">7</span>
                    </a>
                    {/* <!-- Dropdown - Messages --> */}
                    <div
                      class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <h6 class="dropdown-header">Message Center</h6>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div class="dropdown-list-image mr-3">
                          <img
                            class="rounded-circle"
                            src="img/undraw_profile_1.svg"
                            alt="..."
                          />
                          <div class="status-indicator bg-success"></div>
                        </div>
                        <div class="font-weight-bold">
                          <div class="text-truncate">
                            Hi there! I am wondering if you can help me with a
                            problem I've been having.
                          </div>
                          <div class="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div class="dropdown-list-image mr-3">
                          <img
                            class="rounded-circle"
                            src="img/undraw_profile_2.svg"
                            alt="..."
                          />
                          <div class="status-indicator"></div>
                        </div>
                        <div>
                          <div class="text-truncate">
                            I have the photos that you ordered last month, how
                            would you like them sent to you?
                          </div>
                          <div class="small text-gray-500">Jae Chun · 1d</div>
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div class="dropdown-list-image mr-3">
                          <img
                            class="rounded-circle"
                            src="img/undraw_profile_3.svg"
                            alt="..."
                          />
                          <div class="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div class="text-truncate">
                            Last month's report looks great, I am very happy
                            with the progress so far, keep up the good work!
                          </div>
                          <div class="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div class="dropdown-list-image mr-3">
                          <img
                            class="rounded-circle"
                            src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                            alt="..."
                          />
                          <div class="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div class="text-truncate">
                            Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if
                            they aren't good...
                          </div>
                          <div class="small text-gray-500">
                            Chicken the Dog · 2w
                          </div>
                        </div>
                      </a>
                      <a
                        class="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Read More Messages
                      </a>
                    </div>
                  </li>

                  <div class="topbar-divider d-none d-sm-block"></div>

                  {/* <!-- Nav Item - User Information --> */}
                  <li class="nav-item dropdown no-arrow">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                        Douglas McGee
                      </span>
                      <img
                        class="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    {/* <!-- Dropdown - User Information --> */}
                    <div
                      class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div class="dropdown-divider"></div>
                      <a
                        class="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/* <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div class="container-fluid">
                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-1 text-gray-800">Other Utilities</h1>
                <p class="mb-4">
                  Bootstrap's default utility classes can be found on the
                  official{" "}
                  <a href="https://getbootstrap.com/docs">
                    Bootstrap Documentation
                  </a>{" "}
                  page. The custom utilities below were created to extend this
                  theme past the default utility classes built into Bootstrap's
                  framework.
                </p>

                {/* <!-- Content Row --> */}
                <div class="row">
                  <div class="col-lg-6">
                    {/* <!-- Overflow Hidden --> */}
                    <div class="card mb-4">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                          Overflow Hidden Utilty
                        </h6>
                      </div>
                      <div class="card-body">
                        Use <code>.o-hidden</code> to set the overflow property
                        of any element to hidden.
                      </div>
                    </div>

                    {/* <!-- Progress Small --> */}
                    <div class="card mb-4">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                          Progress Small Utility
                        </h6>
                      </div>
                      <div class="card-body">
                        <div class="mb-1 small">Normal Progress Bar</div>
                        <div class="progress mb-4">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{
                              width: "75%",
                              ariaValuenow: "75",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                            }}
                          ></div>
                        </div>
                        <div class="mb-1 small">Small Progress Bar</div>
                        <div class="progress progress-sm mb-2">
                          <div
                            class="progress-bar"
                            role="progressbar"
                            style={{
                              width: "75%",
                              ariaValuenow: "75",
                              ariaValuemin: "0",
                              ariaValuemax: "100",
                            }}
                          ></div>
                        </div>
                        Use the <code>.progress-sm</code> class along with{" "}
                        <code>.progress</code>
                      </div>
                    </div>

                    {/* <!-- Dropdown No Arrow --> */}
                    <div class="card mb-4">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                          Dropdown - No Arrow
                        </h6>
                      </div>
                      <div class="card-body">
                        <div class="dropdown no-arrow mb-4">
                          <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Dropdown (no arrow)
                          </button>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div>
                        Add the <code>.no-arrow</code> class alongside the{" "}
                        <code>.dropdown</code>
                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    {/* <!-- Roitation Utilities --> */}
                    <div class="card">
                      <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">
                          Rotation Utilities
                        </h6>
                      </div>
                      <div class="card-body text-center">
                        <div class="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
                          .rotate-15
                        </div>
                        <hr />
                        <div class="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
                          .rotate-n-15
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /.container-fluid --> */}
            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}
            <footer class="sticky-footer bg-white">
              <div class="container my-auto">
                <div class="copyright text-center my-auto">
                  <span>Copyright & copy; Your Website 2020</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          {/* <!-- End of Content Wrapper --> */}
        </div>
        {/* <!-- End of Page Wrapper --> */}

        {/* <!-- Scroll to Top Button--> */}
        <a class="scroll-to-top rounded" href="#page-top">
          <i class="fas fa-angle-up"></i>
        </a>

        {/* <!-- Logout Modal--> */}
        <div
          class="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  class="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div class="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a class="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
