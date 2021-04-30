import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import Rewards from "./Rewards";
import Contact from "./Contact";
import Footer from "./Footer";

const IbetoMainSite = () => {
   return (
      <div>
         <Navbar />
         <LandingPage />
         <About />
         <Rewards />
         <Contact />
         <Footer />
      </div>
   );
};

export default IbetoMainSite;
