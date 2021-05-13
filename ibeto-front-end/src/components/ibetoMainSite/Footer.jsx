import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Footer = () => {
   return (
      <div className='footer container-fluid'>
         <div className='row footer-row'>
            <div className='col-4 '>
               <img src='https://ibeto.excelmec.org/assets/Copy%20of%20mec_logo.png' alt='' width='140' />
            </div>
            <div className='col-4'>
               <ul class='social-icons'>
                  <li>
                     <a href='' class='social-icon'>
                        {" "}
                        <i class='fa fa-facebook'></i>
                     </a>
                  </li>
                  <li>
                     <a href='' class='social-icon'>
                        {" "}
                        <i class='fa fa-instagram'></i>
                     </a>
                  </li>
                  <li>
                     <a href='' class='social-icon'>
                        {" "}
                        <i class='fa fa-linkedin'></i>
                     </a>
                  </li>
               </ul>
            </div>
            <div className='col-4'>
               <img src='https://ibeto.excelmec.org/assets/logo.png' alt='' width='140' />
            </div>
         </div>
      </div>
   );
};

export default Footer;
