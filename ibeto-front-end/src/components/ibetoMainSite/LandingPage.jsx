import React, { useRef, useState,useEffect } from "react";
import lottie from "lottie-web";

import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import audio from "./audio.mp4";

const LandingPage = () => {
   const LandingPage = useRef(null);
   const starting_animation = useRef(null);
   const audioRef = useRef(new Audio(audio));

   let [toggle, setToggle] = useState(false);
   let [style, setstyle] = useState('block');
   const [hidePlayBtn, sethidePlayBtn] = useState(false);

  

   useEffect(() => {
   
      const anime1 = lottie.loadAnimation({
         container: starting_animation.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/Bkanimation.json"),
      });

      return () => {
         anime1.destroy();
      }; 
   }, [])
   
   const handleClick = () => {
      audioRef.current.play();
      sethidePlayBtn(true);
      setstyle('none')
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
      <main id='Home'>
       <div  ref={LandingPage}>
      
      </div>
      
         <div className='animation-container darker-bk'  style={{display: style}}   ref={starting_animation} >
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

         <audio ref={audioRef} src={audio} autoPlay={false} muted={toggle} controls={false} />
      
            <div className='wave-pattern'>
            <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
               <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' className='shape-fill'></path>
            </svg>
            </div>

      </main>
   );
};

export default LandingPage;
