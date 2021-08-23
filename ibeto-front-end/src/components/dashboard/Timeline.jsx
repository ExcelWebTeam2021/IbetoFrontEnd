import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const Timeline = () => {
   return (
      <div className='white-bk dashboard-timeline-row'>
         <div className=''>
            <h4 className=' dashboard-heading '>Timeline</h4>
         </div>
         <hr />
         <ul className='dashboard-timeline'>
            <li className='dashboard-timeline-item'>
               <div className='dashboard-timeline-info'>
                  <span>March 12, 2016</span>
               </div>
               <div className='dashboard-timeline-marker'></div>
               <div className='dashboard-timeline-content'>
                  <h3 className='dashboard-timeline-title'>Event Title</h3>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere .
               </div>
            </li>
            <li className='dashboard-timeline-item'>
               <div className='dashboard-timeline-info'>
                  <span>March 23, 2016</span>
               </div>
               <div className='dashboard-timeline-marker'></div>
               <div className='dashboard-timeline-content'>
                  <h3 className='dashboard-timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>

            <li className='dashboard-timeline-item'>
               <div className='dashboard-timeline-info'>
                  <span>April 02, 2016</span>
               </div>
               <div className='dashboard-timeline-marker'></div>
               <div className='dashboard-timeline-content'>
                  <h3 className='dashboard-timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>
            <li className='dashboard-timeline-item'>
               <div className='dashboard-timeline-info'>
                  <span>April 28, 2016</span>
               </div>
               <div className='dashboard-timeline-marker'></div>
               <div className='dashboard-timeline-content'>
                  <h3 className='dashboard-timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>
         </ul>
      </div>
   );
};

export default Timeline;
