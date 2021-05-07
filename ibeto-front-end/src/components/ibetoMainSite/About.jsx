import React from "react";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const About = () => {
   return (
      <div class='container-fluid lighter-bk'>
         <div className='row about'>
            <div className='col-md-6 col-md-12 '>
               {/* <img src="../images/event-img1.jpg" class="about-img" /> */}
               <div className='about-img'>IMG</div>
            </div>
            <div className='col-md-6 col-md-12 '>
               <h1 class='about-header'>About</h1>
               <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae provident commodi et vero voluptates reprehenderit repellat similique in maxime quibusdam.</p>
               <div className='about-button'>
                  <button class='btn btn-dark'>Register Now</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
