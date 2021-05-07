import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

import "../stylesheet/LandingPage.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import audio from "./audio.mp3";

const LandingPage = () => {
   const LandingPage = useRef(null);
   const audioRef = useRef(new Audio(audio));
   const [Control, setControl] = useState(false);
   const [Autoplay, setAutoplay] = useState(true);

   useEffect(() => {
      // var promise = audioRef.current.play();
      // if (promise !== undefined) {
      //    promise
      //       .then((_) => {
      //          // !
      //          console.log("Autoplay started ");
      //       })
      //       .catch((error) => {
      //          console.log("error in audio ");
      //          setControl(true);

      //          // Autoplay was prevented.
      //          // Show a "Play" button so that user can start playback.
      //       });
      // }
      const anime1 = lottie.loadAnimation({
         container: LandingPage.current,
         renderer: "svg",
         loop: true,
         autoplay: { Autoplay },
         animationData: require("./animations/LandingPageAnimation.json"),
      });

      return () => {
         anime1.destroy();
      }; // clean up for unmounting
   }, []);

   return (
      <main>
         <div className='animation-container' ref={LandingPage} />
         {/* <audio src={audio} muted={false} autoPlay controls={Control} /> */}
      </main>
   );
};

export default LandingPage;
