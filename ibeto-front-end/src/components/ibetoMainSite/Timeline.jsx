import React,{ useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Timeline.css";

const Timeline = () => {
   useEffect(()=>{
      AOS.init({ duration:1000})
   }, [])

   return (
      <div className='container mb-4' id='timeline'>
         <h2 align='center' className='heading pb-4'>
            Timel<span>ine</span>
         </h2>
         <div className='row mainsite-timeline-row '>
            <ul class='mainsite-timeline'>
               <li class='mainsite-timeline-item'>
                  <div class='mainsite-timeline-info'>
                     <span>March 12, 2016</span>
                  </div>
                  <div class='mainsite-timeline-marker'></div>
                  <div data-aos="fade-left" class='mainsite-timeline-content'>
                     <h3 class='mainsite-timeline-title'>Event Title</h3>
                     Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere
                  </div>
               </li>
               <li class='mainsite-timeline-item'>
                  <div class='mainsite-timeline-info'>
                     <span>March 23, 2016</span>
                  </div>
                  <div class='mainsite-timeline-marker'></div>
                  <div data-aos="fade-left" data-aos-delay="200" class='mainsite-timeline-content'>
                     <h3 class='mainsite-timeline-title'>Event Title</h3>
                     <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere </p>
                  </div>
               </li>

               <li class='mainsite-timeline-item'>
                  <div class='mainsite-timeline-info'>
                     <span>April 02, 2016</span>
                  </div>
                  <div class='mainsite-timeline-marker'></div>
                  <div data-aos="fade-left" data-aos-delay="200" class='mainsite-timeline-content'>
                     <h3 class='mainsite-timeline-title'>Event Title</h3>
                     <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere</p>
                  </div>
               </li>
               <li class='mainsite-timeline-item'>
                  <div class='mainsite-timeline-info'>
                     <span>April 28, 2016</span>
                  </div>
                  <div class='mainsite-timeline-marker'></div>
                  <div data-aos="fade-left" data-aos-delay="200" class='mainsite-timeline-content'>
                     <h3 class='mainsite-timeline-title'>Event Title</h3>
                     <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere</p>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Timeline;
