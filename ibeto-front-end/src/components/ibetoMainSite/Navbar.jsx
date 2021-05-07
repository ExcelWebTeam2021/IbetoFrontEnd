import React, { useEffect } from "react";
import "../stylesheet/MainSiteStyle.css";

const Navbar = () => {
   function openNav() {
      document.getElementById("myNav").style.width = "100%";
   }
   function closeNav() {
      document.getElementById("myNav").style.width = "0%";
   }

   return (
      <div className='navbar'>
         <div id='myNav' class='overlay'>
            <a href='javascript:void(0)' class='closebtn' onClick={closeNav}>
               &times;
            </a>
            <div class='overlay-content'>
               <a href='#'>About</a>
               <a href='#'>Services</a>
               <a href='#'>Clients</a>
               <a href='#'>Contact</a>
            </div>
         </div>

         <nav class='navbar navbar-expand navbar-light bg-light'>
            <a class='navbar-brand' href='#'></a>
            <div>
               <span onClick={openNav} style={{ position: "fixed" }}>
                  &#9776;{" "}
               </span>
               <></>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
