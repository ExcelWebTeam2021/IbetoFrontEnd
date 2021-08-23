import React from "react";
import "../stylesheet/Dashboard.css";
import "../stylesheet/ResponsiveDashboardStylesheet.css";

const SubmissionForm = () => {
   return (
      <div className='white-bk submissionForm-row'>
         {/* <h4 className='dashboard-heading pb-3'> Submission Form</h4> */}

         <iframe title='Submission Form' src='https://docs.google.com/forms/d/e/1FAIpQLScCudqS9LVaqJTHpilDoZKoyc9_PkQb3VhVWL56g8zkDpGVBA/viewform?embedded=true' height='840' frameBorder='0' marginHeight='0' marginWidth='0'>
            Loading…
         </iframe>
      </div>
   );
};

export default SubmissionForm;
