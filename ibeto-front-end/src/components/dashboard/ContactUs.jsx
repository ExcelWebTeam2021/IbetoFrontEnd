import React from "react";
import ContactUsIcon from "../images/ContactUsIcon.svg";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const ContactUs = () => {
  return (
    <div className="white-bk contactUs-row">
      <a
        target="_blank"
        className="sendmailbtn"
        href="https://mail.google.com/mail/u/0/?fs=1&to=query.ibeto2021@gmail.com&su=%3CInsert%20your%20team%20name%3E%20-%20Query%20:%20%3CTitle/Subject%3E&body=Our%20%20Team%20%3Cyour%20Team%20name%3E%20(%3Cyour%20Team%20Id%3E)%20had%20a%20doubt%20regarding%20........&tf=cm"
        rel="noreferrer"
        target="_blank"
      >
        <div className="row ">
          <div className="col-8 contactUs-text">
            <p>Any queries ?</p>
            <p style={{ color: "#fff" }}>Contact us</p>
          </div>
          <div className="col-4">
            <img src={ContactUsIcon} className="img-fluid" alt="" width="60" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default ContactUs;
