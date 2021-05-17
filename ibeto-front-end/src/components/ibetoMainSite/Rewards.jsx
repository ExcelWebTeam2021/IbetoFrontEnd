import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";


import two from "../images/two.jpg";
const Rewards = () => {
   return (
      <div className='rewards-row    mt-5 lighter-bk'>
         <div className='justify-content-center row' id='Rewards'>
            <div className='col-md-4 col-sm-10'>
               {/* <img src={two} width='600' /> */}
            </div>
            <div className='col-md-8 col-sm-10'>
               <h2 className='heading'>
                  Rewards
               </h2>
               <br />
               <ul>
                  <li> Prize pool of Rs 1 Lakh for top three performing teams </li>
                  <li>Opportunity to present top 3 projects in the IEEE HAC Conference and get further funding for its large scale development.</li>
                  <li>Top 10 teams can avail mentorships and seed funding to support projects into the development stage.</li>
                  <li>Online simulation tools for project purposes will be funded for the finalists.</li>
                  <li>As per KTU regulations, socially relevant projects will be awarded 50 activity points.</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Rewards;
