import React from "react";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

export default function EventFormat() {
   return (
      <div className='container  event-format'>
         <div className='heading'>
            <h1>Event Format</h1>
         </div>
         <div className='event-body'>
            <div className='row'>
               <div class='col-md-4 col-sm-10 phase'>
                  <img src='https://ibeto2019.netlify.app/img/ideate.png' width='200' alt='' />
                  <span class=''>Phase 1</span>
                  <h3 class='event-title'>First</h3>
                  <p class='event-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>

               <div class='col-md-4 col-sm-10 phase'>
                  <img src='https://ibeto2019.netlify.app/img/ideate.png' width='200' alt='' />
                  <span>Phase 2</span>
                  <h3 class='event-title'>Second</h3>
                  <p class='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>

               <div class='col-md-4 col-sm-10 phase'>
                  <img src='https://ibeto2019.netlify.app/img/ideate.png' width='200' alt='' />
                  <span>Phase 3</span>
                  <h3 class='event-title'>Third</h3>
                  <p class='event-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
               </div>
            </div>
         </div>
      </div>
   );
}
