import React, { Component } from "react";

import Summary from "./Summary";
import MonthlyReport from "./MonthlyReport";
import VisitorsReport from "./VisitorsReport";
import OrderTable from "./OrderTable";

import SingleChat from "../../components/SingleChat";
import UserCard from "../../components/UserCard";
import InfoBox from "../../components/InfoBox";
import BrowserUsageCard from "../../components/BrowserUsageCard";
import ProductCard from "../../components/ProductCard";

class Dashboard2 extends Component {
  render() {
    return (
      <section class="content">
        <Summary />
        <MonthlyReport />
        <div className="row">
          <div className="col-md-8">
            <VisitorsReport />
            <div className="row">
              <div className="col-md-6">
                <SingleChat />
              </div>
              <div className="col-md-6">
                <UserCard />
              </div>
            </div>
            <OrderTable />
          </div>
          <div className="col-md-4">
            <InfoBox />
            <BrowserUsageCard />
            <ProductCard />
          </div>
        </div>
      </section>
    );
  }
}

export default Dashboard2;
