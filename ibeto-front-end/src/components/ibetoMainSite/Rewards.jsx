import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import reward from "../images/reward.svg";

const Rewards = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div className='container-fluid rewards-row  '>
         <div className='justify-content-center row' id='Rewards'>
            <div data-aos='fade-right' className='col-md-3 col-sm-6'>
               <img src={reward} alt='reward' className='rewards-img img-fluid' />
            </div>

            <div className='col-md-8 col-sm-6' data-aos='fade-left'>
               <h2 className='heading reward-heading'>
                  Rew<span>ards</span>
               </h2>
               <br />
               <ul className='content rewards-list'>
                  <li>The best projects chosen by the judges will be awarded a cash prize worth INR 1,00,000/- from the organisers.</li>
                  <li>A select few finalist teams which meet the required T&Cs, shall be eligible to receive pre- incubation opportunities provided by IEDC MEC, where they shall be provided guidance to develop a Market Viable Product and on successful completion of the same, the teams can apply for incubation services from Kerala Startup Mission.</li>
                  <li>Certificate of Participation will be awarded, signed by the concerned authorities</li>
                  <li>As per KTU regulations, socially relevant projects will be awarded 50 activity points.</li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Rewards;
