import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/Contact.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Contact = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid ' id='Contact'>
         <h2 align='center' className='heading'>
            Contact <span>us</span>
         </h2>

         <div className='profile-container row '>
            <div data-aos='fade-in' className='profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12'>
               <img src='https://i.imgur.com/bZBG9PE.jpg' alt='image1' className='profile-icon' />
               <div className='profile-name'>Kelly Seikma</div>
               <div className='profile-position'>Web Designer</div>
            </div>
            <div data-aos='fade-in' data-aos-delay='250' className='profile-card mb-4 only-start col-lg-3 col-md-6 col-sm-12'>
               <img src='https://i.imgur.com/S4GNFIW.jpg' alt='image2' className='profile-icon' />
               <div className='profile-name'>Mabel Max</div>
               <div className='profile-position'>Web Developer</div>
            </div>
            <div data-aos='fade-in' data-aos-delay='500' className='profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12'>
               <img src='https://i.imgur.com/cMSVQZC.jpg' alt='image3' className='profile-icon' />
               <div className='profile-name'>Danny Liswell</div>
               <div className='profile-position'>DevOps</div>
            </div>
            <div data-aos='fade-in' data-aos-delay='750' className='profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12'>
               <img src='https://i.imgur.com/cMSVQZC.jpg' alt='image3' className='profile-icon' />
               <div className='profile-name'>Danny Liswell</div>
               <div className='profile-position'>DevOps</div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
