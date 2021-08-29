import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import ideate from "../images/ideate.svg";
import create from "../images/create.svg";
import showcase from "../images/showcase.svg";

const EventFormat = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="container-fluid event-format-row" id="EventFormat">
      <h2 className="container heading text-center event-format-heading">
        Event<span> Format</span>
      </h2>

      <div className="row event-format">
        <div data-aos="fade-in" className="col-md-3 col-sm-8 phase ">
          <img
            className="event-format-img img-fluid"
            src={ideate}
            width="200"
            alt="ideate"
          />
          <div className="phase-title phase-number">Phase 1</div>
          <h3 className="event-title phase-title">Ideate</h3>
          <p className="content event-format-content">
            The participating teams will be shortlisted in a sequence of two
            rounds based on the following criteria{" "}
          </p>
          <ul>
            <li className="content">Round 1: Idea Submission</li>
            <li className="content">
              Round 2: Submission of detailed abstract of the project
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="250"
          className="col-md-3 col-sm-8 phase"
        >
          <img
            className="event-format-img img-fluid"
            src={create}
            width="250"
            alt="create"
          />
          <div className="phase-title phase-number">Phase 2</div>
          <h3 className="event-title phase-title">Create</h3>
          <p className="content event-format-content">
            The top 25 teams selected from the Ideate phase would build their
            project during this phase and will be continuously evaluated through
            project reports. A panel of experts will be available to seek
            assistance from.
          </p>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="col-md-3 col-sm-8 phase"
        >
          <img
            className="event-format-img img-fluid"
            src={showcase}
            width="250"
            alt="showcase"
          />
          <div className="phase-title phase-number">Phase 3</div>
          <h3 className="event-title phase-title">Showcase</h3>
          <p className="content event-format-content">
            The teams have to submit a video presentation of the project along
            with a demonstration of their working prototype in front of the
            judges on Day 0 of Excel 2021, which will be the final judgement of
            the event.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventFormat;
