import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const About = () => {
   return (
      <div class='container-fluid lighter-bk' id='About'>
         <div className='row about'>
            <div className='col-md-4 col-xs-12 mr-5'>
               <img src='https://ibeto.excelmec.org/assets/nikhil-01.png' alt='ibeto-logo' class='img-fluid' />
            </div>
            <div className='col-md-6 col-xs-12 '>
               <h1 class='heading mb-4 '>About</h1>
               <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae provident commodi et vero voluptates reprehenderit repellat similique in maxime quibusdam.</p>
               <div className=''>
                  <button class='btn mt-4 btn-dark button-shadow'>
                     <Link to='/dashboard' className='dashboard-btn'>Register now </Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
