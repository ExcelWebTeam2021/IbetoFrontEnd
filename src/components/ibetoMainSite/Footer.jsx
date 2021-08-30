import React from "react";
import "../stylesheet/Footer.css";
import logo from "../images/logo.svg";
import mec_logo from "../images/mec_logo.png";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="footer-row">
        <div className="footerMec">
          <a target="_blank" rel="noreferrer" href="http://www.mec.ac.in/">
            <img src={mec_logo} alt="mec logo" />
          </a>
        </div>

        <div className="footerIcon">
          <ul className="social-icons">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/excelmec/"
                className="social-icon"
              >
                {" "}
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/excelmec"
                className="social-icon"
              >
                {" "}
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/company/excelmec"
                className="social-icon"
              >
                {" "}
                <i className="fa fa-linkedin fa-linkedin-footer"></i>
              </a>
            </li>
          </ul>
          <p className="footer-text">Made with ♥ Excel 2021</p>
        </div>

        <div className="footerExcel">
          <a target="_blank" rel="noreferrer" href="http://excelmec.org/">
            <img src={logo} alt="excel logo" width="80" height="80" />
          </a>
        </div>
      </div>

      <div className="footerIcon2">
        <ul className="social-icons">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/excelmec/"
              className="social-icon"
            >
              {" "}
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/excelmec"
              className="social-icon"
            >
              {" "}
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/excelmec"
              className="social-icon"
            >
              {" "}
              <i className="fa fa-linkedin fa-linkedin-footer"></i>
            </a>
          </li>
        </ul>
        <p className="footer-text">Made with ♥ Excel 2021</p>
      </div>
    </div>
  );
};

export default Footer;
