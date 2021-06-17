import React, { useState } from "react";
import "../stylesheet/MainSiteStyle.css";

const Navbar = () => {
   const [checked, setChecked] = useState(false);
   const handleClick = () => setChecked(!checked);

   return (
      <div className='menu-wrap'>
         <input type='checkbox' className='toggler' onClick={handleClick} checked={checked} />
         <div className='hamburger'>
            <div></div>
         </div>
         <div className='menu'>
            <div>
               <div>
                  <ul className='overlay-content pt-2'>
                     <li onClick={handleClick}>
                        <a href='#Junior-Home'>Home</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#Junior-About'>About</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#Junior-EventFormat'>Event Format</a>
                     </li>
                     <li onClick={handleClick}>
                        <a href='#Junior-Testimonials'>Testimonials</a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
