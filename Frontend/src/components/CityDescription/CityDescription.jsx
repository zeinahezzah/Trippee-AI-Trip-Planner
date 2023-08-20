import React from "react";
import FeatureCard32 from "../FeatureCard32/FeatureCard32";
import "./CityDescription.css";

const CityExplorationPage = (props) => {
  return (
    <div className="city-exploration-page-container">
      <div className="city-exploration-page-features">
        <h1 className="city-exploration-page-text">
          <span>Paris</span>
          <br></br>
          <span></span>
        </h1>
        <span className="city-exploration-page-text03">
          <span>
            Paris known as the "City of light" is the capital city of France,
            and the largest city in France. Paris is known for its gorgeous,
            imposing monuments. These iconic structures, often an exemplar of a
            particular era in architecture, are one of the city's instantly
            recognizable elements.​
          </span>
          <span></span>
        </span>
        <div className="city-exploration-page-container4">
          <FeatureCard32
            title="Location"
            description="located in Europe, northern central France"
          />
          <FeatureCard32 title="Visa requirements" />
          <FeatureCard32 title="Currency" description="Euro" />
          <FeatureCard32 title="Safety" description="" />
        </div>
      </div>
      <div className="city-exploration-page-stats">
        <div className="city-exploration-page-stat">
          <h1 className="city-exploration-page-text06">
            <span>50</span>
            <span>+</span>
          </h1>
          <span className="city-exploration-page-text09">Happy clients</span>
          <span className="city-exploration-page-text10">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="city-exploration-page-stat1">
          <h1 className="city-exploration-page-text11">
            <span>369</span>
          </h1>
          <span className="city-exploration-page-text13">
            Projects completed
          </span>
          <span className="city-exploration-page-text14">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="city-exploration-page-stat2">
          <h1 className="city-exploration-page-text15">
            <span>500</span>
            <span>+</span>
          </h1>
          <span className="city-exploration-page-text18">Hours</span>
          <span className="city-exploration-page-text19">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
        <div className="city-exploration-page-stat3">
          <h1 className="city-exploration-page-text20">
            <span>24/7</span>
          </h1>
          <span className="city-exploration-page-text22">Support</span>
          <span className="city-exploration-page-text23">
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CityExplorationPage;
