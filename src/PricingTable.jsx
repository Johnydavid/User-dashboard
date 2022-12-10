import React, { Component } from "react";
import Bootstrap from "bootstrap/dist/css/bootstrap.min.css";

export default class PricingTable extends Component {
  render() {
    return (
      <div className="container-lg  text-bg-primary ">
        <div className="row  m-4  align-items-start">
          <div className="col   m-4 sm-4  text-bg-light colClass">
            <div className="text-center">
              <h6 className="mt-3  text-secondary "> FREE</h6>

              <span className=" mb-5 fontClass"> $0 </span>
              <span>/month</span>
              
            </div>

            <div className="mb-4">
              {" "}
              <hr className="bg-danger border-1 "></hr>
            </div>
            <div>
              
              <ul type="none" className="mb-4">
                <li className="mb-3"> <i className="fa-solid fa-check"></i> Single User</li>
                <li className="mb-3"> <i className ="fa-solid fa-bold  fa-check"></i> 5GB Storage</li>
                <li className="mb-3"> <i className ="fa-solid fa-bold fa-check"></i> Unlimited Public Projects</li>
                <li className="mb-3"><i className ="fa-solid fa-check"></i> Community Access</li>
                <li className="mb-3 text-info "> <i className ="fa-solid fa-bold fa-x"></i> Unlimited Private Projects</li>
                <li className="mb-3 text-info">  <i className ="fa-solid fa-bold fa-x"></i> Dedicated Phone Support</li>
                <li className="mb-3 text-info">  <i className ="fa-solid fa-bold fa-x"></i> Free Subdomain</li>
                <li className="mb-3 text-info"> <i className ="fa-solid fa-bold fa-x"></i> Monthly Status Reports</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="btn btn-primary rounded-pill fw-bold">
              
                BUTTON
              </button>
            </div>
          </div>
          <div className="col   m-4 sm-4  text-bg-light colClass">
            <div className="text-center">
              <h6 className="mt-3  text-secondary "> PLUS</h6>

              <span className=" mb-5 fontClass"> $9 </span>
              <span>/month</span>
           
            </div>

            <div className="mb-4">
              
              <hr className="bg-danger border-1 "></hr>
            </div>
            <div>
              
              <ul type="none" className="mb-4">
                <li className="mb-3 fw-bold"> <i className ="fa-solid fa-bold  fa-check"></i> 5 Users</li>
                <li className="mb-3"><i className ="fa-solid fa-bold  fa-check"></i> 50GB Storage</li>
                <li className="mb-3"><i className ="fa-solid fa-bold  fa-check"></i> Unlimited Public Projects</li>
                <li className="mb-3"><i className ="fa-solid fa-bold  fa-check"></i> Community Access</li>
                <li className="mb-3"><i className ="fa-solid fa-bold  fa-check"></i> Unlimited Private Projects</li>
                <li className="mb-3"><i className ="fa-solid fa-bold  fa-check"></i> Dedicated Phone Support</li>
                <li className="mb-3"><i className ="fa-solid fa-bold  fa-check"></i> Free Subdomain</li>
                <li className="mb-3 text-info"><i className ="fa-solid fa-bold fa-x"></i> Monthly Status Reports</li>
              </ul>
            </div>
            <div className="text-center">
              <button className="btn btn-primary rounded-pill fw-bold">
               
                BUTTON
              </button>
            </div>
          </div>
          <div className="col   m-4 sm-4  text-bg-light colClass">
            <div className="text-center">
              <h6 className="mt-3  text-secondary "> PRO</h6>

              <span className=" mb-5 fontClass"> $49 </span>
              <span>/month</span>
              <i className="fa-solid fa-check"></i>
            </div>

            <div className="mb-4">
              {" "}
              <hr className="bg-danger border-1 "></hr>
            </div>
            <div>
              <i className="fa-solid fa-check"></i>
              <ul type="none" className="mb-4">
                <li className="mb-3 fw-bold"> Unlimited Users</li>
                <li className="mb-3"> 150GB Storage</li>
                <li className="mb-3"> Unlimited Public Projects</li>
                <li className="mb-3">Community Access</li>
                <li className="mb-3  "> Unlimited Private Projects</li>
                <li className="mb-3 "> Dedicated Phone Support</li>
                <li className="mb-3 "> <b>Unlimited </b>Free Subdomains</li>
                <li className="mb-3 ">Monthly Status Reports</li>
              </ul>
            </div>
            <div className="text-center">
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
