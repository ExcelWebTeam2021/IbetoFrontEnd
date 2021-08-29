import React, { useRef, useState, useEffect } from "react";
import lottie from "lottie-web";
import ReactTooltip from "react-tooltip";

import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

import video from "./video.mp4";

const LandingPage = () => {
  const starting_animation = useRef(null);
  const vidRef = useRef(null);
  const vidButtonRef = useRef(null);

  let [toggle, setToggle] = useState(false);
  let [style, setstyle] = useState("block");
  let [style2, setstyle2] = useState("none");
  const [hidePlayBtn, sethidePlayBtn] = useState(false);

  useEffect(() => {
    const anime1 = lottie.loadAnimation({
      container: starting_animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animations/Bkanimation.json"),
    });

    return () => {
      anime1.destroy();
    };
  }, []);

  const handleMute = () => {
    setToggle(!toggle);
    vidButtonRef.current.muted = toggle;
    console.log("Button is toggled", toggle);
  };

  const handleClick = () => {
    setstyle2("block");
    setstyle("none");
    vidRef.current.play();
    vidButtonRef.current.classList.add("is-playing");
    sethidePlayBtn(true);
  };

  // pause on the last frame
  const hasEnded = () => {
    console.log(vidRef.current.currentTime);
    if (vidRef.current.currentTime > 100) {
      console.log("end reached");
      vidRef.current.pause();
    }
  };

  return (
    <main id="Home" className="">
      {/* video */}
      <div
        ref={vidButtonRef}
        style={{ display: style2 }}
        className=" actual-line-animation video video__play-button"
      >
        <video
          muted={toggle}
          ref={vidRef}
          src={video}
          onTimeUpdate={hasEnded}
        ></video>
      </div>

      {/* Initial json animation */}
      <div
        className="animation-container darker-bk"
        style={{ display: style }}
        ref={starting_animation}
      ></div>

      {/* Play btn */}
      {!hidePlayBtn && (
        <div className="btn-container">
          <div className="bg"></div>
          <div className="buttons" onClick={handleClick}>
            <i className="fa fa-play play-btn"></i>
          </div>
        </div>
      )}

      {/* Mute or unmute */}
      <button className="btn-mute" onClick={handleMute}>
        {" "}
        {!toggle ? (
          <div className="mutess">
            <a data-tip data-for="volup">
              <i className="fa fa-volume-up "></i>{" "}
            </a>
            <ReactTooltip id="volup">
              <span>Mute audio</span>
            </ReactTooltip>
          </div>
        ) : (
          <div className="mutess">
            <a data-tip data-for="mute">
              {" "}
              <i className="fa  fa-volume-off"></i>{" "}
            </a>
            <ReactTooltip id="volup">
              <span>Unmute audio</span>
            </ReactTooltip>
          </div>
        )}
      </button>

      <div className="wave-pattern">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default LandingPage;
