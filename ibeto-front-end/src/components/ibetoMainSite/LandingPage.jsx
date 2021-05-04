import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/LandingPage.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const LandingPage = () => {
   return (
      <main>
         <br />
         <br />
         <br />
         <section class='hero'>
            <div class='container'>
               <div class='hero-inner'>
                  <div>
                     <h1 class='hero-title h2-mobile mt-0 heading'>Landing template for startups</h1>
                     <p class='hero-paragraph content'>Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever.</p>
                     <p>
                        <button class='btn btn-primary button-shadow'>
                           <Link to='/dashboard'>Register now </Link>
                        </button>
                     </p>
                  </div>
               </div>
            </div>
         </section>
      </main>
   );
};

export default LandingPage;
