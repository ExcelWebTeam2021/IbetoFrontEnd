import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const CurrentPhase = () => {
   return (
      <div className='white-bk currentphase-row'>
         <div className='row'>
            <div className='col-1'></div>
            <div className='col-5 currentphase-text'>
               <h4>Ibeto</h4>
               <p>Report submission phase</p>
            </div>
            <div className='col-5 progressbar-row'>
               {" "}
               <div className='progress' data-percentage='20'>
                  <span className='progress-left'>
                     <span className='progress-bar'></span>
                  </span>
                  <span className='progress-right'>
                     <span className='progress-bar'></span>
                  </span>
                  <div className='progress-value'>
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
