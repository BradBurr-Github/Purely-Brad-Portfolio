import { useState, useEffect } from 'react';





function Navigation() {
    return (
      <ul className="header-links">
          <li>
              <a className="nav-link" href="#">About Me</a>
          </li>
          <li>
              <a className="nav-link" href="#">My Portfolio</a>
          </li>
          <li>
              <a className="nav-link" href="#">Contact Me</a>
          </li>
          <li>
              <a className="nav-link" href="#">Resumé</a>
          </li>
      </ul>
    );
}
  
export default Navigation;