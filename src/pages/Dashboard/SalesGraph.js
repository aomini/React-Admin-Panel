import React, { Component } from "react";

export default class SalesGraph extends Component {
  render() {
    return (
      <div className="box box-solid bg-teal-gradient">
        <div className="box-header">
          <i className="fa fa-th"></i>

          <h3 className="box-title">Sales Graph</h3>

          <div className="box-tools pull-right">
            <button
              type="button"
              className="btn bg-teal btn-sm"
              data-widget="collapse"
            >
              <i className="fa fa-minus"></i>
            </button>
            <button
              type="button"
              className="btn bg-teal btn-sm"
              data-widget="remove"
            >
              <i className="fa fa-times"></i>
            </button>
          </div>
        </div>
        <div className="box-body border-radius-none">
          <div
            className="chart"
            id="line-chart"
            style={{ height: "250px" }}
          ></div>
        </div>
        <div className="box-footer no-border">
          <div className="row">
            <div
              className="col-xs-4 text-center"
              style={{ borderRight: "1px solid #f4f4f4" }}
            >
              <input
                type="text"
                className="knob"
                data-readonly="true"
                data-width="60"
                data-height="60"
                data-fgcolor="#39CCCC"
              />

              <div className="knob-label">Mail-Orders</div>
            </div>
            <div
              className="col-xs-4 text-center"
              style={{ borderRight: "1px solid #f4f4f4" }}
            >
              <input
                type="text"
                className="knob"
                data-readonly="true"
                data-width="60"
                data-height="60"
                data-fgcolor="#39CCCC"
              />

              <div className="knob-label">Online</div>
            </div>
            <div className="col-xs-4 text-center">
              <input
                type="text"
                className="knob"
                data-readonly="true"
                // value="30"
                data-width="60"
                data-height="60"
                data-fgcolor="#39CCCC"
              />

              <div className="knob-label">In-Store</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
