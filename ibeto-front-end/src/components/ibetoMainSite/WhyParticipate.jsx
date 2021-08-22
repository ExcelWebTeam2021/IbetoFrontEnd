import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/WhyParticipate.css";
import "../stylesheet/ResponsiveStyle.css";

import ideate from "../images/ideate.svg";
import create from "../images/create.svg";
import showcase from "../images/showcase.svg";

function WhyParticipate() {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);
  return (
    <div className="container-fluid whyparticipate-row  "  data-aos="fade-in">
      <h2 className="container heading mb-5">
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
                    src={ideate}
                  />

                  <p className="content">
                    A unique chance to start with just an idea and grow it to
                    fruition.
                  </p>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={ideate}
                  />

                  <p className="content">
                    An opportunity to avail pre-incubation facilities to nurture
                    your business model
                  </p>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={create}
                  />

                  <p className="content">A grand prize pool of Rs. 1 Lakh</p>
                </div>
              </div>
            </div>

            <div class="carousel-item  whyparticipate-maindiv">
              <div className="row">
                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={showcase}
                  />

                  <p className="content">
                    An opportunity to pitch your ideas to Angel investors and
                    capitalize your project
                  </p>
                </div>
                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={create}
                  />

                  <p className="content">
                    A panel of experts to help you navigate if you’re stuck in
                    your project journey
                  </p>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 whyparticipate-div">
                  <img
                    class="img-fluid card-img-top whyparticipate-img"
                    src={showcase}
                  />

                  <p className="content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi nesciunt quam obcaecati
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
                src={ideate}
              />

              <p className="content">
                A unique chance to start with just an idea and grow it to
                fruition.
              </p>
            </div>
            <div class="carousel-item whyparticipate-smallscreen-div">
              <img
                class="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={ideate}
              />

              <p className="content">
                An opportunity to avail pre-incubation facilities to nurture
                your business model
              </p>
            </div>
            <div class="carousel-item whyparticipate-smallscreen-div">
              <img
                class="img-fluid card-img-top whyparticipate-img-smallscreen"
                src={create}
              />

              <p className="content">A grand prize pool of Rs. 1 Lakh gdgdfgdgdfgdgdf</p>
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
           ›  <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WhyParticipate;
