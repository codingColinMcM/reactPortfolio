import React, { useState, useEffect } from 'react';
import LinkedSites from "./LinkedSites";

function NavTabs({ currentPage, handlePageChange }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="stack-contents">
          <LinkedSites />
          <div className="nav nav-tabs">
            <div className="nav-contents">
              <div className="nav-item">
                <a
                  href="#about"
                  onClick={() => handlePageChange('Home')}
                  className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                  Home
                </a>
              </div>
              <div className="nav-item">
                <a
                  href="#portfolio"
                  onClick={() => handlePageChange('About')}
                  className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio
                </a>
              </div>
              <div className="nav-item">
                <a
                  href="#resume"
                  onClick={() => handlePageChange('Blog')}
                  className={currentPage === 'Blog' ? 'nav-link active' : 'nav-link'}
                >
                  Resume
                </a>
              </div>
              <div className="nav-item">
                <a
                  href="#contact"
                  onClick={() => handlePageChange('Contact')}
                  className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                  Contact
                </a>
              </div>
              <div className="nav-item">
                <a
                  href="#deepDive"
                  onClick={() => handlePageChange('DeepDive')}
                  className={currentPage === 'DeepDive' ? 'nav-link active' : 'nav-link'}
                >
                  About Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="stack-contents">
          <ul className="contact-list" style={{ listStyleType: "none" }}>
	    <li>
       	      <a href="tel:410-660-6350">(443) 970-5620</a>
            </li>
	    <li>
              <a href="mailto:mcmurtraycolin@gmail.com" style={{ color: "#f96332" }}>mcmurtraycolin@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
