import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header>
          <div className="container">
            <div className="CI-banner" />
            <div className="logo-binus" />
            <div className="pull-right text-right" id="welcome-messages">
              <div>
                <b>
                  <span className="cursor">Welcome</span>
                  <span className="blue">SLC</span>
                </b>
              </div>
            </div>
          </div>
        </header>
        <nav>
          <div className="container flex">
            <span className="menu">
              <Link to="/">Home</Link>
              <Link to="/audios">Audio</Link>
              <Link to="/categories">Category</Link>
              <Link to="/schedules">Schedule</Link>
              <Link to="/subjects">Subject</Link>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
