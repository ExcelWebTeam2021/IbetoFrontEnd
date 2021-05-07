import React from "react";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const Footer = () => {
    return <div className='footer'>
        <footer class="section section-8 flex-rw">
            <div className="footerDiv">
                <div className="footerIbeto">
                    <a href="http://www.mec.ac.in">
                        <img src="../images/Copy of mec_logo.png" alt=""/>
                    </a>
                </div>
                <div className="icon1">
                    <a href="//twitter.com/excelmec?lang=en">
                        <img src="../images/tweet.svg" alt=""/>
                    </a>
                </div>
                <div className="icon2">
                    <a href="//www.facebook.com/excelmec/">
                        <img src="../images/fb.svg" alt=""/>
                    </a>
                </div>
                 <div className="icon3">
                    <a href="//www.instagram.com/excelmec/?hl=en">
                        <img src="../images/instagram (2).png" alt=""/>
                    </a>
                </div>
                <div className="footerExcel">
                    <a href="//www.excelmec.org">
                        <img src="../images/excel 2019.png" alt=""/>
                    </a>
                </div>
                
                <div className="Excelbrand">
                          {/* <span>Made with <i class="far fa-heart" style="color:coral;"></i> Excel 2019</span> */}  
                           {/* Font awesome heart not working */}
                          <span>Made with  Excel 2019</span>
                </div> 
            </div>
        </footer>
    </div>;
        // <div className='footer'>
        //     <footer class="section section-8 flex-rw">
        //         <div class="footerDiv">
        //             <div class="footerIbeto">
        //                 <a href="http://www.mec.ac.in/">
        //                     <img src="../images/Copy of mec_logo.png" />
        //                 </a>
        //             </div>
        //             <div class="icon1">
        //                 <a href="//twitter.com/excelmec?lang=en">
        //                     <img src="../images/tweet.svg" />
        //                 </a>

        //             </div>
        //             <div class="icon2">
        //                 <a href="//www.facebook.com/excelmec/">
        //                     <img src="../images/fb.svg" />
        //                 </a>
        //             </div>
        //             <div class="icon3">
        //                 <a href="//www.instagram.com/excelmec/?hl=en">
        //                     <img src="../images/instagram (2).png" />
        //                 </a>
        //             </div>
        //             <div class="footerExcel">
        //                 <a href="//excelmec.org">
        //                     <img src="../images/excel 2019.png" />
        //                 </a>
        //             </div>
        //             <div class="Excelbrand">
        //                 <span>Made with <i class="far fa-heart" style="color:coral;"></i> Excel 2019</span>
        //             </div>
        //         </div>
        //     </footer>
        // </div>
    
};

export default Footer;
