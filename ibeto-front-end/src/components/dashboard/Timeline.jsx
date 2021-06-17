import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const Timeline = () => {
   return (
      <div className='white-bk timeline-row'>
         <div className=''>
            <h4 className=' dashboard-heading '>Timeline</h4>
         </div>
         <hr />
         <ul className='timeline'>
            <li className='timeline-item'>
               <div className='timeline-info'>
                  <span>March 12, 2016</span>
               </div>
               <div className='timeline-marker'></div>
               <div className='timeline-content'>
                  <h3 className='timeline-title'>Event Title</h3>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere .
               </div>
            </li>
            <li className='timeline-item'>
               <div className='timeline-info'>
                  <span>March 23, 2016</span>
               </div>
               <div className='timeline-marker'></div>
               <div className='timeline-content'>
                  <h3 className='timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>

            <li className='timeline-item'>
               <div className='timeline-info'>
                  <span>April 02, 2016</span>
               </div>
               <div className='timeline-marker'></div>
               <div className='timeline-content'>
                  <h3 className='timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>
            <li className='timeline-item'>
               <div className='timeline-info'>
                  <span>April 28, 2016</span>
               </div>
               <div className='timeline-marker'></div>
               <div className='timeline-content'>
                  <h3 className='timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>
         </ul>
      </div>
   );
};

export default Timeline;
