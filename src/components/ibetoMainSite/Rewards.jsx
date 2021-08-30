import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../stylesheet/MainSiteStyle.css";
import "../stylesheet/CommonStyle.css";
import "../stylesheet/ResponsiveStyle.css";
import reward from "../images/reward.svg";

const Rewards = () => {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);

  return (
    <div className="container-fluid rewards-row  ">
      <div className="justify-content-center row" id="Rewards">
        <div data-aos="fade-right" className="col-md-4 col-sm-6">
          <img src={reward} alt="reward" className="rewards-img img-fluid" />
        </div>

        <div className="col-md-8 col-sm-6" data-aos="fade-left">
          <h2 className="heading reward-heading">
            Rew<span>ards</span>
          </h2>
          <br />
          <ul className="content rewards-list">
            <li>
              Exciting prizes worth 1,00,000/- from the organizers for the top 3
              teams.
            </li>
            <li>
              A select few finalist teams that meet the required T&Cs, shall be
              eligible to be a part of “Forge” the pre-incubation program under
              IEDC MEC, and will be able to avail its services, that include
              mentorship from industry experts and other support to convert the
              product into an MVP (Minimum Viable Product). There is a
              possibility of funding from the Kerala Startup Mission after
              completion of the program.
            </li>
            <li>
              Fellowship from Pehia powered by corporate companies for
              top-performing teams
            </li>
            <li>
              Certificate of Participation will be awarded, signed by the
              concerned authorities.
            </li>
            <li>
              As per KTU regulations, socially relevant projects can avail upto{" "}
              50 activity points.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
