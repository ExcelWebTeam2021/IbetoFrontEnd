import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/FAQ.css";
import "../stylesheet/ResponsiveStyle.css";

const FAQ = () => {
   return (
      <div className='container mt-4 mb-5' id='FAQ'>
         <h2 className='heading '>
            Frequently Ask<span>ed Questions</span>
         </h2>
         <div className='accordion content'>
            <div className='accordion-item'>
               <button id='accordion-button-1' data-toggle='collapse' href='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>
                  <span className='accordion-title'>Why is the moon sometimes out during the day?</span>
                  <span className='icon' aria-hidden='true'></span>
               </button>
               <div className='collapse' id='collapseExample1'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>

            <div className='accordion-item'>
               <button id='accordion-button-2' data-toggle='collapse' href='#collapseExample2' aria-expanded='false' aria-controls='collapseExample2'>
                  <span className='accordion-title'>Why is the sky blue?</span>
                  <span className='icon' aria-hidden='true'></span>
               </button>
               <div className='collapse' id='collapseExample2'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
            <div className='accordion-item'>
               <button id='accordion-button-3' aria-expanded='false' data-toggle='collapse' href='#collapseExample3' aria-controls='collapseExample3'>
                  <span className='accordion-title'>Will we ever discover aliens?</span>
                  <span className='icon' aria-hidden='true'></span>
               </button>
               <div className='collapse' id='collapseExample3'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
            <div className='accordion-item'>
               <button id='accordion-button-4' aria-expanded='false' data-toggle='collapse' href='#collapseExample4' aria-controls='collapseExample4'>
                  <span className='accordion-title'>How much does the Earth weigh?</span>
                  <span className='icon' aria-hidden='true'></span>
               </button>
               <div className='collapse' id='collapseExample4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
            <div className='accordion-item'>
               <button id='accordion-button-5' aria-expanded='false' data-toggle='collapse' href='#collapseExample5' aria-controls='collapseExample5'>
                  <span className='accordion-title'>How do airplanes stay up?</span>
                  <span className='icon' aria-hidden='true'></span>
               </button>
               <div className='collapse' id='collapseExample5'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQ;
