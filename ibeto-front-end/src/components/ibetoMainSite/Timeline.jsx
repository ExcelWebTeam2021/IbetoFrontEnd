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
                  <span class="time"> 31st August, 2021</span> <br/>
                  <span class="flag">IBeTo Launch</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200' >
                  <span class="hexa"></span>
                  <span class="time">12th September 2021</span> <br/>
                  <span class="flag">IBeTo Registration Closes</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time"> 23rd September 2021</span> <br/>
                  <span class="flag">Idea submission Deadline.</span>
                </div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time">27th September 2021</span> <br/>
                  <span class="flag">Announcement of shortlisted teams.</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time"> 7th October 2021</span> <br/>
                  <span class="flag">Detailed Abstract Submission.</span>
                </div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time">15th October 2021</span> <br/>
                  <span class="flag">Announcement of shortlisted teams.</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time">15th November 2021</span> <br/>
                  <span class="flag">Pitch Deck Submission.</span>
                </div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time">25th November 2021</span> <br/>
                  <span class="flag">
                    Announcement of shortlisted teams(25 teams) .
                  </span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time"> 26th November 2021</span> <br/>
                  <span class="flag">
                    Project implementation and development.
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div class="direction-l">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time">23rd January 2022</span> <br/>
                  <span class="flag">Completion of project.</span>
                </div>
              </div>
            </li>

            <li>
              <div class="direction-r">
                <div class="flag-wrapper"  data-aos='fade-in' data-aos-delay='200'>
                  <span class="hexa"></span>
                  <span class="time"> November 2021</span> <br/>
                  <span class="flag">
                    Final video presentation of the project-
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
