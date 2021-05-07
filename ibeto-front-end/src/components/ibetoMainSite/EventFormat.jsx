import React from 'react'
import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

export default function EventFormat() {
    return (
        <div className="container-fluid">
            <div class="event-format">
                <div className="event-header">
                    <h1>Event Format</h1>
                </div>
                <div className="event-body">
                    <div className="row">
                        <div class="event-box col-lg-4">
                            <img src="../images/event-img1" alt=""/>
                            <span class="phase">Phase 1</span>
                            <h3 class="event-title">First</h3>
                            <p class="event-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div class="event-box col-lg-4">
                            <span class="phase">Phase 2</span>
                            <h3 class="event-title">Second</h3>
                            <p class="event-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div class="event-box col-lg-4">
                            <span class="phase">Phase 3</span>
                            <h3 class="event-title">Third</h3>
                            <p class="event-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>


                    </div>





                </div>
            </div>
        </div>
    )
}


