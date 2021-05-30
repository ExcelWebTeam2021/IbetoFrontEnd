import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const About = () => {
   return (
      <div class='container-fluid about-bk' id='Junior-About'>
         <div className='row about'>
            <div className='col-md-4 col-xs-12'>
               <img src='https://ibeto.excelmec.org/assets/nikhil-01.png' alt='ibeto-logo' class='img-fluid' />
            </div>
            <div className='col-md-7 col-xs-12 '>
               <h2 class='heading mb-4 '>
                  Abo<span>ut</span>
               </h2>
               <div className='content'>
                  <p>Ibeto junoir Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt. Model Engineering College, Kochi as part of their annual national-level technical symposium, Excel 2020.</p>{" "}
               </div>
               <div className=''>
                  <button class='btn mt-4 about-btn button-shadow'>
                     <Link to='/dashboard' className='about-btn-text'>
                        Register now{" "}
                     </Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
