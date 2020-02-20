import React from "react";

const BrowserUsageCard = () => {
  return (
    <div className="box box-default">
      <div className="box-header with-border">
        <h3 className="box-title">Browser Usage</h3>

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
      <div className="box-body">
        <div className="row">
          <div className="col-md-8">
            <div className="chart-responsive">
              <canvas id="pieChart" height="150"></canvas>
            </div>
          </div>
          <div className="col-md-4">
            <ul className="chart-legend clearfix">
              <li>
                <i className="fa fa-circle-o text-red"></i> Chrome
              </li>
              <li>
                <i className="fa fa-circle-o text-green"></i> IE
              </li>
              <li>
                <i className="fa fa-circle-o text-yellow"></i> FireFox
              </li>
              <li>
                <i className="fa fa-circle-o text-aqua"></i> Safari
              </li>
              <li>
                <i className="fa fa-circle-o text-light-blue"></i> Opera
              </li>
              <li>
                <i className="fa fa-circle-o text-gray"></i> Navigator
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="box-footer no-padding">
        <ul className="nav nav-pills nav-stacked">
          <li>
            <a href="#">
              United States of America
              <span className="pull-right text-red">
                <i className="fa fa-angle-down"></i> 12%
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              India{" "}
              <span className="pull-right text-green">
                <i className="fa fa-angle-up"></i> 4%
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              China
              <span className="pull-right text-yellow">
                <i className="fa fa-angle-left"></i> 0%
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrowserUsageCard;
