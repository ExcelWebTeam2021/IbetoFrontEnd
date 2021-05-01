import React from "react";
import "../stylesheet/Dashboard.css";
const Timeline = () => {
   return (
      <div className='white-bk timeline-row'>
         <div className='dashboard-heading '>
            <h4 className=' dashboard-heading '>Timeline</h4>
         </div>
         <hr />
         <ul class='timeline'>
            <li class='timeline-item'>
               <div class='timeline-info'>
                  <span>March 12, 2016</span>
               </div>
               <div class='timeline-marker'></div>
               <div class='timeline-content'>
                  <h3 class='timeline-title'>Event Title</h3>
                  Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere .
               </div>
            </li>
            <li class='timeline-item'>
               <div class='timeline-info'>
                  <span>March 23, 2016</span>
               </div>
               <div class='timeline-marker'></div>
               <div class='timeline-content'>
                  <h3 class='timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>

            <li class='timeline-item'>
               <div class='timeline-info'>
                  <span>April 02, 2016</span>
               </div>
               <div class='timeline-marker'></div>
               <div class='timeline-content'>
                  <h3 class='timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>
            <li class='timeline-item'>
               <div class='timeline-info'>
                  <span>April 28, 2016</span>
               </div>
               <div class='timeline-marker'></div>
               <div class='timeline-content'>
                  <h3 class='timeline-title'>Event Title</h3>
                  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere . . </p>
               </div>
            </li>
         </ul>
      </div>
   );
};

export default Timeline;
