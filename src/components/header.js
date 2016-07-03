import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
      return [
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/">Home</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/about">About</Link>
        </li>,
        <li className="nav-item" key={3}>
          <Link className="nav-link" to="/grids">Grids</Link>
        </li>
      ];
  }

  render() {
    return (
      <nav>
        <ul>
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

export default Header;
