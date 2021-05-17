import React from "react";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Testimonials.css";

const Testimonials = () => {
   return (
      <div className='container testimonial-row'>
         <h1 class='heading pb-4'>Testimonials</h1>

         <div className='row'>
            <div className='col'>
               <div className='carousel slide' data-ride='carousel' id='quote-carousel'>
                  <div className='carousel-inner'>
                     <div className='item-test active carousel-item'>
                        <blockquote>
                           <div className='row'>
                              <div className='col'>
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !
                                 </p>
                                 <small>Someone famous</small>
                              </div>
                           </div>
                        </blockquote>
                     </div>

                     <div className='item-test carousel-item'>
                        <blockquote>
                           <div className='row'>
                              <div className='col'>
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                                 </p>
                                 <small>Someone famous</small>
                              </div>
                           </div>
                        </blockquote>
                     </div>

                     <div className='item-test carousel-item'>
                        <blockquote>
                           <div className='row'>
                              <div className='col'>
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .
                                 </p>
                                 <small>Someone famous</small>
                              </div>
                           </div>
                        </blockquote>
                     </div>
                  </div>

                  <ol className='carousel-indicators'>
                     <li data-target='#quote-carousel' data-slide-to='0' className='active'>
                        <img className='img-responsive ' src='https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg' alt='' />
                     </li>
                     <li data-target='#quote-carousel' data-slide-to='1'>
                        <img className='img-responsive' src='https://images.unsplash.com/photo-1599842057874-37393e9342df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdpcmx8ZW58MHx8MHx8' alt='' />
                     </li>
                     <li data-target='#quote-carousel' data-slide-to='2'>
                        <img className='img-responsive' src='https://images.unsplash.com/photo-1503185912284-5271ff81b9a8' alt='' />
                     </li>
                  </ol>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
