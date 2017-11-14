import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const NewCompetiton = () => {
  return <h2>NewCompetiton</h2>;
};

const About = () => {
  return <h2>About</h2>;
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
              <Route exact path="/competitions" component={Dashboard} />
              <Route exact path="/about" component={About} />
              <Route path="/competitions/new" component={NewCompetiton} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
//             connect(mapStateToProps func, actions)(Component)
export default connect(null, actions)(App); //connecting actions to a component
