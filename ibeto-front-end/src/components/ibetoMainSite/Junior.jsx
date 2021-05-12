import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Junior.css";
var FA = require("react-fontawesome");

const Junior = () => {
   return (
      <div className=' junior lighter-bk' id='IbetoJunior'>
         <div className='container'>
            <Link to='/junior'>
               <div className='Jcard'>
                  <h2 className='Jheading'>IBeTo Junior</h2>

                  <div className='Jpic'></div>
                  <FA className='Jarrow' name='angle-right' />
                  <button className='Jbutton'></button>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Junior;
