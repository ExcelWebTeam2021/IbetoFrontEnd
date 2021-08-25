import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/WhyParticipate.css";
import "../stylesheet/ResponsiveStyle.css";

import certificate from "../images/whyparticipate/certificate.svg";
import lightbulb from "../images/whyparticipate/lightbulb.svg";
import trophy from "../images/whyparticipate/trophy.svg";
import sponsor from "../images/whyparticipate/sponsor.svg";
import profit from "../images/whyparticipate/profit.svg";
import helping from "../images/whyparticipate/helping.svg";

function WhyParticipate() {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);
  return (
    <div className="container-fluid whyparticipate-row  " data-aos="fade-in">
      <h2 className="container heading mb-5 text-center">
        Why<span> Participate</span>
      </h2>
      {/* BIG SCREEN */}
      <div className="container whyparticipate-bigscreen d-none d-md-block">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner  ">
            <div className="carousel-item  whyparticipate-maindiv active">
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    className="img-fluid card-img-top whyparticipate-img"
                    src={lightbulb}
                    alt="idea"
                  />

                  <p className="content">
                    A unique chance to start with just an idea and grow it to
                    fruition.
                  </p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    className="img-fluid card-img-top whyparticipate-img"
                    src={profit}
                    alt="pre-incubation facilities"
                  />

                  <p className="content">
                    An opportunity to avail pre-incubation facilities to nurture
                    your business model
                  </p>
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    className="img-fluid card-img-top whyparticipate-img"
                    src={trophy}
                    alt="prize money"
                  />

                  <p className="content">
                    A grand prize pool of Rs. 1 Lakh asdasdadada
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item  whyparticipate-maindiv">
              <div className="row">
                <div className="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    className="img-fluid card-img-top whyparticipate-img"
                    src={sponsor}
                    alt="capitalize your project"
                  />

                  <p className="content">
                    An opportunity to pitch your ideas to Angel investors and
                    capitalize your project
                  </p>
                </div>
                <div className="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    className="img-fluid card-img-top whyparticipate-img"
                    src={helping}
                    alt="mentor"
                  />

                  <p className="content">
                    A panel of experts to help you navigate if you’re stuck in
                    your project journey
                  </p>
                </div>

                <div className="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    className="img-fluid card-img-top whyparticipate-img"
                    src={certificate}
                    alt="certificate"
                  />

                  <p className="content">KTU Certificate</p>
                </div>
              </div>
            </div>
          </div>

          <a data-slide="next" href="#demo" className="carousel-control-next">
            ›
          </a>
          <a data-slide="prev" href="#demo" className="carousel-control-prev">
            ‹
          </a>
        </div>
      </div>
      {/* SMALL SCREEN */}
      <div className="container whyparticipate-smallscreen d-md-none">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active whyparticipate-smallscreen-div">
              <img
                className="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={lightbulb}
                alt="idea"
              />

              <p className="content">
                A unique chance to start with just an idea and grow it to
                fruition.
              </p>
            </div>
            <div className="carousel-item whyparticipate-smallscreen-div">
              <img
                className="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={profit}
                alt="pre-incubation facilities"
              />

              <p className="content">
                An opportunity to avail pre-incubation facilities to nurture
                your business model
              </p>
            </div>
            <div className="carousel-item whyparticipate-smallscreen-div">
              <img
                className="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={trophy}
                alt="prize money"
              />

              <p className="content">
                A grand prize pool of Rs. 1 Lakh gdgdfgdgdfgdgdf
              </p>
            </div>

            <div className="carousel-item whyparticipate-smallscreen-div">
              <img
                className="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={sponsor}
                alt="sponsors"
              />

              <p className="content">
                An opportunity to pitch your ideas to Angel investors and
                capitalize your project
              </p>
            </div>

            <div className="carousel-item whyparticipate-smallscreen-div">
              <img
                className="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={helping}
                alt="mentors"
              />

              <p className="content">
                A panel of experts to help you navigate if you’re stuck in your
                project journey
              </p>
            </div>
            <div className="carousel-item whyparticipate-smallscreen-div">
              <img
                className="img-fluid card-img-top whyparticipate-img"
                src={certificate}
                alt="certificate"
              />


              <p className="content">KTU Certificate</p>
            </div>
          </div>

          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            ‹ <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            › <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyParticipate;
