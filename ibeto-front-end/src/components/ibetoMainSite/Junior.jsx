import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Junior.css";
var FA = require("react-fontawesome");

const Junior = () => {
   const FooterAnimation = useRef(null);

   useEffect(() => {
      const anime1 = lottie.loadAnimation({
         container: FooterAnimation.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/IbetoFooterAnimation.json"),
      });
      return () => {
         anime1.destroy();
      }; // clean up for unmounting
   }, []);

   return (
      <div className=' junior darker-bk' id='IbetoJunior'>
         <div className='custom-shape-divider-top-1622696408'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
               <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' class='shape-fill'></path>
            </svg>
         </div>
         <Link to='/junior'>
            <div className='container Jcard' ref={FooterAnimation}>
               <div className='junior-hover-section'>
                  <h2 className='Jheading'>IBeTo Junior</h2>

                  <div className='Jpic'></div>
                  <FA className='Jarrow' name='angle-right' />
                  <button className='Jbutton'></button>
               </div>
            </div>
         </Link>
         {/* <div className="custom-shape-divider-bottom-1622204843">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
         </svg>
         </div> */}
      </div>
   );
};

export default Junior;
