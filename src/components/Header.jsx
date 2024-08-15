import { useState, useEffect } from 'react';

function Header() {
    return (  
      <header className="font-[Poppins]">
        <h1>Brad Burr</h1>
        <ul className="flex items-center gap-[4vw]">
            <li>
            <a className="hover:text-gray-50" href="#">My Portfolio</a>
            </li>
            <li>
            <a className="hover:text-gray-50" href="#">Experience</a>
            </li>
            <li>
            <a className="hover:text-gray-50" href="#">About Me</a>
            </li>
            <li>
            <a className="hover:text-gray-50" href="#">Contact Me</a>
            </li>
        </ul>
      </header>
    );
  }
  
  export default Header;