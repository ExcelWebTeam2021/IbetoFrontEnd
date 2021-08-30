import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";

import "../stylesheet/CommonStyle.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/ResponsiveStyle.css";

const ProblemStmts = () => {
  const sdg1 = useRef(null);
  const sdg2 = useRef(null);
  const sdg3 = useRef(null);
  const sdg4 = useRef(null);
  const sdg5 = useRef(null);
  const sdg6 = useRef(null);
  useEffect(() => {
    const sdg1_animation = lottie.loadAnimation({
      container: sdg1.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animations/SGD/GoodHealth.json"),
    });
    const sdg2_animation = lottie.loadAnimation({
      container: sdg2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animations/SGD/Affordable.json"),
    });
    const sdg3_animation = lottie.loadAnimation({
      container: sdg3.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animations/SGD/GenderEquality.json"),
    });
    const sdg4_animation = lottie.loadAnimation({
      container: sdg4.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animations/SGD/QualityEduction.json"),
    });
    const sdg5_animation = lottie.loadAnimation({
      container: sdg5.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animations/SGD/climateActionsdg.json"),
    });
    const sdg6_animation = lottie.loadAnimation({
      container: sdg6.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./animations/SGD/innovation.json"),
    });
    AOS.init({ duration: 1000 });
    return () => {
      sdg1_animation.destroy();
      sdg2_animation.destroy();
      sdg3_animation.destroy();
      sdg4_animation.destroy();
      sdg5_animation.destroy();
      sdg6_animation.destroy();
    };
  }, []);
  return (
    <div className="container-fluid" id="ProblemStatement">
      <div className="">
        <h2 className="container heading mt-5 text-center">
          Problem <span>Statement</span>
        </h2>
      </div>
      <div className="row problem-stmt-row">
        {/* SGD1 */}
        <div
          className="card-container col-md-4  col-sm-10 col-xs-12 "
          data-aos="fade-in"
        >
          <div className="card card-front button-shadow" ref={sdg1}></div>
          <div className="card card-back button-shadow">
            <div className="card-block">
              <h4 className="card-title text-center ">
                Good Health And Well-Being{" "}
              </h4>
              <span>
                <p className=" text-muted sdg-number">SDG 3</p>
              </span>
              <p className="card-text">
                Ensure health and well-being for all, at every stage of life.
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1ogwgsl0za8wBlw_bXdU-crF4ipCW2pp3DE8eGb_NOkI/edit#bookmark=id.k37gcnybyswx"
              >
                <button
                  className="button btn-sm view-sample-stmt-btn "
                  style={{ textDecoration: "none" }}
                >
                  View Sample statements
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* SGD2 */}
        <div
          className="card-container col-md-4  col-sm-10 col-xs-12 "
          data-aos="fade-in"
          data-aos-delay="150"
        >
          <div className="card card-front button-shadow" ref={sdg2}></div>
          <div className="card card-back button-shadow">
            <div className="card-block">
              <h4 className="card-title text-center">
                Affordable And Clean Energy
              </h4>
              <span>
                <p className=" text-muted sdg-number">SDG 7</p>
              </span>
              <p className="card-text">
                Ensure access to affordable, reliable, sustainable, and modern
                energy for all.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1ogwgsl0za8wBlw_bXdU-crF4ipCW2pp3DE8eGb_NOkI/edit#bookmark=id.pyj5gds53ohz"
              >
                <button className="button btn-sm view-sample-stmt-btn">
                  View Sample statements
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* SGD3 */}
        <div
          className="card-container col-md-4  col-sm-10 col-xs-12 "
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <div className="card card-front button-shadow" ref={sdg3}></div>
          <div className="card card-back button-shadow">
            <div className="card-block">
              <h4 className="card-title text-center">Gender Equality</h4>
              <span>
                <p className=" text-muted sdg-number">SDG 5</p>
              </span>
              <p className="card-text">
                Achieve gender equality and empower all gender minorities.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1ogwgsl0za8wBlw_bXdU-crF4ipCW2pp3DE8eGb_NOkI/edit#bookmark=id.7vhe4bfa4d5j"
              >
                <button className="button btn-sm view-sample-stmt-btn">
                  View Sample statements
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* SGD4 */}
        <div
          className="card-container col-md-4  col-sm-10 col-xs-12 "
          data-aos="fade-in"
          data-aos-delay=""
        >
          <div className="card card-front button-shadow" ref={sdg4}></div>
          <div className="card card-back button-shadow">
            <div className="card-block">
              <h4 className="card-title text-center">Quality Education</h4>
              <span>
                <p className=" text-muted sdg-number">SDG 4</p>
              </span>
              <p className="card-text">
                Ensuring inclusive and equitable quality education and promotes
                lifelong learning opportunities for all.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1ogwgsl0za8wBlw_bXdU-crF4ipCW2pp3DE8eGb_NOkI/edit#bookmark=id.ktrdexnul1pw"
              >
                <button className="button btn-sm view-sample-stmt-btn">
                  View Sample statements
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* SGD5 */}
        <div
          className="card-container col-md-4  col-sm-10 col-xs-12 "
          data-aos="fade-in"
          data-aos-delay="150"
        >
          <div className="card card-front button-shadow" ref={sdg5}></div>
          <div className="card card-back button-shadow">
            <div className="card-block">
              <h4 className="card-title text-center">Climate Action</h4>
              <span>
                <p className=" text-muted sdg-number">SDG 13</p>
              </span>
              <p className="card-text">
                Take action to combat climate change and its impacts.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1ogwgsl0za8wBlw_bXdU-crF4ipCW2pp3DE8eGb_NOkI/edit#bookmark=id.3dfax6nqftmr"
              >
                <button className="button btn-sm view-sample-stmt-btn">
                  View Sample statements
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* SGD6 */}
        <div
          className="card-container col-md-4  col-sm-10 col-xs-12 "
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <div className="card card-front button-shadow" ref={sdg6}></div>
          <div className="card card-back button-shadow">
            <div className="card-block">
              <h4 className="card-title text-center">Open Innovation</h4>

              <p className="card-text">
                <br />
                Any other socially relevant problem statement
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStmts;
