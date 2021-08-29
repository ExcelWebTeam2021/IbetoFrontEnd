import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import logo from "../images/ibetologo.svg";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);

  return (
    <div className="container-fluid about-bk" id="About">
      <div className="row about">
        <div data-aos="fade-right" className="col-md-4 col-xs-12">
          <img src={logo} alt="ibeto-logo" className="about-logo img-fluid" />
        </div>
        <div data-aos="fade-left" className="col-md-8 col-xs-12 ">
          <h2 className="heading mb-4 ">
            Abo<span>ut</span>
          </h2>
          <div className="content about-content">
            <p>
              Innovations for a Better Tomorrow (IBeTo) is a technical
              innovations competition hosted by Govt. Model Engineering College,
              Kochi as part of their annual national-level technical symposium,
              Excel 2021. It is a national-level pursuit for socially relevant
              and technologically innovative ideas with the potential to trigger
              the next big social change. IBeTo gives the right platform and
              mentorship to launch the most technically innovative and
              revolutionary ideas and to develop them into a final product.
              IBeTo bridges the gap between innovators and society.{" "}
            </p>
            <p>
              This year marks the 10th edition of IBeTo, and thus IBeTo 2021 in
              association with IEDC MEC, Pehia, and AVT & Co. Ltd, has an added
              vision of working towards fulfilling the United Nations
              Sustainable Development Goals (UN SDGs) along with providing an
              opportunity to develop and implement the projects on a large scale
              in areas where technology is yet to make strides
            </p>
          </div>
          <div className="">
            <Link to="/dashboard" className="blob-btn-text">
              <button className="btn mt-4 blob-btn button-shadow">
                Register
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
            <button className="btn mt-4 blob-btn button-shadow">
              <a
                href="https://drive.google.com/file/d/1M0WvQSyvz8QCPz2Yft_ZoO9KhWFjwgmZ/view"
                className="blob-btn-text"
              >
                Guidelines
              </a>
              <span className="blob-btn__inner">
                <span className="blob-btn__blobs">
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                  <span className="blob-btn__blob"></span>
                </span>
              </span>
            </button>
            <br />
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
    </div>
  );
};

export default About;
