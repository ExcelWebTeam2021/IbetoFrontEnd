import React from "react";
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
import FAQ from "./FAQ";
import ProblemStmts from "./ProblemStmts";

const IbetoMainSite = () => {
   return (
      <div>
         <Navbar />
         <LandingPage />
         <About />
         <EventFormat />
         <ProblemStmts />
         <Rewards />
         <Timeline />
         <Junior />
         <Testimonials />
         <Contact />
         <FAQ />
         <Footer />
      </div>
   );
};

export default IbetoMainSite;
