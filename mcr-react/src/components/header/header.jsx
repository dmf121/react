import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import styles from './Header.module.css';



function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };



  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <Container>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary container ${styles.navigation}`}>
        <Link 
          className={`${styles.navbarBrand} ${activeButton === 0 ? '' : ''}`} to="/"
          onClick={() => handleClick(0)}
        >
          <div className={styles.myLogo}><h3>MCR</h3><span>Construction</span></div></Link>

            <NavbarToggler onClick={toggle} className={styles.myToggler}/>
            <Collapse isOpen={isOpen} navbar className={styles.col}>

              <Nav className={`w-auto ${styles.myNav}`} navbar>
                <NavItem>
                  <Link 
                    className={`${styles.navLink} ${activeButton === 1 ? 'active' : ''}`} to='/services'
                    onClick={() => handleClick(1)}
                    >Services</Link>
                </NavItem>
                <NavItem>
                  <Link 
                    className={`${styles.navLink} ${activeButton === 2 ? 'active' : ''}`} to='/projects'
                    onClick={() => handleClick(2)}
                    >Projects</Link>
                </NavItem>
                <NavItem>
                  <Link 
                    className={`${styles.navLink} ${activeButton === 3 ? 'active' : ''}`} to='/about'
                    onClick={() => handleClick(3)}
                    >About Us</Link>
                </NavItem>
                <NavItem>
                  <Link 
                      className={`${styles.navLink} ${activeButton === 4 ? 'active' : ''}`} to='/careers'
                      onClick={() => handleClick(4)}
                      >Careers</Link>
                </NavItem>
                <NavItem>
                  <Link 
                      className={`${styles.navLink} ${activeButton === 5 ? 'active' : ''}`} to='/contact'
                      onClick={() => handleClick(5)}
                      >Contact</Link>
                </NavItem>
              </Nav>
              
            </Collapse>
          </nav>
    </Container>
    
  );
}

export default Header;





