import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Junior.css"

const Junior = () => {
   return (
      <div className='container-fluid'>
         <div className='row junior lighter-bk'>
            <div className='col-12'>
               <h2  style={{fontSize:"50px"}} className='heading pb-3'>Ibeto Jr.</h2>
               <div className="content ">
                  <p>IBeTo Junior 2020 (Innovations for a Better Tomorrow Junior) 
                     is an initiative of Excel 2020 aimed at unfolding technologically 
                     innovative ideas from 7th to 12th grade school students.</p>
                  <p>Under efficient mentorship and with the provision of necessary 
                     tools and resources, the creative proposals can be contrived into 
                     a final product. This year, we will be focussing more on an idea
                     pitching format with an introductory session into some useful engineering 
                     tools that will help the virtual world of today.</p>
                  <br/>
               </div>
               
               <button class='btn btn-primary button-shadow'>
                  <Link to='/junior'>Register </Link>
               </button>
               <button class='btn ml-4 btn-danger button-shadow'>
                  Guidelines
               </button>
            </div>
         </div>
      </div>
   );
};

export default Junior;
