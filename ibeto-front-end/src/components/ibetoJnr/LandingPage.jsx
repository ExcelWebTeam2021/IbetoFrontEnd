import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import plan_landingpage from "../images/plan_landingpage.svg";

const LandingPage = () => {
   const LandingPage = useRef(null);

   useEffect(() => {
      const anime1 = lottie.loadAnimation({
         container: LandingPage.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/LandingPageAnimation.json"),
      });
      window.scrollTo(0, 0);
      return () => {
         anime1.destroy();
      }; // clean up for unmounting
   }, []);

   return (
      <main>
         {/* <div className='animation-container darker-bk' id='Home' ref={LandingPage}></div> */}
         <div className='animation-container darker-bk' id='Junior-Home'>
            <img src={plan_landingpage} alt='' />
            <div class='custom-shape-divider-bottom-1622696646'>
               <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                  <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' class='shape-fill'></path>
               </svg>
            </div>
         </div>
      </main>
   );
};

export default LandingPage;
