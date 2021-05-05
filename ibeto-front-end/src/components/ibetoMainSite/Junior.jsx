import React from "react";
import { FaArrowRight } from "react-icons/fa"
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Junior.css"
import { Link } from "react-router-dom";

const Junior = () => {
   return (
   <div className="junior">
      <div className="Jcontainer">
         <div className="Jcard">
            <h2 className="Jheading">IBeTo Junior</h2>
            <FaArrowRight className="Jarrow" />
            <div className="Jpic"></div>
            <ul className="Jlist">
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
               <li></li>
            </ul>
            
            <Link to="/junior">
               <button className="Jbutton"/>
            </Link>
         </div>
      </div>
   </div>

   );
};

export default Junior;
