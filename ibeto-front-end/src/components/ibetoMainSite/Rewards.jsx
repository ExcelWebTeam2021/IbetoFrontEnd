import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Rewards.css"
;
const Rewards = () => {
   return (
      <div className='rewards content'>
         <div className="image"> 
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200327230544/g4gicon.png"/>
         </div>        
         <div className="text">
            <h2 style={{fontSize:"50px"}} className="heading">Rewards</h2><br/>
            <ul>
               <li> Prize pool of Rs 1 Lakh for top three performing teams </li>
               <li>Opportunity to present top 3 projects in the IEEE HAC Conference and get further funding for its large scale development.</li>
               <li>Top 10 teams can avail mentorships and seed funding to support projects into the development stage.</li>
               <li>Online simulation tools for project purposes will be funded for the finalists.</li>
               <li>As per KTU regulations, socially relevant projects will be awarded 50 activity points.</li>
            </ul>
         </div>
         
      </div>
   );
};

export default Rewards;
