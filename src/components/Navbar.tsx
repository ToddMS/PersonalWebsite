import React from 'react';

const Navbar: React.FC = () => {
  const toggleMenu = () => {
    const menu = document.querySelector<HTMLDivElement>('.menu-links');
    const icon = document.querySelector<HTMLDivElement>('.hamburger-icon');
    if (menu) menu.classList.toggle('open');
    if (icon) icon.classList.toggle('open');
  };

  return (
    <nav>
      <div className="logo">Todd Sandler</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="menu-links">
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
