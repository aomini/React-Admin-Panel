import React, { Component } from "react";

export default class PageTitle extends Component {
  render() {
    const { title } = this.props;
    return (
      <section className="content-header">
        <h1>
          {title}
          <small>Control panel</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="#">
              <i className="fa fa-dashboard"></i> Home
            </a>
          </li>
          <li className="active">Dashboard</li>
        </ol>
      </section>
    );
  }
}
