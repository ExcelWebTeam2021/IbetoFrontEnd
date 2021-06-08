import React, { useEffect } from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import EventFormat from "./EventFormat";
import Rewards from "./Rewards";
import Contact from "./Contact";
import Footer from "./Footer";
import Junior from "./Junior";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials";
import Sponsors from "./Sponsors";
import FAQ from "./FAQ";
import ProblemStmts from "./ProblemStmts";

const IbetoMainSite = () => {
   return (
      <div className='ibeto-mainsite'>
         <div>
            {" "}
            <Navbar />
            <LandingPage />
            <About />
            <EventFormat />
            <ProblemStmts />
            <Rewards />
            <Timeline />
            <Junior />
            <Testimonials />
            <Sponsors />
            <Contact />
            <FAQ />
            <Footer />
         </div>
      </div>
   );
};

export default IbetoMainSite;
