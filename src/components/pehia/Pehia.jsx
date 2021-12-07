import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Pehiaimg from "../images/Pehia.jpg";
import fantacode from "../images/fantacode.png";
import meetresume from "../images/meetresume.jpg";

import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import Navbar2 from "./Navbar2";
import Footer from "./Footer";

const Pehia = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    });
    AOS.init({ duration: 1100 });
  }, []);

  return (
    <>
      <Navbar2 />

      {/* About */}
      <div className="container-fluid about-bk" id="About">
        <div className="row about pehia-about">
          <div data-aos="fade-right" className="col-md-4 col-xs-12">
            <img src={Pehiaimg} alt="ibeto-logo" className=" img-fluid" />
          </div>
          <div data-aos="fade-left" className="col-md-7 col-xs-12 ">
            <h2 className="heading mb-4 pehia-heading">
              Peh<span>ia</span>
            </h2>
            <div className="content about-content">
              <p>
                PEHIA, a non-profit organisation from Kerala, works on building
                a culture of inclusivity in the field of STEM. Founded in 2018,
                the organisation is currently headed by the directors Sreepriya
                Radhakrishnan, Diya Liza Varghese, and Anusree S. It has
                conducted several events aligning with its mission of building
                inclusivity, by bridging the existing skill gap. Some of these
                successful events include K-For-Code, Peer-To-Peer Learning,
                Labyrinth & Z++.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Fellowship */}

      <div className="container-fluid about-bk" id="Fellowship">
        <div className="row about fellowship">
          <div data-aos="fade-left" className="col-md-12 col-xs-12 ">
            <h2 className="heading mb-4 text-center pehia-heading">
              Fellow<span>ships</span>
            </h2>
            <div className="content about-content">
              <p>
                Pehia will award highly coveted fellowships to the
                top-performing teams of IBeTo, from the list of participants who
                have applied for the fellowship. Please note that the
                top-performing teams are decided according to the discretion of
                Pehia and may not be identical to the results of IBeTo.
                <br /> The fellowship winners will receive the following
                benefits.
              </p>
              <p>
                <ol>
                  <li>
                    <b> Mentoring by MeetResume</b>
                  </li>
                  Meet Resume is a platform to connect with mentors in the field
                  of tech with ease. As part of the fellowship, participants
                  will be provided with the following opportunities,
                  <ul>
                    <li>
                      Resume Review, where you can get your resume reviewed by a
                      mentor.
                    </li>
                    <li>
                      {" "}
                      Opportunity Hack, where you can get to know how a mentor
                      hacked a specific opportunity that you are aspiring for
                    </li>
                  </ul>
                  <br />
                  <li>
                    {" "}
                    <b>One-on-one Career Mentoring</b>
                  </li>
                  Participants can interact with successful professionals from
                  any career field they wish to pursue & Pehia will arrange for
                  the same.
                  <br /> <br />
                  <li>
                    {" "}
                    <b>Internship Opportunities</b>
                  </li>
                  <p>The various companies offering internships are:-</p>
                  <ul>
                    <li>
                      FantaCode, a Calicut based start-up, is one of the
                      companies currently confirmed to provide internships to
                      the winners. The internship roles they offer include{" "}
                      <ul>
                        <li>Frontend Developer </li>
                        <li> Backend Developer</li>
                      </ul>{" "}
                      If a participant wishes to pursue internships in a more
                      creative role, the company is open to provide that as
                      well.
                    </li>
                    <li>Innovation Incubators</li>
                    <li>
                      AlphaQ - For AI/Data Science roles.
                      <ul>
                        <li>
                          The selection process will include an interview.{" "}
                        </li>
                      </ul>
                    </li>
                    <li>
                      Agrima - For AI/Data Science roles.
                      <ul>
                        <li>
                          The selection process will include an interview.{" "}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </ol>
              </p>
              <p>Several other companies will be soon added to the list too!</p>
            </div>
          </div>
        </div>
      </div>
      {/* Partners */}
      <div className="container" id="Sponsors">
        <h2 align="center" className="heading pehia-heading">
          In associ<span>ation with</span>
        </h2>
        <div className="text-center row no-gutters clients-wrap clearfix wow">
          <div className="col-md-1"></div>
          <div className="col-lg-5 col-md-5 col-sm-6 col-xs-6">
            <div data-aos="zoom-out" className="client-logo">
              {" "}
              <a href="https://www.fantacode.com/">
                <img src={fantacode} className="img-fluid" alt="fantacode" />
              </a>{" "}
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <div data-aos="zoom-out" className="client-logo">
              {" "}
              <a href="https://meetresume.com/">
                {" "}
                <img src={meetresume} className="img-fluid" alt="meetresume" />
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pehia;
