import React from 'react';

import styles from './NavBar.module.css';

const Navbar: React.FC = () => {
  const toggleMenu = () => {
    const menu = document.querySelector<HTMLUListElement>(`.${styles.menuLinks}`);
    const icon = document.querySelector<HTMLDivElement>(`.${styles.hamburgerIcon}`);
    if (menu) menu.classList.toggle(styles.menuLinksOpen);
    if (icon) icon.classList.toggle(styles.hamburgerIconOpen);
  };

  return (
    <>
      <nav id="desktopNav" className={styles.desktopNav}>
        <div className={styles.logo}>Todd Sandler</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav id="hamburgerNav" className={styles.hamburgerNav}>
        <div className={styles.logo}>Todd Sandler</div>
        <div className={styles.hamburgerMenu}>
          <div className={styles.hamburgerIcon} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={styles.menuLinks}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
