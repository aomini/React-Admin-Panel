import React from "react";

const VisitorsReport = () => {
  return (
    <div className="box box-success">
      <div className="box-header with-border">
        <h3 className="box-title">Visitors Report</h3>

        <div className="box-tools pull-right">
          <button
            type="button"
            className="btn btn-box-tool"
            data-widget="collapse"
          >
            <i className="fa fa-minus"></i>
          </button>
          <button
            type="button"
            className="btn btn-box-tool"
            data-widget="remove"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>
      <div className="box-body no-padding">
        <div className="row">
          <div className="col-md-9 col-sm-8">
            <div className="pad">
              <div id="world-map-markers" style={{ height: "325px" }}></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-4">
            <div
              className="pad box-pane-right bg-green"
              style={{ minHeight: "280px" }}
            >
              <div className="description-block margin-bottom">
                <div className="sparkbar pad" data-color="#fff">
                  90,70,90,70,75,80,70
                </div>
                <h5 className="description-header">8390</h5>
                <span className="description-text">Visits</span>
              </div>
              <div className="description-block margin-bottom">
                <div className="sparkbar pad" data-color="#fff">
                  90,50,90,70,61,83,63
                </div>
                <h5 className="description-header">30%</h5>
                <span className="description-text">Referrals</span>
              </div>
              <div className="description-block">
                <div className="sparkbar pad" data-color="#fff">
                  90,50,90,70,61,83,63
                </div>
                <h5 className="description-header">70%</h5>
                <span className="description-text">Organic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitorsReport;
