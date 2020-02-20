import React, { Component } from "react";
import PageTitle from "./PageTitle";
import Dashboard from "../pages/Dashboard/Dashboard";
import Dashboard2 from "../pages/Dashboard2/Dashboard2";

class Content extends Component {
  components = {
    dashboard: Dashboard,
    dashboard2: Dashboard2
  };

  render() {
    const { contentTag } = this.props;
    const ContentTagName = this.components[contentTag || "dashboard"];
    return (
      <div className="content-wrapper">
        <PageTitle {...this.props} />
        <ContentTagName />
      </div>
    );
  }
}

export default Content;
