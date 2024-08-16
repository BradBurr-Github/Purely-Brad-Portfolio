import { useState, useEffect } from 'react';
import myPicture from '../../assets/images/myPicture.jpg';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="font-[Poppins] header">
            <div className='heading-picture-name-title'>
                <div>
                    <img src={myPicture} alt="My Picture" className="heading-image"/>
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