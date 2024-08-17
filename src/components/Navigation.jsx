import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Navigation() {
    return (
      <ul className="header-links">
          <li>
              <Link className="nav-link" to="/aboutme">About Me</Link>
          </li>
          <li>
              <Link className="nav-link" to="/myportfolio">My Portfolio</Link>
          </li>
          <li>
            <Link className="nav-link" to="/contactme">Contact Me</Link>
          </li>
          <li>
              <Link className="nav-link" to="/resume">Resumé</Link>
          </li>
      </ul>
    );
}
  
export default Navigation;