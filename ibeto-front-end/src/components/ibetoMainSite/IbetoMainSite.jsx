import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import Rewards from "./Rewards";
import Contact from "./Contact";
import Footer from "./Footer";
import Junior from "./Junior";
import Timeline from "./Timeline";
import Testimonials from "./Testimonials"
import ProblemStmts from "./ProblemStmts";

const IbetoMainSite = () => {
   return (
      <div>
         <Navbar />
         <LandingPage />
         <About />
         <ProblemStmts />
         <Rewards />
         <Timeline />
         <Junior />
         <Testimonials />
         <Contact />
         <Footer />
      </div>
   );
};

export default IbetoMainSite;
