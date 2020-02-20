import React from "react";

const InfoBox = () => {
  return (
    <div>
      <div className="info-box bg-yellow">
        <span className="info-box-icon">
          <i className="ion ion-ios-pricetag-outline"></i>
        </span>

        <div className="info-box-content">
          <span className="info-box-text">Inventory</span>
          <span className="info-box-number">5,200</span>

          <div className="progress">
            <div className="progress-bar" style={{ width: "50%" }}></div>
          </div>
          <span className="progress-description">50% Increase in 30 Days</span>
        </div>
      </div>
      <div className="info-box bg-green">
        <span className="info-box-icon">
          <i className="ion ion-ios-heart-outline"></i>
        </span>

        <div className="info-box-content">
          <span className="info-box-text">Mentions</span>
          <span className="info-box-number">92,050</span>

          <div className="progress">
            <div className="progress-bar" style={{ width: "20%" }}></div>
          </div>
          <span className="progress-description">20% Increase in 30 Days</span>
        </div>
      </div>
      <div className="info-box bg-red">
        <span className="info-box-icon">
          <i className="ion ion-ios-cloud-download-outline"></i>
        </span>

        <div className="info-box-content">
          <span className="info-box-text">Downloads</span>
          <span className="info-box-number">114,381</span>

          <div className="progress">
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
          <span className="progress-description">70% Increase in 30 Days</span>
        </div>
      </div>
      <div className="info-box bg-aqua">
        <span className="info-box-icon">
          <i className="ion-ios-chatbubble-outline"></i>
        </span>

        <div className="info-box-content">
          <span className="info-box-text">Direct Messages</span>
          <span className="info-box-number">163,921</span>

          <div className="progress">
            <div className="progress-bar" style={{ width: "40%" }}></div>
          </div>
          <span className="progress-description">40% Increase in 30 Days</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
