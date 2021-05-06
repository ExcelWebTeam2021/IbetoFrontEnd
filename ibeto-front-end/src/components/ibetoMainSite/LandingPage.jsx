import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import "../stylesheet/LandingPage.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import audio from "./audio.mp3";

const LandingPage = () => {
   const LandingPage = useRef(null);
   const audioRef = useRef(new Audio(audio));

   useEffect(() => {
      audioRef.current.play();
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
         <div className='animation-container' ref={LandingPage} />
         <audio ref={audioRef} src={audio} muted={false} autoplay controls />
      </main>
   );
};

export default LandingPage;
