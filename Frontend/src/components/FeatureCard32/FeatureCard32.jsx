import React from "react";

import "./FeatureCard32.css";

const FeatureCard32 = (props) => {
  return (
    <div className={`feature-card32-feature-card ${props.rootClassName} `}>
      <svg viewBox="0 0 1024 1024" className="feature-card32-icon">
        {props.icon}
      </svg>
      <h2 className="feature-card32-text">{props.title}</h2>
      <span className="feature-card32-text1">{props.description}</span>
    </div>
  );
};

export default FeatureCard32;
