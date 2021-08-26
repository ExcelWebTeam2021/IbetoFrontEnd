import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const Faq = () => {
   return (
      <div className='white-bk faq-row '>
         <div className='row'>
            <div className='col-md-12 '>
               <div className=''>
                  <h4 className='dashboard-heading faq-heading'> FAQ</h4>
               </div>
               <hr />
            </div>

            <div className='col-md-12 content'>
               <div className='faq content' id='accordion'>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-1'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-1' data-aria-expanded='true' data-aria-controls='faqCollapse-1'>
                              <span className='badge'>1</span>Can a team submit more than one idea?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-1' className='collapse' aria-labelledby='faqHeading-1' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p>Yes. There is no restriction on the number of entries per team. </p>
                        </div>
                     </div>
                  </div>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-2'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-2' data-aria-expanded='false' data-aria-controls='faqCollapse-2'>
                              <span className='badge'>2</span> Can we register an idea that covers more than one problem statement?

                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-2' className='collapse' aria-labelledby='faqHeading-2' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p>Yes. The idea has to fall under at least one problem statement. It is acceptable to submit ideas falling under more than one given problem statement including other socially relevant ideas. 
</p>
                        </div>
                     </div>
                  </div>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-3'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-3' data-aria-expanded='false' data-aria-controls='faqCollapse-3'>
                              <span className='badge'>3</span>How will the participants be intimated about the result of each round?

                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-3' className='collapse' aria-labelledby='faqHeading-3' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p>You will receive all updates about IBeTo in the registered email id of the team leader 
</p>
                        </div>
                     </div>
                  </div>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-4'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-4' data-aria-expanded='false' data-aria-controls='faqCollapse-4'>
                              <span className='badge'>4</span> What are the key evaluation criteria for shortlisting ideas?

                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-4' className='collapse' aria-labelledby='faqHeading-4' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p>The idea should be technology based, and should have a positive impact on society. Furthermore it must be realizable as a project and be sustainable.
</p>
                        </div>
                     </div>
                  </div>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-5'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-5' data-aria-expanded='false' data-aria-controls='faqCollapse-5'>
                              <span className='badge'>5</span> Are individual developers allowed to participate?

                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-5' className='collapse' aria-labelledby='faqHeading-5' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p> Yes, absolutely! You may choose to apply and work on an idea all by your lonesome!
</p>
                        </div>
                     </div>
                  </div>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-6'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-6' data-aria-expanded='false' data-aria-controls='faqCollapse-6'>
                              <span className='badge'>6</span> Is there an age limit for registration?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-6' className='collapse' aria-labelledby='faqHeading-6' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p>
                           Yes the members of a team must be currently an undergraduate/ postgraduate under the age limit of 30 years. 
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-7'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-7' data-aria-expanded='false' data-aria-controls='faqCollapse-7'>
                              <span className='badge'>7</span>When will mentors be provided?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-7' className='collapse' aria-labelledby='faqHeading-7' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p>
                           A panel of experts will be made available to clear your queries, during Create Phase

                           </p>
                        </div>
                     </div>
                  </div>
                  <div className='faq-card'>
                     <div className='faq-card-header' id='faqHeading-8'>
                        <div className='mb-0'>
                           <h5 className='faq-title' data-toggle='collapse' data-target='#faqCollapse-8' data-aria-expanded='false' data-aria-controls='faqCollapse-7'>
                              <span className='badge'>8</span>Whom to contact for further queries?
                           </h5>
                        </div>
                     </div>
                     <div id='faqCollapse-8' className='collapse' aria-labelledby='faqHeading-8' data-parent='#accordion'>
                        <div className='faq-card-body'>
                           <p>
                           Please send us an email in the given email id by clicking the CONTACT US  button on this page, or refer to the contact details given in the website.

                           </p>
                        </div>
                     </div>
                  </div>
              
               </div>
            </div>
         </div>
      </div>
   );
};

export default Faq;
