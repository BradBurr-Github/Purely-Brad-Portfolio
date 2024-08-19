import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function Navigation() {

  // Set current link to Active
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [activeLink]);
  const handleOnClick = (pathname) => {
    setActiveLink(pathname);
  };

  return (
    <nav>
      <Link className={`nav-link ${((activeLink === "/aboutme") || (activeLink === "/")) ? "active" : ""}`} onClick={() => handleOnClick("/aboutme")} to="/aboutme">About Me</Link>
      <Link className={`nav-link ${activeLink === "/myportfolio" ? "active" : ""}`} onClick={() => handleOnClick("/myportfolio")} to="/myportfolio">My Portfolio</Link>
      <Link className={`nav-link ${activeLink === "/contactme" ? "active" : ""}`} onClick={() => handleOnClick("/contactme")} to="/contactme">Contact Me</Link>
      <Link className={`nav-link ${activeLink === "/resume" ? "active" : ""}`} onClick={() => handleOnClick("/resume")} to="/resume">Resumé</Link>
    </nav>
  );
}
  
export default Navigation;