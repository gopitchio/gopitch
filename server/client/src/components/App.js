import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const NewCampaign = () => {
  return <h2>NewCampaign</h2>;
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/campaigns" component={Dashboard} />
              <Route path="/campaigns/new" component={NewCampaign} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App); //connecting actions to a component
