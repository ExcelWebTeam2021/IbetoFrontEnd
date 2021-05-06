import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import ReactPlayer from "react-player";

import "../stylesheet/LandingPage.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import audio from "./audio.mp3";

const LandingPage = () => {
   const LandingPage = useRef(null);

   var [toggle, setToggle] = useState(true);

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

   function handlePause() {
      setToggle(!toggle);
      console.log("Button is toggled", toggle);
   }

   return (
      <main>
         <div className='animation-container' ref={LandingPage} />
         <ReactPlayer url={audio} width='400px' height='50px' playing muted={!toggle} controls={false} />

         <button onClick={handlePause}> {toggle ? <img src='https://image.flaticon.com/icons/png/128/727/727269.png' alt='unmute' width='20' /> : <img src='https://image.flaticon.com/icons/png/128/56/56882.png' alt='mute' width='20' />}</button>
      </main>
   );
};

export default LandingPage;
