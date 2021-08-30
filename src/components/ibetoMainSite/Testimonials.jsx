import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Testimonials.css";

import sharat from "../images/sharat.jpg";
import ramdas from "../images/ramdas.jpg";
import anitta from "../images/anitta.jpg";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      data-aos="fade-in"
      id="Testimonials"
      className="container-fluid testimonial-row"
    >
      <h1 className="container heading pb-4">
        Testim<span>onials</span>
      </h1>

      <div className="row bigscreen-testimonial">
        <a
          data-slide="prev"
          href="#quote-carousel"
          className="carousel-control left"
        >
          ‹
        </a>
        <div className="col">
          <div
            className="carousel slide"
            data-ride="carousel"
            id="quote-carousel"
          >
            <div className="carousel-inner">
              <div className="ibeto-testimonial active carousel-item">
                <blockquote>
                  <div className="row">
                    <div className="col content">
                      <p className="testimonial-content">
                        It was a unique experience and great honour to exhibit
                        our team project "Chitowrapper : A bioactive packaging"
                        in front of a well-organised competition "IBeTo 2018".
                        Careful and meticulous judgement without limitation is
                        the essential feature of this event that has made it a
                        very different opportunity.{" "}
                      </p>
                      <img className="testimonial-img" src={anitta} alt="" />
                      <div>
                        {" "}
                        <b>Ms Anitta Sunny</b>
                      </div>
                      <small> Chitowrapper, Winner of IBeTo’18 </small>
                      <div></div>
                    </div>
                  </div>
                </blockquote>
              </div>

              <div className="ibeto-testimonial carousel-item">
                <blockquote>
                  <div className="row">
                    <div className="col content">
                      <p className="testimonial-content">
                        IBETO was really a great platform for us to showcase our
                        project. The experience we gathered from this event
                        really helped us in the further development of the
                        project. We really thank team IBETO and EXCEL for the
                        excellent support and great time.
                      </p>
                      <img className="testimonial-img" src={ramdas} alt="" />
                      <div>
                        {" "}
                        <b>Mr Ramdas KU</b>
                      </div>
                      <small>
                        {" "}
                        Assistant Manager at Raychem RPG (P) Ltd, Winner of
                        IBeTo’15
                      </small>
                      <div></div>
                    </div>
                  </div>
                </blockquote>
              </div>

              <div className="ibeto-testimonial carousel-item">
                <blockquote>
                  <div className="row">
                    <div className="col content">
                      <div>
                        <p className="testimonial-content">
                          It has been an elating experience. The way the event
                          was constructed in the most subtle yet impactful
                          manner has gotten me introspecting on my skills. I
                          could pick up quite a few things on my journey being a
                          part of this event. Though fate may not have been by
                          my side on the winning streak, I have garnered much
                          more. I would like to take this opportunity to thank
                          the organising committee for being spot on. Their hard
                          work is reflected as it is very hard to see such good
                          events being put up. Events like these could be a
                          game-changer to the participants.{" "}
                        </p>
                        <img className="testimonial-img" src={sharat} alt="" />
                      </div>
                      <b>Sarath Shaji</b>

                      <div>
                        <small>CEO, Agrivator</small>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>

            <ol className="carousel-indicators">
              <li
                data-target="#quote-carousel"
                data-slide-to="0"
                className="active"
              >
                <img
                  className="img-responsive "
                  src="https://wallpaperaccess.com/full/1092587.jpg"
                  alt=""
                />
              </li>
              <li data-target="#quote-carousel" data-slide-to="1">
                <img
                  className="img-responsive"
                  src="https://images.unsplash.com/photo-1557682250-33bd709cbe85"
                  alt=""
                />
              </li>
              <li data-target="#quote-carousel" data-slide-to="2">
                <img
                  className="img-responsive"
                  src="https://wallpaperaccess.com/full/1092587.jpg"
                  alt=""
                />
              </li>
            </ol>
          </div>
        </div>
        <a
          data-slide="next"
          href="#quote-carousel"
          className="carousel-control right"
        >
          ›
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
