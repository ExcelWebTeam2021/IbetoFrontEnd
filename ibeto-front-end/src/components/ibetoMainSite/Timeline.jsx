import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import "../stylesheet/Timeline.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mt-5 " id="Timeline">
      <div className=" mainsite-timeline-row ">
        <h2 align="center" className="heading ">
          Timel<span>ine</span>
        </h2>

        <div className="row">
          <ul class="timeline">
            <li>
              <div class="direction-r">
                <div class="flag-wrapper"   >
                  <span class="hexa"></span>
                  <span class="time content"> 31st August 2021</span> <br/>
                  <span class="flag content">IBeTo Launch</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200' >
                  <span class="hexa"></span>
                  <span class="time content">12th September 2021</span> <br/>
                  <span class="flag content">IBeTo Registration Closes</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time content"> 23rd September 2021</span> <br/>
                  <span class="flag content">Idea submission Deadline</span>
                </div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time content">27th September 2021</span> <br/>
                  <span class="flag content">Announcement of shortlisted teams</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time content"> 7th October 2021</span> <br/>
                  <span class="flag content">Detailed Abstract Submission</span>
                </div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time content">15th October 2021</span> <br/>
                  <span class="flag content">Announcement of shortlisted teams</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time content">15th October - 31st December 2021
</span> <br/>
                  <span class="flag content">Project implementation and development</span>
                </div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time content">25th November 2021</span> <br/>
                  <span class="flag content">
                    Announcement of 25 shortlisted teams
                  </span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time content"> First week of January </span> <br/>
                  <span class="flag content">
                  Final video presentation of the project
                  </span>
                </div>
              </div>
            </li>
         </ul>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
