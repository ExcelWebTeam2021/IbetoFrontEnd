import React, { useRef, useState } from "react";
import lottie from "lottie-web";

import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import audio from "./audio.mp3";

const LandingPage = () => {
   const LandingPage = useRef(null);
   const audioRef = useRef(new Audio(audio));

   let [toggle, setToggle] = useState(false);
   const [hidePlayBtn, sethidePlayBtn] = useState(false);
   const handleClick = () => {
      audioRef.current.play();
      sethidePlayBtn(true);
      const anime1 = lottie.loadAnimation({
         container: LandingPage.current,
         renderer: "svg",
         loop: true,
         animationData: require("./animations/LandingPageAnimation.json"),
      });
   };
   const handleMute = () => {
      setToggle(!toggle);
      console.log("Button is toggled", toggle);
   };
   return (
      <main>
         <div className='animation-container darker-bk' id='Home' ref={LandingPage}>
            <div className='custom-shape-divider-bottom-1622696646'>
               <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
                  <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill'></path>
               </svg>
            </div>
         </div>
         {!hidePlayBtn && (
            <div className='btn-container'>
               <div className='bg'></div>
               <div className='buttons' onClick={handleClick}>
                  <i className='fa fa-play'></i>
               </div>
            </div>
         )}

         {hidePlayBtn && (
            <button className='btn-mute' onClick={handleMute}>
               {" "}
               {toggle ? (
                  <div className='mutess'>
                     <i className='fa fa-volume-up '></i>
                  </div>
               ) : (
                  <div className='mutess'>
                     <i className='fa fa-volume-off'></i>
                  </div>
               )}
            </button>
         )}

         <audio ref={audioRef} src={audio} autoplay={false} muted={toggle} controls={false} />
         {/* Blob */}
         {/* <div className='RightBlob1'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
               <path fill='#E9ECEF' d='M54.3,-23.2C60.6,1.8,49.2,26.9,27.7,43.9C6.2,60.9,-25.5,69.7,-47.3,56C-69.2,42.3,-81.3,5.9,-71.8,-23.5C-62.3,-52.9,-31.2,-75.4,-3.6,-74.3C24,-73.1,48,-48.2,54.3,-23.2Z' transform='translate(100 100)' />
            </svg>
         </div> */}
      </main>
   );
};

export default LandingPage;
