import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/Sponsors.css";
import "../stylesheet/ResponsiveStyle.css";

const Sponsors = () => {
   return (
      <div className='container' id='Sponsors'>
         <h2 align='center' className='heading '>
            In associ<span>ation with</span>
         </h2>
         <div className='row no-gutters clients-wrap clearfix wow fadeInUp'>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460149/abof.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460269/104840a62d46c05d285762857fecb61a.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460358/client-4.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460379/client-5.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460398/client-6.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460418/client-7.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
            <div className='col-lg-3 col-md-4 col-xs-6'>
               <div className='client-logo'>
                  {" "}
                  <img src='https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460149/abof.png' className='img-fluid' alt='' />{" "}
               </div>
            </div>
         </div>

         <div className='LeftBlob2'>
            <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
               <path
                  fill='#E9ECEF'
                  d='M41.5,-65.4C53.8,-56.6,64.1,-45.2,73.3,-31.6C82.5,-17.9,90.6,-1.8,88,12.3C85.4,26.4,72,38.6,60,51.3C47.9,64.1,37.3,77.3,23.5,82.6C9.7,87.9,-7.2,85.1,-23.2,80C-39.2,74.9,-54.2,67.4,-65.7,55.9C-77.3,44.5,-85.4,28.9,-88,12.5C-90.7,-4,-87.9,-21.4,-79.7,-35.1C-71.4,-48.8,-57.8,-58.7,-43.6,-66.7C-29.4,-74.7,-14.7,-80.9,-0.1,-80.8C14.5,-80.6,29.1,-74.3,41.5,-65.4Z'
                  transform='translate(100 100)'
               />
            </svg>
         </div>
      </div>
   );
};

export default Sponsors;
