import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Junior.css";
var FA = require('react-fontawesome')

const Junior = () => {
   return (
      <div className='junior lighter-bk'>
         <div className='Jcontainer'>
            <div className='Jcard'>
               <h2 className='Jheading'>IBeTo Junior</h2>
               <Link to='/junior'>
                  <FA  className="Jarrow" name="angle-right" />
               </Link>
               <div className='Jpic'></div>
               <ul className='Jlist'>
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
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
               </ul>
               <Link to='/junior'>
                  <button className='Jbutton' />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Junior;
