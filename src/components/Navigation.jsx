import { useState, useEffect } from 'react';





function Navigation() {
    return (
      <ul className="header-links">
          <li>
              <a className="hover:text-gray-200" href="#">About Me</a>
          </li>
          <li>
              <a className="hover:text-gray-200" href="#">My Portfolio</a>
          </li>
          <li>
              <a className="hover:text-gray-200" href="#">Contact Me</a>
          </li>
          <li>
              <a className="hover:text-gray-200" href="#">Resumé</a>
          </li>
      </ul>
    );
}
  
export default Navigation;