import React from "react";
import { Link } from "react-router-dom";

const Junior = () => {
   return (
      <div className='container-fluid'>
         <div className='row junior lighter-bk'>
            <div className='col-12'>
               <h3 className='heading'>Ibeto junior</h3>
               <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, corrupti?</p>
               <br />
               <button class='btn btn-primary button-shadow'>
                  <Link to='/junior'>Ibeto Junior </Link>
               </button>
            </div>
         </div>
      </div>
   );
};

export default Junior;
