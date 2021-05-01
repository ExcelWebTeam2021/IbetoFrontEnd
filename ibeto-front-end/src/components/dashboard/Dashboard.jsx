import React from "react";
import Faq from "./Faq";
import SubmissionForm from "./SubmissionForm";
import Timeline from "./Timeline";
import CurrentPhase from "./CurrentPhase";
import "../stylesheet/Dashboard.css";
import ContactUs from "./ContactUs";

const Dashboard = () => {
   return (
      <div className='container-fluid  dashboard'>
         <div className='row dashboard-row'>
            <div className='col-md-4  col-sm-10 '>
               <Timeline />
            </div>

            <div className='col-md-4 col-sm-10 central-section'>
               <CurrentPhase />
               <SubmissionForm />
            </div>
            <div className='col-md-4 col-sm-10'>
               <ContactUs />
               <Faq />
            </div>
         </div>
      </div>
   );
};

export default Dashboard;
