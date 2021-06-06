import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Timeline.css";

const Timeline = () => {
   useEffect(() => {
      AOS.init({ duration: 1000 });
   }, []);

   return (
      <div className='container' id='timeline'>
         <h2 align='center' className='heading'>
            Timel<span>ine</span>
         </h2>

         <div className='mb-4 mainsite-timeline-row '>
            <ul className='mainsite-timeline'>
               <li className='mainsite-timeline-item'>
                  <div className='mainsite-timeline-info'>
                     <span>March 12, 2016</span>
                  </div>
                  <div className='mainsite-timeline-marker'></div>
                  <div data-aos='fade-left' className='mainsite-timeline-content'>
                     <h3 className='mainsite-timeline-title'>Event Title</h3>
                     <p className='content'>Nullam vel sem. vel sem. Isem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere </p>
                  </div>
               </li>
               <li className='mainsite-timeline-item'>
                  <div className='mainsite-timeline-info'>
                     <span>March 23, 2016</span>
                  </div>
                  <div className='mainsite-timeline-marker'></div>
                  <div data-aos='fade-left' data-aos-delay='100' className='mainsite-timeline-content'>
                     <h3 className='mainsite-timeline-title'>Event Title</h3>
                     <p className='content'>am vel sem.Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere </p>
                  </div>
               </li>

               <li className='mainsite-timeline-item'>
                  <div className='mainsite-timeline-info'>
                     <span>April 02, 2016</span>
                  </div>
                  <div className='mainsite-timeline-marker'></div>
                  <div data-aos='fade-left' data-aos-delay='150' className='mainsite-timeline-content'>
                     <h3 className='mainsite-timeline-title'>Event Title</h3>
                     <p className='content'>Nullam vel sem. Nullam vel sem. Integam vel sem.er ante arcu, accumsan a, consectetuer eget, posuere </p>
                  </div>
               </li>
               <li className='mainsite-timeline-item'>
                  <div className='mainsite-timeline-info'>
                     <span>April 28, 2016</span>
                  </div>
                  <div className='mainsite-timeline-marker'></div>
                  <div data-aos='fade-left' data-aos-delay='200' className='mainsite-timeline-content'>
                     <h3 className='mainsite-timeline-title'>Event Title</h3>
                     <p className='content'>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsanam vel sem. a, consectetuer eget, posuere </p>
                  </div>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Timeline;
