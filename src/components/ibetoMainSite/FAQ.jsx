import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/FAQ.css";

const FAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);

  return (
    <div
      data-aos="fade-in"
      className="container mt-4 mb-5"
      id="FAQ"
      data-aos-delay="250"
    >
      <h2 className="heading faq-heading">
        Frequently Ask<span>ed Questions</span>
      </h2>
      <div className="accordion content">
        <div className="accordion-item">
          <button
            id="accordion-button-1"
            data-toggle="collapse"
            href="#collapseExample1"
            aria-expanded="false"
            aria-controls="collapseExample1"
          >
            <span className="accordion-title">
              Will there be a registration fee to participate in IBeTo 2021?
            </span>
            <span className="icon plus-icon" aria-hidden="true"></span>
          </button>
          <div className="collapse" id="collapseExample1">
            <p>No. You can register for IBeTo 2021 free of cost.</p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-4"
            aria-expanded="false"
            data-toggle="collapse"
            href="#collapseExample4"
            aria-controls="collapseExample4"
          >
            <span className="accordion-title">
              What are the opportunities that pre-incubation provides?
            </span>
            <span className="icon plus-icon" aria-hidden="true"></span>
          </button>
          <div className="collapse" id="collapseExample4">
            <p>
              The selected team(s), shortlisted after the end of the IBeTo
              evaluation process, will be a part of "Forge", the preincubation
              program of IEDC MEC, and will be able to avail its services, which
              include mentorship from industry experts and other support to
              convert the product into an MVP(Minimum Viable Product). There
              will also be possible funding from the KSUM after the conversion
              of the product into an MVP.For more details please refer
              guidelines in the about section.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-6"
            aria-expanded="false"
            data-toggle="collapse"
            href="#collapseExample6"
            aria-controls="collapseExample6"
          >
            <span className="accordion-title">
              What are the opportunities offered by the Pehia Fellowship?
            </span>
            <span className="icon plus-icon" aria-hidden="true"></span>
          </button>
          <div className="collapse" id="collapseExample6">
            <p>
              The fellowship will include a corporate internship (minimum one
              month), resume review, networking opportunities, one-on-one
              mentoring from industry experts of your field of choice, all
              subject to the discretion of Pehia. For more details, please refer
              to the guidelines in the about section.
            </p>
          </div>
        </div>

        <div className="accordion-item">
          <button
            id="accordion-button-2"
            data-toggle="collapse"
            href="#collapseExample2"
            aria-expanded="false"
            aria-controls="collapseExample2"
          >
            <span className="accordion-title">
              What is the team size limit?
            </span>
            <span className="icon plus-icon" aria-hidden="true"></span>
          </button>
          <div className="collapse" id="collapseExample2">
            <p>A team can have 1-5 members.</p>
          </div>
        </div>
        <div className="accordion-item">
          <button
            id="accordion-button-3"
            aria-expanded="false"
            data-toggle="collapse"
            href="#collapseExample3"
            aria-controls="collapseExample3"
          >
            <span className="accordion-title">
              Should all team members be from the same college or institution?
            </span>
            <span className="icon plus-icon" aria-hidden="true"></span>
          </button>
          <div className="collapse" id="collapseExample3">
            <p>
              No. A team can have members from different colleges or
              institutions.
            </p>
          </div>
        </div>

        <div className="accordion-item">
          <button
            id="accordion-button-5"
            aria-expanded="false"
            data-toggle="collapse"
            href="#collapseExample5"
            aria-controls="collapseExample5"
          >
            <span className="accordion-title">
              Will I be eligible for KTU activity points if I take part in IBeTo
              2021?
            </span>
            <span className="icon plus-icon" aria-hidden="true"></span>
          </button>
          <div className="collapse" id="collapseExample5">
            <p>
              As per KTU regulations, socially beneficial projects can avail
              upto 50 activity points.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
