import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import "../stylesheet/LandingPage.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import audio from "./audio.mp3";

const LandingPage = () => {
   const LandingPage = useRef(null);
   const audioRef = useRef(new Audio(audio));
   var [toggle, setToggle] = useState(true);

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

   function handlePause() {
      setToggle(!toggle);
      console.log("Button is toggled", toggle);
   }

   return (
      <main>
         <div className='animation-container' ref={LandingPage} />
         <audio ref={audioRef} src={audio} muted={!toggle} autoplay='' />
         <button onClick={handlePause}> {toggle ? <img src='https://image.flaticon.com/icons/png/128/727/727269.png' alt='unmute' width='20' /> : <img src='https://image.flaticon.com/icons/png/128/56/56882.png' alt='mute' width='20' />}</button>
      </main>
   );
};

export default LandingPage;
