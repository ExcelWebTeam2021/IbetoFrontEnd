import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const About = () => {
   return (
      <div class='container-fluid about-bk' id='About'>
         <div className='row about'>
            <div className='col-md-4 col-xs-12'>
               <img src='https://ibeto.excelmec.org/assets/nikhil-01.png' alt='ibeto-logo' class='img-fluid' />
            </div>
            <div className='col-md-7 col-xs-12 '>
               <h1 class='heading mb-4 '>About</h1>
               <div className='content'>
                  <p>
                     Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt. Model Engineering College, Kochi as part of their annual national-level technical symposium, Excel 2020. It is a national level pursuit for socially relevant and technologically
                     innovative ideas with the potential to trigger the next big social change. IBeTo gives the right platform and mentorship to launch the most technically innovative and revolutionary ideas and to develop them into a final product.
                  </p>{" "}
                  <p>
                     {" "}
                     IBeTo 2020, in collaboration with HAC, IEEE MEC SB and GirlScript Kochi will not only bring better ideas for developing a project but will also help in understanding the need for innovation in the real world. The vision of IBeTo 2020 is to make groundbreaking developments and
                     implement it on a large scale in an area where technology is yet to make strides.
                  </p>
               </div>
               <div className=''>
                  <button class='btn mt-4 btn-dark button-shadow'>
                     <Link to='/dashboard' className='dashboard-btn'>
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
