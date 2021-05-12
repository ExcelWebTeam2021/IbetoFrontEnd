import React from "react";
import "../stylesheet/Contact.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Contact = () => {
   return (
      <div className='container ' id='Contact'>
         <h1 class='heading'>Contact Us</h1>
         <div class='profile-container row '>
            <div class='profile-card col-md-4 col-sm-12'>
               <img src='https://i.imgur.com/bZBG9PE.jpg' alt='image1' class='profile-icon' />
               <div class='profile-name'>Kelly Seikma</div>
               <div class='profile-position'>Web Designer</div>
            </div>
            <div class='profile-card col-md-4 col-sm-12'>
               <img src='https://i.imgur.com/S4GNFIW.jpg' alt='image2' class='profile-icon' />
               <div class='profile-name'>Mabel Maxwell</div>
               <div class='profile-position'>Web Developer</div>
            </div>
            <div class='profile-card col-md-4 col-sm-12'>
               <img src='https://i.imgur.com/cMSVQZC.jpg' alt='image3' class='profile-icon' />
               <div class='profile-name'>Danny Liswell</div>
               <div class='profile-position'>DevOps</div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
