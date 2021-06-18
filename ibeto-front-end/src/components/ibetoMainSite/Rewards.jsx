import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import reward from "../images/reward.svg";

const Rewards = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid rewards-row  '>
         <div className='justify-content-center row' id='Rewards'>
            <div data-aos='fade-right' className='col-md-3 col-sm-6'>
               <img src={reward} alt='reward' className='rewards-img img-fluid' />
            </div>

            <div className='col-md-8 col-sm-10' data-aos='fade-left'>
               <h2 className='heading'>
                  Rewar<span>ds</span>
               </h2>
               <br />
               <ul className='content rewards-list'>
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
