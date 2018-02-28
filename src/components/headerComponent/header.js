import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Header extends Component {
	render() {
		return (
		<header>
      <div className="logo">
        OSCAR RUVALCABA
      </div>

      <nav>
        <ul>
          <li className="first">
						<Link to="/">Home</Link>
					</li>
          <li>
						<Link to="/products">Projects</Link>
					</li>
          <li className="last">
						<Link to="/about">About</Link>
					</li>
        </ul>
      </nav>

    </header>
		);
	}
}

export default Header;
