import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/FAQ.css";
import "../stylesheet/ResponsiveStyle.css";

const FAQ = () => {
   return (
      <div class='container'>
         <h2>Frequently Asked Questions</h2>
         <div class='accordion'>
            <div class='accordion-item'>
               <button id='accordion-button-1' data-toggle='collapse' href='#collapseExample1' aria-expanded='false' aria-controls='collapseExample1'>
                  <span class='accordion-title'>Why is the moon sometimes out during the day?</span>
                  <span class='icon' aria-hidden='true'></span>
               </button>
               <div class='collapse' id='collapseExample1'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>

            <div class='accordion-item'>
               <button id='accordion-button-2' data-toggle='collapse' href='#collapseExample2' aria-expanded='false' aria-controls='collapseExample2'>
                  <span class='accordion-title'>Why is the sky blue?</span>
                  <span class='icon' aria-hidden='true'></span>
               </button>
               <div class='collapse' id='collapseExample2'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
            <div class='accordion-item'>
               <button id='accordion-button-3' aria-expanded='false' data-toggle='collapse' href='#collapseExample3' aria-controls='collapseExample3'>
                  <span class='accordion-title'>Will we ever discover aliens?</span>
                  <span class='icon' aria-hidden='true'></span>
               </button>
               <div class='collapse' id='collapseExample3'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
            <div class='accordion-item'>
               <button id='accordion-button-4' aria-expanded='false' data-toggle='collapse' href='#collapseExample4' aria-controls='collapseExample4'>
                  <span class='accordion-title'>How much does the Earth weigh?</span>
                  <span class='icon' aria-hidden='true'></span>
               </button>
               <div class='collapse' id='collapseExample4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
            <div class='accordion-item'>
               <button id='accordion-button-5' aria-expanded='false' data-toggle='collapse' href='#collapseExample5' aria-controls='collapseExample5'>
                  <span class='accordion-title'>How do airplanes stay up?</span>
                  <span class='icon' aria-hidden='true'></span>
               </button>
               <div class='collapse' id='collapseExample5git p'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FAQ;
