import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Timeline.css";

const Timeline = () => {
   return (
      <div className='container mb-4' id='Timeline'>
         <h2 align='center' className='heading '>
            Timeline
         </h2>
         
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