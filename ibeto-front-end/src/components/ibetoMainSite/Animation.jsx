import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

function Animation() {
   const animationContainer1 = useRef(null);
   const animationContainer2 = useRef(null);
   useEffect(() => {
      const anime1 = lottie.loadAnimation({
         container: animationContainer1.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/anime1.json"),
      });

      const anime2 = lottie.loadAnimation({
         container: animationContainer2.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/anime2.json"),
      });
      return () => {
         anime1.destroy();
         anime2.destroy();
      }; // optional clean up for unmounting
   }, []);

   return (
      <div className=''>
         <h5>Animations taken from lottie website</h5>
         <div className='animation-container' ref={animationContainer1} />
         <h5>Animations that we made in after effects</h5>
         <div className='animation-container' ref={animationContainer2} />
      </div>
   );
}

export default Animation;
