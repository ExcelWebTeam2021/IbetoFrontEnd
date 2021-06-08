import React, { useEffect } from "react";
import Faq from "./Faq";
import SubmissionForm from "./SubmissionForm";
import Timeline from "./Timeline";
import CurrentPhase from "./CurrentPhase";
import ContactUs from "./ContactUs";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const Dashboard = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);
   return (
      <div className='container-fluid  dashboard'>
         <div className='row dashboard-row'>
            <div className='col-md-4  hidden-xs '>
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
