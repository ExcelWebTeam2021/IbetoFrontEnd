import React from "react";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import one from "../images/one.jpg";
import two from "../images/two.jpg";
import three from "../images/three.jpg";

export default function EventFormat() {
   return (
      <div className='container event-format' id='EventFormat'>
         <h2 className='heading mt-5'>Event Format</h2>

         <div className='row '>
            <div class='col-md-4 col-sm-10 phase'>
               {/* <img src={one} width='400' alt='' /> */}
               <div class=''>Phase 1</div>
               <h3 class='event-title'>First</h3>
               <p class='event-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class='col-md-4 col-sm-10 phase'>
               {/* <img src={two} width='400' alt='' /> */}
               <div>Phase 2</div>
               <h3 class='event-title'>Second</h3>
               <p class='event-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <div class='col-md-4 col-sm-10 phase'>
               {/* <img src={three} width='400' alt='' /> */}
               <div>Phase 3</div>
               <h3 class='event-title'>Third</h3>
               <p class='event-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
         </div>
      </div>
   );
}
