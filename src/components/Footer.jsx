import { useState, useEffect } from 'react';

function Footer() {
  return ( 
    <footer>
      <div className='copyright'>© 2024 Brad Burr</div>
      <div className="social-media">
        <a href='https://github.com/BradBurr-Github' target='_blank'>
          <ion-icon name="logo-github"></ion-icon>
        </a>
        <a href='https://www.linkedin.com/in/brad-burr-a807609/' target='_blank'>
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a href='https://stackoverflow.com/users/26856435/brad-burr' target='_blank'>
          <ion-icon name="logo-stackoverflow"></ion-icon>
        </a>
      </div>
    </footer>
  );
}
  
export default Footer;