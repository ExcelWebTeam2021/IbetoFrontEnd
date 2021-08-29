import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const CurrentPhase = () => {
  return (
    <div className="white-bk currentphase-row">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-md-7 col-sm-10 currentphase-text">
          <h4 className="dashboard-heading text-center ibeto-heading">Ibeto</h4>
          <p>Phase 1 : Registration phase</p>
          <a
            href="https://drive.google.com/file/d/1JgIsuXBdVFhTxWzug2v-uYc99xgPdZBa/view"
            style={{ textDecoration: "None" }}
          >
            <button className="btn btn-primary btn-sm dashboard-phase-btn ">
              {" "}
              View guidelines
            </button>{" "}
          </a>
          {/* <button className='btn btn-danger btn-sm'>Shortlisted students</button> */}
        </div>
        <div className="col-md-4 col-sm-10 progressbar-row">
          {" "}
          <div className="progress" data-percentage="20">
            <span className="progress-left">
              <span className="progress-bar"></span>
            </span>
            <span className="progress-right">
              <span className="progress-bar"></span>
            </span>
            <div className="progress-value">
              <div>
                20%
                <br />
                <span>completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPhase;
