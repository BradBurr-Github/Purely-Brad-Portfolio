import { Link } from "react-router-dom";
//import { useState } from 'react';

function Navigation() {
  //const [currLink, setCurrLink] = useState('');

  const handleOnClick = (e) => {
    const { target } = e;
    const navLinkPathname = new URL(target.href).pathname;
    target.classList.add('active')
    // setCurrLink(navLinkPathname)
    // const navLinksEls = document.querySelectorAll('.nav-link');
    // navLinksEls.forEach(navLinksEl => {
    //   // Find correct element
    //   const navLinkElementClicked = new URL(navLinksEl.href).pathname;
    //   if (navLinkPathname===navLinkPathname2) {
    //     navLinksEl.classList.add('active')
    //     console.log(`1: ${navLinkPathname}   2: ${navLinkPathname2}`);
    //   }
    //});
  }

  return (
    <nav>
      <Link className="nav-link" onClick={handleOnClick} to="/aboutme">About Me</Link>
      <Link className="nav-link" onClick={handleOnClick} to="/myportfolio">My Portfolio</Link>
      <Link className="nav-link" onClick={handleOnClick} to="/contactme">Contact Me</Link>
      <Link className="nav-link" onClick={handleOnClick} to="/resume">Resumé</Link>
    </nav>
  );
}
  
export default Navigation;