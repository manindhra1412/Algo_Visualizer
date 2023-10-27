import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <div className="footer">
      <div className="left-section">
        <div className="icon">
          {/* You can add an icon or logo here */}
        </div>
        <h1 className="footer-title">Quick Links</h1>
      </div>
      <div className="right-section">
        <a href="https://github.com/manindhra1412" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {/* <span> | </span>
        <a href="/privacy">Privacy Policy</a>
        <span> | </span>
        <a href="/terms">Terms of Service</a> */}
      </div>
    </div>
  );
}

export default Footer;
