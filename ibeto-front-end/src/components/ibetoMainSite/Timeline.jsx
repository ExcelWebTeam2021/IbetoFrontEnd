import React from "react";
import "../stylesheet/Timeline.css";

const Timeline = () => {
   return (
      <div className='container mb-4' id='Timeline'>
         <h2 align='center' className='heading '>
            Timeline
         </h2>
         <div className='row'>
            <div className='col-md-12'>
               <div className='main-timeline3'>
                  <div className='timeline3'>
                     <div className='timeline-icon3'>
                        <span className='year3'>June</span>
                     </div>
                     <div className='timeline-content3'>
                        <h3 className='title3'>Web Desginer</h3>
                        <p className='description3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
                     </div>
                  </div>
                  <div className='timeline3'>
                     <div className='timeline-icon3'>
                        <span className='year3'>July</span>
                     </div>
                     <div className='timeline-content3'>
                        <h3 className='title3'>Web Developer</h3>
                        <p className='description3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
                     </div>
                  </div>
                  <div className='timeline3'>
                     <div className='timeline-icon3'>
                        <span className='year3'>August</span>
                     </div>
                     <div className='timeline-content3'>
                        <h3 className='title3'>Web Desginer</h3>
                        <p className='description3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
                     </div>
                  </div>
                  <div className='timeline3'>
                     <div className='timeline-icon3'>
                        <span className='year3'>Sept</span>
                     </div>
                     <div className='timeline-content3'>
                        <h3 className='title3'>Web Developer</h3>
                        <p className='description3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Timeline;
