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
import "../stylesheet/Cursor.css";


const IbetoMainSite = () => {
  
      const cursor = document.querySelector('.cursor');
      document.addEventListener('mousemove', e => {
         cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
     })
  
     document.addEventListener('click', () => {
         cursor.classList.add("expand");
  
         setTimeout(() => {
             cursor.classList.remove("expand");
         }, 500)
     })
  
   

   
      
      {/*document.addEventListener("mousemove", function (e) {
      console.log("MOVED", e);
      var to_append = document.getElementsByClassName("entire-container")[0];
      var all = document.getElementsByClassName("entire-container");

      var parent_div = document.createElement("div");
      parent_div.className = "entire-container";
      var inner_div = document.createElement("div");
      inner_div.className = "cursor";
      parent_div.appendChild(inner_div);
      var d = document.body.appendChild(parent_div);

      parent_div.style.left = e.clientX - 50 + "px";
      parent_div.style.top = e.clientY - 50 + "px";

      if (document.getElementsByClassName("entire-container").length > 100) {
         document.body.removeChild(to_append);
      }
     
   });*/}
   return (
      <div className='ibeto-mainsite'>
         <div>
            {/*{" "}*/}
            <div className="cursor" />
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
