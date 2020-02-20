import React, { Component } from "react";
import Summary from "./Summary";
import LineMapChart from "./SalesChart";
import Chat from "../../components/Chat";
import Todo from "../../components/Todo";
import QuickEmail from "./QuickEmail";

import MapChart from "./MapChart";
import SalesGraph from "./SalesGraph";
import Calendar from "./Calendar";

class Dashboard extends Component {
  render() {
    return (
      <section className="content">
        <Summary />
        <div className="row">
          <section className="col-lg-7 connectedSortable">
            <LineMapChart />
            <Chat />
            <Todo />
            <QuickEmail />
          </section>
          <section className="col-lg-5 connectedSortable">
            <MapChart />
            <SalesGraph />
            <Calendar />
          </section>
        </div>
      </section>
    );
  }
}

export default Dashboard;
