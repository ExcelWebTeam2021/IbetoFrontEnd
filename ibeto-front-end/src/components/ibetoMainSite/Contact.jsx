import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/Contact.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import Adil from "../images/contactus/Adil.jpg";
import Ameen from "../images/contactus/Ameen.jpg";
import Prithvi from "../images/contactus/Prithvi.jpg";

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
               <img src={Adil} alt='image1' className='profile-icon' />
               <div className='profile-name'>Adil Rafeek</div>
               <div className='profile-position'>Chairman</div>
               <div class="social-icons">
  <a class="social-icon social-icon--codepen" style={{color:'white'}}>
    <i class="fa fa-codepen"></i>
    <div class="tooltip">Codepen3</div>
  </a>
  <a class="social-icon social-icon--twitter" style={{color:'white'}}>
    <i class="fa fa-twitter"></i>
    <div class="tooltip">annujolly17@gmail.com3</div>
  </a>

  <a class="social-icon social-icon--linkedin" style={{color:'white'}}>
    <i class="fa fa-linkedin"></i>
    <div class="tooltip">LinkedI3n</div>
  </a>
 
</div>
           
            </div>
            <div data-aos='fade-in' data-aos-delay='250' className='profile-card mb-4 only-start col-lg-3 col-md-6 col-sm-12'>
               <img src={Ameen} alt='image2' className='profile-icon' />
               <div className='profile-name'>Ameen</div>
               <div className='profile-position'>Web Developer</div>
               
               <div class="social-icons">
  <a class="social-icon social-icon--codepen" style={{color:'white'}}>
    <i class="fa fa-codepen"></i>
    <div class="tooltip">Codepen</div>
  </a>
  <a class="social-icon social-icon--twitter" style={{color:'white'}}>
    <i class="fa fa-twitter"></i>
    <div class="tooltip">annujolly17@gmail.com</div>
  </a>

  <a class="social-icon social-icon--linkedin" style={{color:'white'}}>
    <i class="fa fa-linkedin"></i>
    <div class="tooltip">LinkedIn</div>
  </a>
 
</div>
            </div>
            <div data-aos='fade-in' data-aos-delay='500' className='profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12'>
               <img src='https://i.imgur.com/cMSVQZC.jpg' alt='image3' className='profile-icon' />
               <div className='profile-name'>Danny Liswell</div>
               <div className='profile-position'>DevOps</div>
           
            </div>
            <div data-aos='fade-in' data-aos-delay='750' className='profile-card only-start mb-4 col-lg-3 col-md-6 col-sm-12'>
               <img src={Prithvi} alt='image3' className='profile-icon' />
               <div className='profile-name'>Prithvi </div>
               <div className='profile-position'>DevOps</div>
            </div>
         </div>
      </div>
   );
};

export default Contact;
