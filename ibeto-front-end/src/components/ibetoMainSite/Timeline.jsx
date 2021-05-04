import React from 'react';
import "../stylesheet/Timeline.css";


const Timeline = () => {
    return (
            <div className="container center">
                <h3 className="card-title">Timeline Style</h3>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-timeline3">
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2018</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Web Desginer</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2017</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Web Developer</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2016</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Web Desginer</h3>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                    </p>
                                </div>
                            </div>
                            <div className="timeline">
                                <div className="timeline-icon"><span className="year">2015</span></div>
                                <div className="timeline-content">
                                    <h3 className="title">Web Developer</h3>
                                    <p className="description">
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