import React, { useEffect } from "react";
import ReactTooltip from "react-tooltip";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/Contact.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import Adil from "../images/contactus/Adil.jpg";
import Ameen from "../images/contactus/Ameen.jpg";
import Denil from "../images/contactus/Denil.jpg";
import Prithvi from "../images/contactus/Prithvi.jpg";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);

  return (
    <div className="container-fluid " id="Contact">
      <h2 align="center" className="heading">
        Contact <span>us</span>
      </h2>

      <div className="profile-container row ">
        <div
          data-aos="fade-in"
          className="profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12"
        >
          <img src={Adil} alt="Adil Rafeek" className="profile-icon" />
          <div className="profile-name">Adil Rafeek</div>
          <div className="profile-position">Chairman Excel 2021</div>
          <div className="social-icons">
            <div data-tip data-for="adilphone">
              <a
                className="social-icon social-icon--phone"
                href="tel:+919895529739"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-phone"></i>
              </a>
            </div>

            <ReactTooltip id="adilphone">
              <span>9895529739</span>
            </ReactTooltip>

            <div data-tip data-for="adilmail">
              <a
                className="social-icon social-icon--envelope"
                href="mailto:adilrafeek.mec@gmail.com"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-envelope"></i>
              </a>
            </div>

            <ReactTooltip id="adilmail">
              <span>adilrafeek.mec@gmail.com</span>
            </ReactTooltip>

            <div data-tip data-for="adilln">
              <a
                className="social-icon social-icon--linkedin"
                href="https://www.linkedin.com/in/adil-rafeek"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </div>

            <ReactTooltip id="adilln">
              <span>View Linkedin Profile</span>
            </ReactTooltip>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="250"
          className="profile-card mb-4 only-start col-lg-3 col-md-6 col-sm-12"
        >
          <img src={Ameen} alt="Ameen Azeez" className="profile-icon" />
          <div className="profile-name">Ameen Azeez</div>
          <div className="profile-position">General Secretary Excel 2021</div>

          <div className="social-icons">
            <div data-tip data-for="ameenphone">
              <a
                className="social-icon social-icon--phone"
                href="tel:+9633288284"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-phone"></i>
              </a>
            </div>

            <ReactTooltip id="ameenphone">
              <span>9633288284</span>
            </ReactTooltip>

            <div data-tip data-for="ameenmail">
              <a
                className="social-icon social-icon--envelope"
                href="mailto:ameenazeez.mec@gmail.com"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-envelope"></i>
              </a>
            </div>

            <ReactTooltip id="ameenmail">
              <span>ameenazeez.mec@gmail.com</span>
            </ReactTooltip>
            <div data-tip data-for="ameenln">
              <a
                className="social-icon social-icon--linkedin"
                href="https://www.linkedin.com/in/ameen-azeez"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </div>

            <ReactTooltip id="ameenln">
              <span>View Linkedin Profile</span>
            </ReactTooltip>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12"
        >
          <img src={Denil} alt="Denil Geo Daise" className="profile-icon" />
          <div className="profile-name">Denil Geo Daise</div>
          <div className="profile-position">Joint Secretary Excel 2021</div>
          <div className="social-icons">
            <div data-tip data-for="denilphone">
              <a
                className="social-icon social-icon--phone"
                href="tel:+917902394958"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-phone"></i>
              </a>
            </div>

            <ReactTooltip id="denilphone">
              <span>+917902394958</span>
            </ReactTooltip>

            <div data-tip data-for="denilmail">
              <a
                className="social-icon social-icon--envelope"
                href="mailto:denilgeodaise.mec@gmail.com"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-envelope"></i>
              </a>
            </div>

            <ReactTooltip id="denilmail">
              <span>denilgeodaise.mec@gmail.com</span>
            </ReactTooltip>
            <div data-tip data-for="denilln">
              <a
                className="social-icon social-icon--linkedin"
                href="https://www.linkedin.com/in/denil-daise-3215521a7"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </div>

            <ReactTooltip id="denilln">
              <span>View Linkedin Profile</span>
            </ReactTooltip>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="750"
          className="profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12"
        >
          <img src={Prithvi} alt="Prithvi Chandra" className="profile-icon" />
          <div className="profile-name">Prithvi Chandra </div>
          <div className="profile-position">Social Initiatives Manager</div>
          <div className="social-icons">
            <div data-tip data-for="prithviphone">
              <a
                className="social-icon social-icon--phone"
                href="tel:+917034156677"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-phone"></i>
              </a>
            </div>

            <ReactTooltip id="prithviphone">
              <span>+917034156677</span>
            </ReactTooltip>

            <div data-tip data-for="prithvimail">
              <a
                className="social-icon social-icon--envelope"
                href="mailto:prithvichandra.mec@gmail.com"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-envelope"></i>
              </a>
            </div>

            <ReactTooltip id="prithvimail">
              <span>prithvichandra.mec@gmail.com</span>
            </ReactTooltip>
            <div data-tip data-for="prithvin">
              <a
                className="social-icon social-icon--linkedin"
                href="https://www.linkedin.com/in/prithvi-chandra-119bb4184"
                style={{ color: "white" }}
              >
                {" "}
                <i className="fa fa-linkedin"></i>
              </a>
            </div>

            <ReactTooltip id="prithvi">
              <span>View Linkedin Profile</span>
            </ReactTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
