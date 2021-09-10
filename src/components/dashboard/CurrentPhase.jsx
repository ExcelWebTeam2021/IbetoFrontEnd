import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

import logo from "../images/ibetologo.svg";

const CurrentPhase = () => {
  return (
    <div className="white-bk currentphase-row">
      <div className="row">
        <div className="col-md-3 col-sm-10 text-center">
          {" "}
          <img
            src={logo}
            alt="ibeto-logo"
            className="dashboard-logo img-responsive"
          />
        </div>
        <div className="col-md-5 col-sm-10 currentphase-text">
          <h4 className="dashboard-heading text-center ibeto-heading">Ibeto</h4>
          <p className="text-center"> Registration stage</p>
          {/* <p>Phase 1 : Registration stage</p> */}

          {/* <button className='btn btn-danger btn-sm'>Shortlisted students</button> */}
        </div>
        <div className="col-md-4 col-sm-10 progressbar-row">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1mnf_TGXzcwBNRTSdzNGy3cDU3ovMcZ2h/view"
            style={{ textDecoration: "None" }}
          >
            <button className="btn btn-primary btn-sm dashboard-phase-btn ">
              {" "}
              View guidelines
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurrentPhase;
