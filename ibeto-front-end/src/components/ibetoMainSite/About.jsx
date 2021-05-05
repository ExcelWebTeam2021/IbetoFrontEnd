import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const About = () => {
   return (
      <div class='container-fluid lighter-bk'>
         <div className='row about'>
            <h4 className='heading'>About</h4>
            <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae provident commodi et vero voluptates reprehenderit repellat similique in maxime quibusdam.</p>
            <button class='btn btn-dark button-shadow'>
               <Link to='/dashboard'>Register now </Link>
            </button>
         </div>
      </div>
   );
};

export default About;
