import React from "react";
import "./Show.css";

const Show = () => {
  return (
    <div className="show">
      <span>Choose Your Plan</span>
      <div className="head">
        <span>
          Let's choose the package that is best for you and explore it happily
          and <br />
          cheerfully.
        </span>
        </div>
        <div className="grid-container">
          {/* Plan-1 */}
          <div className="col1">
            <img src="/Images/Free.svg" className="img" />
            <span className="title">Free Plan</span>
            <div className="free-list">
              <ul style={{ listStyleType: "none" }}>
                <li>Unlimited Bandwitch</li>

                <li>Encrypted Connection</li>

                <li>No Traffic Logs</li>

                <li>Works on All Devices</li>
              </ul>
            </div>
            <span className="footer">Free</span>
            <button className="btn">
              Select
            </button>
          </div>

          {/* Plan-2 */}
          <div className="col2">
            <img src="/Images/Free.svg" className="img" />
            <span className="title">Standard Plan</span>
            <div className="free-list">
              <ul style={{ listStyleType: "none" }}>
                <li>Unlimited Bandwitch</li>

                <li>Encrypted Connection</li>

                <li>No Traffic Logs</li>

                <li>Works on All Devices</li>
              </ul>
            </div>
            <span className="footer">
              $9 <span className="mon">/ mo</span>
            </span>
            <button className="btn">
              Select
            </button>
          </div>

          {/* Plan-3 */}
          <div className="col3">
            <img src="/Images/Free.svg" className="img" />
            <span className="title">Premium Plan</span>
            <div className="free-list">
              <ul style={{ listStyleType: "none" }}>
                <li>Unlimited Bandwitch</li>

                <li>Encrypted Connection</li>

                <li>No Traffic Logs</li>

                <li>Works on All Devices</li>
              </ul>
            </div>
            <span className="footer">
              $12<span className="price">/mo</span>
            </span>
            <button className="btn-sec">
              Select
            </button>
          </div>
        </div>
      
    </div>
  );
};
export default Show;
