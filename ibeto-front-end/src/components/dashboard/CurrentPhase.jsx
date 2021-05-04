import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveStyle.css";

const CurrentPhase = () => {
   return (
      <div className='white-bk currentphase-row'>
         <div className='row'>
            <div className='col-1'></div>
            <div className='col-5 '>
               <h5>Ibeto</h5>
               <p>Report submission phase</p>
            </div>
            <div className='col-5 progressbar-row'>
               {" "}
               <div class='progress' data-percentage='20'>
                  <span class='progress-left'>
                     <span class='progress-bar'></span>
                  </span>
                  <span class='progress-right'>
                     <span class='progress-bar'></span>
                  </span>
                  <div class='progress-value'>
                     <div>
                        20%
                        <br />
                        <span>completed</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CurrentPhase;
