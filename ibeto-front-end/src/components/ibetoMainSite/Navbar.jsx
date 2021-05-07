import React,{ useEffect } from "react";
import "../stylesheet/MainSiteStyle.css";

import useJquery from 'react-use-jquery';



const Navbar = () => {
   const $=useJquery();
   useEffect(()=>{
      $(document).ready(function() {
      $('#menu-toggle, #menu > ul > li > a').click(function(e) { 
          var $toggle = $(this); 
          var $menu = $('#' + $(this).attr('aria-controls')); 
      
          if ($menu.attr('aria-hidden') == 'true') {
              $('body').addClass('open');
              $menu.attr('aria-hidden', 'false');
              $toggle.attr('aria-expanded', 'true');
          }
          else if ($menu.attr('aria-hidden') == 'false') {
              $('body').removeClass('open');
              $menu.attr('aria-hidden', 'true');
              $toggle.attr('aria-expanded', 'faremove'); 
          }
      });
   });
   })
   
   return <div className='navbar'>
      <header class="banner">
         <button id="menu-toggle" aria-label="Menu" aria-expanded="false" aria-controls="menu"></button>
         <div class="brand"><a href=""></a></div>
      </header>
      <nav id="menu" aria-hidden="true" aria-labelledby="menu-toggle" role="navigation">
         <ul>
            <li><a href="">I</a></li>
            <li><a href="">B</a></li>
            <li><a href="">E</a></li>
            <li><a href="">T</a></li>
            <li><a href="">o</a></li> 
         </ul>
      </nav>
   </div>;
};

export default Navbar;
