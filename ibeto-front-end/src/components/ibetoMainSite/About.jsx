import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const About = () => {
   return (
      <div class='container-fluid lighter-bk' id='About'>
         <div className='row about'>
            <div className='col-md-4 col-xs-12 '>
               <img src='https://ibeto.excelmec.org/assets/nikhil-01.png' alt='ibeto-logo' class='img-fluid' />
            </div>
            <div className='col-md-6 col-xs-12 '>
               <h1 class='heading'>About</h1>
               <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae provident commodi et vero voluptates reprehenderit repellat similique in maxime quibusdam.</p>
               <div className=''>
                  <button class='btn btn-dark button-shadow'>
                     <Link to='/dashboard'>Register now </Link>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
