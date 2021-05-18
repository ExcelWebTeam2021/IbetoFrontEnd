import React from "react";
import "../stylesheet/Footer.css";

const Footer = () => {
   return (
      <div className='container-fluid footer'>
         <div className='footer-row'>
            <div className='footerMec'>
               <a href='http://www.mec.ac.in/'>
                  <img src='https://ibeto.excelmec.org/assets/Copy%20of%20mec_logo.png' alt='mec logo' />
               </a>
            </div>

            <div className='footerIcon'>
               <ul className='social-icons'>
                  <li>
                     <a href='https://www.facebook.com/excelmec/' class='social-icon'>
                        {" "}
                        <i class='fa fa-facebook'></i>
                     </a>
                  </li>
                  <li>
                     <a href='https://www.instagram.com/excelmec' class='social-icon'>
                        {" "}
                        <i class='fa fa-instagram'></i>
                     </a>
                  </li>
                  <li>
                     <a href='https://www.linkedin.com/company/excelmec' class='social-icon'>
                        {" "}
                        <i class='fa fa-linkedin'></i>
                     </a>
                  </li>
               </ul>
            </div>

            <div className='footerExcel'>
               <a href='http://www.mec.ac.in/'>
                  <img src='https://ibeto.excelmec.org/assets/logo.png' alt='excel logo' />
               </a>
            </div>
         </div>

         <div className='footerIcon2'>
            <ul className='social-icons'>
               <li>
                  <a href='https://www.facebook.com/excelmec/' class='social-icon'>
                     {" "}
                     <i class='fa fa-facebook'></i>
                  </a>
               </li>
               <li>
                  <a href='https://www.instagram.com/excelmec' class='social-icon'>
                     {" "}
                     <i class='fa fa-instagram'></i>
                  </a>
               </li>
               <li>
                  <a href='https://www.linkedin.com/company/excelmec' class='social-icon'>
                     {" "}
                     <i class='fa fa-linkedin'></i>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Footer;
