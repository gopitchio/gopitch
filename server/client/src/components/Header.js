import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

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
        return (
          <li className="active">
            <a href="/api/logout">Sign Out</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="nav-extended red lighten-1">
        <div className="nav-background" />
        <div className="nav-wrapper container">
          <Link to={ this.props.auth ? "/campaigns" : "/" } 
            className="brand-logo">
            <i className="material-icons">camera</i>GoPitch
          </Link>
          <a href="#" data-activates="nav-mobile" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
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
