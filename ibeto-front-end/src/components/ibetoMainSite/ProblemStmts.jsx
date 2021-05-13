import React, { useEffect, useRef } from "react";
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
         animationData: require("./animations/SGD/sdg5.json"),
      });
      const sdg2_animation = lottie.loadAnimation({
         container: sdg2.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/sdg5.json"),
      });
      const sdg3_animation = lottie.loadAnimation({
         container: sdg3.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/sdg5.json"),
      });
      const sdg4_animation = lottie.loadAnimation({
         container: sdg4.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/sdg5.json"),
      });
      const sdg5_animation = lottie.loadAnimation({
         container: sdg5.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/sdg5.json"),
      });
      const sdg6_animation = lottie.loadAnimation({
         container: sdg6.current,
         renderer: "svg",
         loop: true,
         autoplay: true,
         animationData: require("./animations/SGD/sdg5.json"),
      });
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
      <div className='container problem-stmt-row' id='ProblemStatement'>
         <h2 style={{ fontSize: "45px" }} className='heading'>
            Problem Statement
         </h2>

         <div className='row'>
            {/* SGD1 */}
            <div className='card-container col-md-4  col-sm-6 col-xs-12 '>
               <div class='card card-front button-shadow' ref={sdg1}></div>
               <div class='card card-back'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD2 */}
            <div className='card-container col-md-4  col-sm-6 col-xs-12 '>
               <div class='card card-front button-shadow' ref={sdg2}></div>
               <div class='card card-back'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD3 */}
            <div className='card-container col-md-4  col-sm-6 col-xs-12 '>
               <div class='card card-front button-shadow' ref={sdg3}></div>
               <div class='card card-back'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD4 */}
            <div className='card-container col-md-4  col-sm-6 col-xs-12 '>
               <div class='card card-front button-shadow' ref={sdg4}></div>
               <div class='card card-back'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD5 */}
            <div className='card-container col-md-4  col-sm-6 col-xs-12 '>
               <div class='card card-front button-shadow' ref={sdg5}></div>
               <div class='card card-back'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>

            {/* SGD6 */}
            <div className='card-container col-md-4  col-sm-6 col-xs-12 '>
               <div class='card card-front button-shadow' ref={sdg6}></div>
               <div class='card card-back'> sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,</div>
            </div>
         </div>
      </div>
   );
};

export default ProblemStmts;
