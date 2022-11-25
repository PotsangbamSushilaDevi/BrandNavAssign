import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="Illustration2">
        <img src="./Images/Illustration 2.svg" />
      </div>
      {/* right side */}
      <div className="awesome">
        <span>We Provide Many</span>
        <span>Features You Can Use</span>

        <span>You can explore the features that we provide with fun and </span>
        <span className="func">have their own functions each feature.</span>

        <div className="Tick">
          <ul style={{ listStyleType: "none" }}>
            <li>Powerful online protection.</li>

            <li>Internet without borders.</li>

            <li>Supercharged VPN.</li>

            <li>No specific time limits.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Services;
