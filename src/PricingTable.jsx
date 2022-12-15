import React, { Component } from "react";

export default class PricingTable extends Component {
  render() {
    return (
      <div className="container text-bg-primary mainDiv ">
        <div className="row g-4 ">
          <div className="col    colClass   text-bg-light  ">
            <div className="text-center">
              <h6 className="mt-3  text-secondary "> FREE</h6>

              <span className=" mb-5 fontClass">$0</span>
              <span>/month</span>
            </div>

            <div className="mb-4">
              {" "}
              <hr className="bg-danger border-1 "></hr>
            </div>
            <div>
              <ul type="none" className="mb-4">
                <li className="mb-3">
                  <i className="fas fa-check"></i> Single User
                </li>
                <li className="mb-3">
                  {" "}
                  <i className="fas fa-check"></i> 5GB Storage
                </li>
                <li className="mb-3">
                  {" "}
                  <i className="fas fa-check"></i> Unlimited Public Projects
                </li>
                <li className="mb-3">
                  <i className="fas fa-check"></i> Community Access
                </li>
                <li className=" mb-3 text-muted opacity-75 ">
                  {" "}
                  <i className="fas fa-times"> </i>{" "}
                  <span className="m-2 "> Unlimited Private Projects </span>
                </li>
                <li className="mb-3 text-muted opacity-75 ">
                  {" "}
                  <i className=" fas fa-times"></i>
                  <span className="m-2 "> Dedicated Phone Support </span>
                </li>
                <li className="mb-3 text-muted opacity-75 ">
                  {" "}
                  <i className=" fas fa-times"></i>
                  <span className="m-2 "> Free Subdomain </span>
                </li>
                <li className="mb-3 text-muted opacity-75 ">
                  {" "}
                  <i className="fas fa-times"></i>
                  <span className="m-2 "> Monthly Status Reports</span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary rounded-pill fw-bold">
                BUTTON
              </button>
            </div>
          </div>

          <div className="col   text-bg-light colClass">
            <div className="text-center">
              <h6 className="mt-3  text-secondary ">PLUS</h6>

              <span className=" mb-5 fontClass">$9</span>
              <span>/month</span>
            </div>

            <div className="mb-4">
              <hr className="bg-danger border-1 "></hr>
            </div>
            <div>
              <ul type="none" className="mb-4">
                <li className="mb-3 fw-bold">
                  {" "}
                  <i className="fas fa-check"></i> 5 Users
                </li>
                <li className="mb-3">
                  <i className="fas fa-check"></i> 50GB Storage
                </li>
                <li className="mb-3">
                  <i className="fas  fa-check"></i> Unlimited Public Projects
                </li>
                <li className="mb-3">
                  <i className="fas  fa-check"></i> Community Access
                </li>
                <li className="mb-3">
                  <i className="fas fa-check"></i> Unlimited Private Projects
                </li>
                <li className="mb-3">
                  <i className="fas  fa-check"></i> Dedicated Phone Support
                </li>
                <li className="mb-3">
                  <i className="fas fa-check"></i> Free Subdomain
                </li>
                <li className="mb-3 text-muted opacity-75 ">
                  <i className=" fas fa-times"></i>{" "}
                  <span className="m-2 ">Monthly Status Reports </span>
                </li>
              </ul>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary rounded-pill fw-bold">
                BUTTON
              </button>
            </div>
          </div>
          <div className="col   text-bg-light colClass">
            <div className="text-center">
              <h6 className="mt-3  text-secondary "> PRO</h6>

              <span className=" mb-5 fontClass">$49</span>
              <span>/month</span>
            </div>

            <div className="mb-4">
              {" "}
              <hr className="bg-danger border-1 "></hr>
            </div>
            <div>
              <ul type="none" className="mb-4">
                <li className="mb-3 fw-bold">
                  {" "}
                  <i className="fas fa-check"></i> Unlimited Users
                </li>
                <li className="mb-3">
                  <i className="fas fa-check"></i> 150GB Storage
                </li>
                <li className="mb-3">
                  {" "}
                  <i className="fas fa-check"></i> Unlimited Public Projects
                </li>
                <li className="mb-3">
                  <i className="fas fa-check"></i> Community Access
                </li>
                <li className="mb-3  ">
                  <i className="fas fa-check"></i> Unlimited Private Projects
                </li>
                <li className="mb-3 ">
                  <i className="fas fa-check"></i> Dedicated Phone Support
                </li>
                <li className="mb-3 ">
                  <i className="fas fa-check"></i> <b>Unlimited </b>Free
                  Subdomains
                </li>
                <li className="mb-3 ">
                  <i className="fas fa-check"></i> Monthly Status Reports
                </li>
              </ul>
            </div>
            <div className=" d-flex justify-content-center">
              <button className="btn btn-primary rounded-pill fw-bold">
                {" "}
                BUTTON
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
