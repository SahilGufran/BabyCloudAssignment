import React from 'react';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo"><b>witt.</b></div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
