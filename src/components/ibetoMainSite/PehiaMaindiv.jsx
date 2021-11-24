import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const PehiaMaindiv = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="container-fluid event-format-row" id="EventFormat">
      <h2 className="container heading text-center mt-3 event-format-heading">
        Fellowship<span> by Pehia</span>
      </h2>

      <div className="row event-format">
        <p className="content pehia-content ">
          PEHIA, a non-profit organisation from Kerala, works on building a
          culture of inclusivity in the field of STEM. PEHIA, a non-profit
          organisation from Kerala, works on building a culture of inclusivity
          in the field oHIA, a non-profit organisation from Kerala, works on
          building a culture of inclusivity in the field of STEM. PEHIA, a
          non-profit organisation from Kerala, works on building a culture of
          inclusivity in the field The top 25 teams of IBeTo will be eligible to
          apply for the Fellowship program arranged by Pehia under definite
          rules and regulations.
        </p>
        <div className="text-center">
          <Link to="/pehia" className="blob-btn-text">
            <button className="btn mt-4 blob-btn abt-btn button-shadow">
              View details
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </button>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  result="blur"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7"
                  result="goo"
                ></feColorMatrix>
                <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
              </filter>
            </defs>
          </svg>{" "}
        </div>
      </div>
    </div>
  );
};

export default PehiaMaindiv;
