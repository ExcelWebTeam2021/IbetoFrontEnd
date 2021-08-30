import React, { useState } from "react";
import "../stylesheet/MainSiteStyle.css";

const Navbar = () => {
   const [checked, setChecked] = useState(false);
   const handleClick = () => setChecked(!checked);

   return (
      <div className='menu-wrap'>
         <input type='checkbox' className='toggler' onClick={handleClick} checked={checked} onChange={(e) => {}} />
         <div className='hamburger'>
            <div></div>
         </div>
         <div className='menu'>
            <div>
               <div>
                  <ul className='overlay-content pt-2'>
                     <li onClick={handleClick}>
                        <a href='#home'>Home</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#about'>About</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#event_format'>Event Format</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#testimonials'>Testimonials</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
