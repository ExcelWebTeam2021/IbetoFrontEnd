import React from "react";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const IndividualProblemStmt = ({ img, content }) => {
   return (
      <div className='card-container col-md-4  col-sm-6 col-xs-12 '>
         <div class='card card-front button-shadow'>
            <img class='card-img-top img-fluid ' src={img} alt='SGD' />
         </div>
         <div class='card card-back'> {content}</div>
      </div>
   );
};

export default IndividualProblemStmt;
