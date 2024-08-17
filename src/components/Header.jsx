import { useState, useEffect } from 'react';
import myPicture from '../../assets/images/myPicture.jpg';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="font-[Poppins] header">
            <div className='heading-picture-name-title'>
                <div>
                    <Link to="/"><img src={myPicture} alt="My Picture" className="heading-image"/></Link>
                </div>
                <div>
                    <div className="heading-name">Brad Burr</div>
                    <div className="heading-title">Senior Software Engineer</div>
                </div>
                <div className="header-links">
                    <Navigation />
                </div>
            </div>
        </header>
    );
}
  
  export default Header;