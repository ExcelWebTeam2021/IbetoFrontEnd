import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/WhyParticipate.css";
import "../stylesheet/ResponsiveStyle.css";


import certificate from "../images/whyparticipate/certificate.png";
import lightbulb from "../images/whyparticipate/lightbulb.png";
import trophy from "../images/whyparticipate/trophy.png";
import sponsor from "../images/whyparticipate/sponsor.png";
import profit from "../images/whyparticipate/profit.png";
import helping from "../images/whyparticipate/helping.png";

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
      <div class="container whyparticipate-bigscreen d-none d-md-block">
        <div id="demo" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner  ">
            <div class="carousel-item  whyparticipate-maindiv active">
              <div className="row">
                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={lightbulb}
                  />

                  <p className="content">
                    A unique chance to start with just an idea and grow it to
                    fruition.
                  </p>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={profit}
                  />

                  <p className="content">
                    An opportunity to avail pre-incubation facilities to nurture
                    your business model
                  </p>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={trophy}
                  />

                  <p className="content">A grand prize pool of Rs. 1 Lakh asdasdadada</p>
                </div>
              </div>
            </div>

            <div class="carousel-item  whyparticipate-maindiv">
              <div className="row">
                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={sponsor}
                  />

                  <p className="content">
                    An opportunity to pitch your ideas to Angel investors and
                    capitalize your project
                  </p>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={helping}
                  />

                  <p className="content">
                    A panel of experts to help you navigate if you’re stuck in
                    your project journey
                  </p>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={certificate}
                  />

                  <p className="content">
                   KTU Certificate
                  </p>
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
      <div class="container whyparticipate-smallscreen d-md-none">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active whyparticipate-smallscreen-div">
              <img
                class="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={lightbulb}
              />

              <p className="content">
                A unique chance to start with just an idea and grow it to
                fruition.
              </p>
            </div>
            <div class="carousel-item whyparticipate-smallscreen-div">
              <img
                class="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={profit}
              />

              <p className="content">
                An opportunity to avail pre-incubation facilities to nurture
                your business model
              </p>
            </div>
            <div class="carousel-item whyparticipate-smallscreen-div">
              <img
                class="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={trophy}
              />

              <p className="content">
                A grand prize pool of Rs. 1 Lakh gdgdfgdgdfgdgdf
              </p>
            </div>

            <div class="carousel-item whyparticipate-smallscreen-div">
              <img
                class="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={sponsor}
              />

              <p className="content">
                An opportunity to pitch your ideas to Angel investors and
                capitalize your project
              </p>
            </div>


            <div class="carousel-item whyparticipate-smallscreen-div">
              <img
                class="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={helping}
              />

              <p className="content">
                A panel of experts to help you navigate if you’re stuck in your
                project journey
              </p>
            </div>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            ‹ <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            › <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyParticipate;
