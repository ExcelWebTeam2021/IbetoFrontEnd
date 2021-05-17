import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Footer = () => {
   return (
      <div className='footer container-fluid darker-bk {'>
         <div className='row footer-row'>
            <div className='col-4 '>
               <a href='http://www.mec.ac.in/'>
                  <img src='https://ibeto.excelmec.org/assets/Copy%20of%20mec_logo.png' alt='mec logo' width='140' />
               </a>
            </div>
            <div className='col-4'>
               <ul class='social-icons'>
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
            <div className='col-4'>
               <a href='http://www.mec.ac.in/'>
                  <img src='https://ibeto.excelmec.org/assets/logo.png' alt='excel logo' width='140' />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Footer;
