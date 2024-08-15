import { useState, useEffect } from 'react';
import myPicture from '../../assets/images/myPicture.jpg';

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
            </div>
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