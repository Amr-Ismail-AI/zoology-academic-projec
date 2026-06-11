import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="contant">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Zoology App</h3>
            <p>Explore the fascinating world of animal phyla. Discover characteristics, meanings, and detailed information about different animal groups.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Zoology App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}