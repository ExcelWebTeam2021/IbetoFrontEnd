import React, { useEffect } from "react";
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
            <a
              className="social-icon social-icon--phone"
              href="tel:+919895529739"
              style={{ color: "white" }}
            >
              <i className="fa fa-phone"></i>
              <div className="tooltip">9895529739</div>
            </a>
            <a
              className="social-icon social-icon--envelope"
              style={{ color: "white" }}
              href="mailto:adilrafeek.mec@gmail.com"
            >
              <i className="fa fa-envelope"></i>
              <div className="tooltip">adilrafeek.mec@gmail.com</div>
            </a>

            <a
              className="social-icon social-icon--linkedin"
              href="https://www.linkedin.com/in/adil-rafeek"
              style={{ color: "white" }}
            >
              <i className="fa fa-linkedin"></i>
              <div className="tooltip"> View profile </div>
            </a>
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
            <a
              className="social-icon social-icon--phone"
              style={{ color: "white" }}
              href="tel:+9633288284"
            >
              <i className="fa fa-phone"></i>
              <div className="tooltip">9633288284</div>
            </a>
            <a
              className="social-icon social-icon--envelope"
              style={{ color: "white" }}
              href="mailto:ameenazeez.mec@gmail.com"
            >
              <i className="fa fa-envelope"></i>
              <div className="tooltip">ameenazeez.mec@gmail.com</div>
            </a>

            <a
              className="social-icon social-icon--linkedin"
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/ameen-azeez"
            >
              <i className="fa fa-linkedin"></i>
              <div className="tooltip">View profile</div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="500"
          className="profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12"
        >
          <img
            src={Denil}
            alt="Denil Geo Daise"
            className="profile-icon"
          />
          <div className="profile-name">Denil Geo Daise</div>
          <div className="profile-position">Joint Secretary Excel 2021</div>
          <div className="social-icons">
            <a
              className="social-icon social-icon--phone"
              href="tel:+917902394958"
              style={{ color: "white" }}
            >
              <i className="fa fa-phone"></i>
              <div className="tooltip">+917902394958</div>
            </a>
            <a
              className="social-icon social-icon--envelope"
              style={{ color: "white" }}
              href="mailto:denilgeodaise.mec@gmail.com"
            >
              <i className="fa fa-envelope"></i>
              <div className="tooltip">denilgeodaise.mec@gmail.com</div>
            </a>

            <a
              className="social-icon social-icon--linkedin"
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/denil-daise-3215521a7"
            >
              <i className="fa fa-linkedin"></i>
              <div className="tooltip">View profile</div>
            </a>
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
            <a
              className="social-icon social-icon--phone"
              style={{ color: "white" }}
              href="tel:+917034156677"
            >
              <i className="fa fa-phone"></i>
              <div className="tooltip">+917034156677</div>
            </a>
            <a
              className="social-icon social-icon--envelope"
              style={{ color: "white" }}
              href="mailto:prithvichandra.mec@gmail.com"
            >
              <i className="fa fa-envelope"></i>
              <div className="tooltip">prithvichandra.mec@gmail.com</div>
            </a>

            <a
              className="social-icon social-icon--linkedin"
              href="https://www.linkedin.com/in/prithvi-chandra-119bb4184"
              style={{ color: "white" }}
            >
              <i className="fa fa-linkedin"></i>
              <div className="tooltip">View profile</div>
            </a>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;
