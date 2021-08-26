import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/Sponsors.css";
import "../stylesheet/ResponsiveStyle.css";

import AVT from "../images/AVT.png";

const Sponsors = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);

   return (
      <div className='container' id='Sponsors'>
         <h2 align='center' className='heading '>
            In associ<span>ation with</span>
         </h2>
         <div className='row no-gutters clients-wrap clearfix wow fadeInUp'>
            <div className='col-lg-4 col-md-4 col-xs-6'>
               <div data-aos='zoom-out' className='client-logo'>
                  {" "}
                  <img src={AVT} className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-4 col-md-4 col-xs-6'>
               <div data-aos='zoom-out' className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
      

           <div className='col-lg-4 col-md-4 col-xs-6'>
               <div data-aos='zoom-out' className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460149/abof.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
         </div>

    
      </div>
   );
};

export default Sponsors;
