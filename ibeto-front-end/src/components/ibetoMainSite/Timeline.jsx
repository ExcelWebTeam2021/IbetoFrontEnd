import React from 'react';
import "../stylesheet/Timeline.css";

const Timeline = () => {
    return (
            <div className="container mb-5">
                <h3 className="heading timeline-head3">Timeline</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline3">
                            <div className="timeline3">
                                <div className="timeline-icon3"><span className="year3">2018</span></div>
                                <div className="timeline-content3">
                                    <h3 className="title3">Web Desginer</h3>
                                    <p className="description3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline3">
                                <div className="timeline-icon3"><span className="year3">2017</span></div>
                                <div className="timeline-content3">
                                    <h3 className="title3">Web Developer</h3>
                                    <p className="description3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline3">
                                <div className="timeline-icon3"><span className="year3">2016</span></div>
                                <div className="timeline-content3">
                                    <h3 className="title3">Web Desginer</h3>
                                    <p className="description3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline3">
                                <div className="timeline-icon3"><span className="year3">2015</span></div>
                                <div className="timeline-content3">
                                    <h3 className="title3">Web Developer</h3>
                                    <p className="description3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    );
}

export default Timeline;