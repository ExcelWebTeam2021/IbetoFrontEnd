import React from "react";
import IndividualProblemStmt from "./IndividualProblemStmt";

import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import sdg1 from "../images/SGD/sdg1.png";
import sdg2 from "../images/SGD/sdg2.png";
import sdg3 from "../images/SGD/sdg3.png";

const ProblemStmts = () => {
   return (
      <div className='container problem-stmt-row'>
         <h2 style={{ fontSize: "45px" }} className='heading'>
            Problem Statement
         </h2>

         <div className='row'>
            <IndividualProblemStmt img={sdg1} content='sgd1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,' />
            <IndividualProblemStmt img={sdg3} content='sgd2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,' />
            <IndividualProblemStmt img={sdg2} content='sgd3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,' />

            <IndividualProblemStmt img={sdg3} content='sgd4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,' />
            <IndividualProblemStmt img={sdg2} content='sgd5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,' />
            <IndividualProblemStmt img={sdg1} content='sgd6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tenetur veniam,' />
         </div>
      </div>
   );
};

export default ProblemStmts;
