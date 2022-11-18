import React, { useState, useEffect } from 'react'
import './Nav.css';





function Navbar() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll", setShow(false));
    };

  }, []);


  return (
    <div className={`nav ${show && "nav-black"}`} >
    {/* // <div className='nav'  > */}

      <img 
        className='nav-logo'
        // src='https://upload.wikimedia.org/wikipedia/commons/0/0f'
        src='https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/fe0d3631-4584-47e4-9cd7-ed68ba375830/NG-en-20221114-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
        alt='Netflix Logo'
      />
      <img 
        className='nav-avatar'
        // src='https://upload.wikimedia.org/wikipedia/commons/0/0f'
        src='https://www.freepnglogos.com/images/netflix-logo-png-2562'
        alt='Netflix avatar'
      />
    </div>
  )
}

export default Navbar