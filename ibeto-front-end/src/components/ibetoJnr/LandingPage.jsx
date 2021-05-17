import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

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

      return () => {
         anime1.destroy();
      }; // clean up for unmounting
   }, []);

   return (
      <main>
         <div className='animation-container darker-bk' id='Home' ref={LandingPage} />
      </main>
   );
};

export default LandingPage;
