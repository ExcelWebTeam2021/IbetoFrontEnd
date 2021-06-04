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
   document.addEventListener("mousemove", function (e) {
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

      let mousePosX = 0,
         mousePosY = 0,
         mouseCircle = document.getElementById("mouse-circle");

      document.onmousemove = (e) => {
         mousePosX = e.pageX;
         mousePosY = e.pageY;
      };

      let delay = 6,
         revisedMousePosX = 0,
         revisedMousePosY = 0;

      function delayMouseFollow() {
         requestAnimationFrame(delayMouseFollow);

         revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
         revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

         mouseCircle.style.top = revisedMousePosY + "px";
         mouseCircle.style.left = revisedMousePosX + "px";
      }
      delayMouseFollow();
   });
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
