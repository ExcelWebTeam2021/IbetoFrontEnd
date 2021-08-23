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
          <img src={Adil} alt="image1" className="profile-icon" />
          <div className="profile-name">Adil Rafeek</div>
          <div className="profile-position">Chairman Excel 2021</div>
          <div class="social-icons">
            <a
              class="social-icon social-icon--phone"
              style={{ color: "white" }}
            >
              <i class="fa fa-phone"></i>
              <div class="tooltip">9895529739</div>
            </a>
            <a
              class="social-icon social-icon--envelope"
              style={{ color: "white" }}
            >
              <i class="fa fa-envelope"></i>
              <div class="tooltip">adilrafeek.mec@gmail.com</div>
            </a>

            <a
              class="social-icon social-icon--linkedin"
              href="https://www.linkedin.com/in/adil-rafeek"
              style={{ color: "white" }}
            >
              <i class="fa fa-linkedin"></i>
              <div class="tooltip"> View profile </div>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="250"
          className="profile-card mb-4 only-start col-lg-3 col-md-6 col-sm-12"
        >
          <img src={Ameen} alt="image2" className="profile-icon" />
          <div className="profile-name">Ameen Azeez</div>
          <div className="profile-position">General Secretary Excel 2021</div>

          <div class="social-icons">
            <a
              class="social-icon social-icon--phone"
              style={{ color: "white" }}
            >
              <i class="fa fa-phone"></i>
              <div class="tooltip">9633288284</div>
            </a>
            <a
              class="social-icon social-icon--envelope"
              style={{ color: "white" }}
            >
              <i class="fa fa-envelope"></i>
              <div class="tooltip">ameenazeez.mec@gmail.com</div>
            </a>

            <a
              class="social-icon social-icon--linkedin"
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/ameen-azeez"
            >
              <i class="fa fa-linkedin"></i>
              <div class="tooltip">View profile</div>
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
            alt="image3"
            className="profile-icon"
          />
          <div className="profile-name">Denil Geo Daise</div>
          <div className="profile-position">Joint Secretary Excel 2021</div>
          <div class="social-icons">
            <a
              class="social-icon social-icon--phone"
              style={{ color: "white" }}
            >
              <i class="fa fa-phone"></i>
              <div class="tooltip">+917902394958</div>
            </a>
            <a
              class="social-icon social-icon--envelope"
              style={{ color: "white" }}
            >
              <i class="fa fa-envelope"></i>
              <div class="tooltip">denilgeodaise.mec@gmail.com</div>
            </a>

            <a
              class="social-icon social-icon--linkedin"
              style={{ color: "white" }}
              href="https://www.linkedin.com/in/denil-daise-3215521a7"
            >
              <i class="fa fa-linkedin"></i>
              <div class="tooltip">View profile</div>
            </a>
          </div>
      
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="750"
          className="profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12"
        >
          <img src={Prithvi} alt="image3" className="profile-icon" />
          <div className="profile-name">Prithvi Chandra </div>
          <div className="profile-position">Social Initiatives Manager</div>
          <div class="social-icons">
            <a
              class="social-icon social-icon--phone"
              style={{ color: "white" }}
            >
              <i class="fa fa-phone"></i>
              <div class="tooltip">+917034156677</div>
            </a>
            <a
              class="social-icon social-icon--envelope"
              style={{ color: "white" }}
            >
              <i class="fa fa-envelope"></i>
              <div class="tooltip">prithvichandra.mec@gmail.com</div>
            </a>

            <a
              class="social-icon social-icon--linkedin"
              href="https://www.linkedin.com/in/prithvi-chandra-119bb4184"
              style={{ color: "white" }}
            >
              <i class="fa fa-linkedin"></i>
              <div class="tooltip">View profile</div>
            </a>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Contact;
