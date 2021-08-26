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
          Time<span>line</span>
        </h2>

        <div className="row">
          <ul className="timeline">
            <li>
              <div className="direction-r">
                <div className="flag-wrapper"   >
                  <span className="hexa"></span>
                  <span className="time content"> 31st August 2021</span> <br/>
                  <span className="flag content">IBeTo Launch</span>
                </div>
              </div>
            </li>

            <li>
              <div className="direction-l">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200' >
                  <span className="hexa"></span>
                  <span className="time content">10th September 2021</span> <br/>
                  <span className="flag content">IBeTo Registration Closes</span>
                </div>
              </div>
            </li>

            <li>
              <div className="direction-r">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span className="hexa"></span>
                  <span className="time content"> 23rd September 2021</span> <br/>
                  <span className="flag content">Idea submission Deadline</span>
                </div>
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span className="hexa"></span>
                  <span className="time content">27th September 2021</span> <br/>
                  <span className="flag content">Announcement of shortlisted teams</span>
                </div>
              </div>
            </li>

            <li>
              <div className="direction-r">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span className="hexa"></span>
                  <span className="time content"> 7th October 2021</span> <br/>
                  <span className="flag content">Detailed Abstract Submission</span>
                </div>
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span className="hexa"></span>
                  <span className="time content">14th October 2021</span> <br/>
                  <span className="flag content">Announcement of shortlisted teams</span>
                </div>
              </div>
            </li>

            <li>
              <div className="direction-r">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span className="hexa"></span>
                  <span className="time content">15th October - 31st December 2021
</span> <br/>
                  <span className="flag content">Project implementation and development</span>
                </div>
              </div>
            </li>
            <li>
              <div className="direction-l">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span className="hexa"></span>
                  <span className="time content">25th November 2021</span> <br/>
                  <span className="flag content">
                    Announcement of 25 shortlisted teams
                  </span>
                </div>
              </div>
            </li>

            <li>
              <div className="direction-r">
                <div className="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span className="hexa"></span>
                  <span className="time content"> First week of January </span> <br/>
                  <span className="flag content">
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
