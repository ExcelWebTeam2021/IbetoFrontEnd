import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/Sponsors.css";
import "../stylesheet/ResponsiveStyle.css";

import AVT from "../images/AVT.png";
import IDEC from "../images/IDEC.png";
import Pehia from "../images/Pehia.jpg";

const Sponsors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container" id="Sponsors">
      <h2 align="center" className="heading ">
        In associ<span>ation with</span>
      </h2>
      <div className="row no-gutters clients-wrap clearfix wow fadeInUp">
        <div className="col-lg-4 col-md-4 col-xs-6">
          <div data-aos="zoom-out" className="client-logo">
            {" "}
            <a href="https://www.avtnatural.com/">
              <img src={AVT} className="img-fluid" alt="AVT" />
            </a>{" "}
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-xs-6">
          <div data-aos="zoom-out" className="client-logo">
            {" "}
            <a href="https://iedcmec.in/">
              {" "}
              <img src={IDEC} className="img-fluid" alt="IDEC" />
            </a>{" "}
          </div>
        </div>

        <div className="col-lg-4 col-md-4 col-xs-6">
          <div data-aos="zoom-out" className="client-logo">
            {" "}
            <a href="https://www.pehia.org/ ">
              <img src={Pehia} className="img-fluid" alt="" />
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
