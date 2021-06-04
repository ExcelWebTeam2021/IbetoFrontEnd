import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";

import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const ProblemStmts = () => {
   const sdg1 = useRef(null);
   const sdg2 = useRef(null);
   const sdg3 = useRef(null);
   const sdg4 = useRef(null);
   const sdg5 = useRef(null);
   const sdg6 = useRef(null);
   useEffect(() => {
      const sdg1_animation = lottie.loadAnimation({
         container: sdg1.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/GoodHealth.json"),
      });
      const sdg2_animation = lottie.loadAnimation({
         container: sdg2.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/Affordable.json"),
      });
      const sdg3_animation = lottie.loadAnimation({
         container: sdg3.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/GenderEquality.json"),
      });
      const sdg4_animation = lottie.loadAnimation({
         container: sdg4.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/QualityEducation.json"),
      });
      const sdg5_animation = lottie.loadAnimation({
         container: sdg5.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/climateActionsdg.json"),
      });
      const sdg6_animation = lottie.loadAnimation({
         container: sdg6.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/innovation.json"),
      });
      AOS.init({ duration: 1000 });
      return () => {
         sdg1_animation.destroy();
         sdg2_animation.destroy();
         sdg3_animation.destroy();
         sdg4_animation.destroy();
         sdg5_animation.destroy();
         sdg6_animation.destroy();
      };
   }, []);
   return (
      <div className='container' id='ProblemStatement'>
         <h2 className='heading mt-5'>
            Problem <span>Statement</span>
         </h2>

         <div className='row problem-stmt-row'>
            {/* SGD1 */}
            <div className='card-container col-md-4  col-sm-10 col-xs-12 ' data-aos='fade-in'>
               <div className='card card-front button-shadow' ref={sdg1}></div>
               <div className='card card-back button-shadow'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD2 */}
            <div className='card-container col-md-4  col-sm-10 col-xs-12 ' data-aos='fade-in' data-aos-delay='150'>
               <div className='card card-front button-shadow' ref={sdg2}></div>
               <div className='card card-back button-shadow'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD3 */}
            <div className='card-container col-md-4  col-sm-10 col-xs-12 ' data-aos='fade-in' data-aos-delay='300'>
               <div className='card card-front button-shadow' ref={sdg3}></div>
               <div className='card card-back button-shadow'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD4 */}
            <div className='card-container col-md-4  col-sm-10 col-xs-12 ' data-aos='fade-in' data-aos-delay=''>
               <div className='card card-front button-shadow' ref={sdg4}></div>
               <div className='card card-back button-shadow'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD5 */}
            <div className='card-container col-md-4  col-sm-10 col-xs-12 ' data-aos='fade-in' data-aos-delay='150'>
               <div className='card card-front button-shadow' ref={sdg5}></div>
               <div className='card card-back button-shadow'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD6 */}
            <div className='card-container col-md-4  col-sm-10 col-xs-12 ' data-aos='fade-in' data-aos-delay='300'>
               <div className='card card-front button-shadow' ref={sdg6}></div>
               <div className='card card-back button-shadow'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>
         </div>
         {/* <div className='LeftBlob1'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
               <path
                  fill='#E9ECEF'
                  d='M41.5,-65.4C53.8,-56.6,64.1,-45.2,73.3,-31.6C82.5,-17.9,90.6,-1.8,88,12.3C85.4,26.4,72,38.6,60,51.3C47.9,64.1,37.3,77.3,23.5,82.6C9.7,87.9,-7.2,85.1,-23.2,80C-39.2,74.9,-54.2,67.4,-65.7,55.9C-77.3,44.5,-85.4,28.9,-88,12.5C-90.7,-4,-87.9,-21.4,-79.7,-35.1C-71.4,-48.8,-57.8,-58.7,-43.6,-66.7C-29.4,-74.7,-14.7,-80.9,-0.1,-80.8C14.5,-80.6,29.1,-74.3,41.5,-65.4Z'
                  transform='translate(100 100)'
               />
            </svg>
         </div> */}
      </div>
   );
};

export default ProblemStmts;
