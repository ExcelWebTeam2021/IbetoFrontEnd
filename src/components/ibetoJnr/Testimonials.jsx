import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Testimonials.css";

const Testimonials = () => {
   useEffect(() => {
      AOS.init({ duration: 1100 });
   }, []);

   return (
      <div data-aos='fade-in' id='testimonials' className='container testimonial-row'>
         <h1 className='heading pb-4'>
            Winner's<span> gallery</span>
         </h1>

         <div className='row'>
            <a data-slide='prev' href='#quote-carousel' className='carousel-control left'>
               ‹
            </a>
            <div className='col'>
               <div className='carousel slide' data-ride='carousel' id='quote-carousel'>
                  <div className='carousel-inner'>
                     <div className='ibeto-testimonial active carousel-item'>
                        <blockquote>
                           <div className='row'>
                              <div className='col content'>
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !
                                 </p>
                                 <small>First position</small>
                                 <div>
                                    {" "}
                                    <button className='btn btn-danger btn-sm'>View project</button>
                                 </div>
                              </div>
                           </div>
                        </blockquote>
                     </div>

                     <div className='ibeto-testimonial carousel-item'>
                        <blockquote>
                           <div className='row'>
                              <div className='col content'>
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
                                 </p>
                                 <small>Second position </small>
                                 <div>
                                    {" "}
                                    <button className='btn btn-danger btn-sm'>View project</button>
                                 </div>
                              </div>
                           </div>
                        </blockquote>
                     </div>

                     <div className='ibeto-testimonial carousel-item'>
                        <blockquote>
                           <div className='row'>
                              <div className='col content'>
                                 <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .
                                 </p>
                                 <small>Someone famous</small>
                                 <div>
                                    {" "}
                                    <button className='btn btn-danger btn-sm'>View project</button>
                                 </div>
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
            <a data-slide='next' href='#quote-carousel' className='carousel-control right'>
               ›
            </a>
         </div>
      </div>
   );
};

export default Testimonials;
