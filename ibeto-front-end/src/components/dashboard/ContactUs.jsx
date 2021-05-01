import React from "react";
import ContactUsIcon from "../images/ContactUsIcon.svg";

const ContactUs = () => {
   return (
      <div className='white-bk contactUs-row'>
         <a className='sendmailbtn ' href='https://mail.google.com/mail/u/0/?fs=1&to=ibeto@gmail.com&su=Doubt+regarding+ibeto&body=Our+team+%3CTeamName%3E+had+a+query+regarding+...&tf=cm' target='_blank' >
            <div className='row '>
               <div className='col-8 contactUs-text'>
                  <p>Any queries</p>
                  <p style={{ color: "#f8f9fa" }}>Contact us</p>
               </div>
               <div className='col-4'>
                  <img src={ContactUsIcon} alt='' width='60' />
               </div>
            </div>
         </a>
      </div>
   );
};

export default ContactUs;
