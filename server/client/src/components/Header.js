import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import StripeWrapper from "./StripeWrapper";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li className="active">
            <a href="/auth/google">Sign In with Google</a>
          </li>
        );
      default:
        return [
          <li key="1"><StripeWrapper /></li>,
          <li key="2" style={{margin: '0 10px'}}>
            Credits: { this.props.auth.credits }
          </li>,
          <li key="3" className="active">
            <a href="/api/logout">Sign Out</a>
          </li>
        ]
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/competitions' : '/'} className="left brand-logo">GoPitch</Link>
          <ul id="nav-mobile" className="right">
            <li><a href="/about">About</a></li>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
