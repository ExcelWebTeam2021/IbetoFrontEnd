import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../stylesheet/Contact.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Contact = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 })
   }, [])

   return (
      <div className='container ' id='Contact'>
         <h2 align="center" class='heading'>Contact <span>us</span></h2>
         
         <div class='profile-container row '>
            <div data-aos="fade-in"class='profile-card only-start col-md-4 col-sm-12'>
               <img src='https://i.imgur.com/bZBG9PE.jpg' alt='image1' class='profile-icon' />
               <div class='profile-name'>Kelly Seikma</div>
               <div class='profile-position'>Web Designer</div>
            </div>
            <div data-aos="fade-in" data-aos-delay="300" class='profile-card only-start  col-md-4 col-sm-12'>
               <img src='https://i.imgur.com/S4GNFIW.jpg' alt='image2' class='profile-icon' />
               <div class='profile-name'>Mabel Maxwell</div>
               <div class='profile-position'>Web Developer</div>
            </div>
            <div data-aos="fade-in" data-aos-delay="600" class='profile-card only-start col-md-4 col-sm-12'>
               <img src='https://i.imgur.com/cMSVQZC.jpg' alt='image3' class='profile-icon' />
               <div class='profile-name'>Danny Liswell</div>
               <div class='profile-position'>DevOps</div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
