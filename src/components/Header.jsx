import { useState, useEffect } from 'react';

function Header() {
    return (  
      <header className="font-[Poppins]">
        <div className="heading-name">Brad Burr</div>
        <div className="heading-title">Senior Software Engineer</div>
        <ul className="header-links">
            <li>
            <a className="hover:text-gray-200" href="#">My Portfolio</a>
            </li>
            <li>
            <a className="hover:text-gray-200" href="#">Experience</a>
            </li>
            <li>
            <a className="hover:text-gray-200" href="#">About Me</a>
            </li>
            <li>
            <a className="hover:text-gray-200" href="#">Contact Me</a>
            </li>
        </ul>
      </header>
    );
  }
  
  export default Header;