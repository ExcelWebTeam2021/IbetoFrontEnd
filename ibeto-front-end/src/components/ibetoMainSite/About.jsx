import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const About = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid about-bk' id='About'>
         <div className='row about'>
            <div data-aos='fade-right' className='col-md-4 col-xs-12'>
               <img src='https://ibeto.excelmec.org/assets/nikhil-01.png' alt='ibeto-logo' className='img-fluid' />
            </div>
            <div data-aos='fade-left' className='col-md-7 col-xs-12 '>
               <h2 className='heading mb-4 '>
                  Abo<span>ut</span>
               </h2>
               <div className='content'>
                  <p>Innovations for a Better Tomorrow (IBeTo) is a technical innovations competition hosted by Govt. Model Engineering College, Kochi as part of their annual national-level technical symposium, Excel 2020.</p>{" "}
                  <p>
                     {" "}
                     The vision of IBeTo 2020 is to make groundbreaking developments and implement it on a large scale in an area where technology is yet to make strides. IBeTo 2020, in collaboration with HAC, IEEE MEC SB and GirlScript Kochi will not only bring better ideas for developing a project
                     but will also help in understanding the need for innovation in the real world.
                  </p>
               </div>
               <div className=''>
                  <button class='btn mt-4 blob-btn button-shadow'>
                     <Link to='/dashboard' className='blob-btn-text'>
                        Dashboard
                     </Link>
                     <span class='blob-btn__inner'>
                        <span class='blob-btn__blobs'>
                           <span class='blob-btn__blob'></span>
                           <span class='blob-btn__blob'></span>
                           <span class='blob-btn__blob'></span>
                           <span class='blob-btn__blob'></span>
                        </span>
                     </span>
                  </button>
                  <br />
                  <svg xmlns='http://www.w3.org/2000/svg' version='1.1'>
                     <defs>
                        <filter id='goo'>
                           <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='10'></feGaussianBlur>
                           <feColorMatrix in='blur' mode='matrix' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7' result='goo'></feColorMatrix>
                           <feBlend in2='goo' in='SourceGraphic' result='mix'></feBlend>
                        </filter>
                     </defs>
                  </svg>{" "}
               </div>
            </div>
         </div>
      </div>
   );
};

export default About;
