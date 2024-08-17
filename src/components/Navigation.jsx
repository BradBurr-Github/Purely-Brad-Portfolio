import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

//const [selectedLink,setSelectedLink] = useState('/');

function Navigation() {
    return (
      <nav>
        <Link className="nav-link active" to="/aboutme">About Me</Link>
        <Link className="nav-link" to="/myportfolio">My Portfolio</Link>
        <Link className="nav-link" to="/contactme">Contact Me</Link>
        <Link className="nav-link" to="/resume">Resumé</Link>
      </nav>
    );
}
  
export default Navigation;