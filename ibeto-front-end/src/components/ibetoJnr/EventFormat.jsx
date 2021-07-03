import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import PhaseOne from "../images/PhaseOne.svg";
import PhaseTwo from "../images/PhaseTwo.svg";
import PhaseThree from "../images/PhaseThree.svg";

export default function EventFormat() {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid ' id='event_format'>
         <h2 className='container heading mt-5'>
            Event<span> Format</span>
         </h2>

         <div className='row event-format'>
            <div data-aos='fade-in' className='col-md-3 col-sm-10 phase'>
               <img className='event-format-img img-fluid' src={PhaseOne} width='100' alt='' />
               <div className=''>Phase 1</div>
               <h3 className='event-title'>Ideate</h3>
               <p className='content event-format-content'>Participants will undergo an online evaluation with respect to technical aspects that supplement a project. 25 teams will be shortlisted and asked to send a detailed abstract.</p>
            </div>

            <div data-aos='fade-in' data-aos-delay='200' className='col-md-3 col-sm-10 phase'>
               <img src={PhaseTwo} width='100' alt='' />
               <div>Phase 2</div>
               <h3 className='event-title'>Create</h3>
               <p className='content event-format-content'>25 teams shortlisted into the quarterfinals will be asked to send in their project plans and assigned mentors to whom the teams are to report to.</p>
            </div>

            <div data-aos='fade-in' data-aos-delay='400' className='col-md-3 col-sm-10 phase'>
               <img src={PhaseThree} width='100' alt='' />
               <div>Phase 3</div>
               <h3 className='event-title'>Showcase</h3>
               <p className='content event-format-content'>The teams are to submit a video presentation along with a demonstration of their working prototype in front of the judges on Day 0 of Excel 2020, which will be the final judgement.</p>
            </div>
         </div>
      </div>
   );
}
