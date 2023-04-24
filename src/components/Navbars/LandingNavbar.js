// Navbar.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingNavbar.css';

const Navbar = () => {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setSolid(true);
      } else {
        setSolid(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);

  return (
    <nav className={`navbar navbar-default navbar-fixed-top ${solid ? 'solid' : ''}`}>
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to="/">Transparent to Solid Nav</Link>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/link">Link</Link></li>
            <li><Link to="/another-link">Another Link</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
