import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


import styles from './Header.module.scss'



const Header = ({cartItems, quantity}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  




  return (
    <nav className={`${styles.nav} navbar navbar-expand-lg bg-body-tertiary`}>
      <div className="container">
        <div className='d-flex justify-content-between  w-100'>
          <Link 
            className={`${styles.logo} ${activeButton === 0 ? '' : ''}`} to="/"
            onClick={() => handleClick(0)}
          >
            <div ><h3 className='my-auto'>VESTE</h3></div>
          </Link>

            <Collapse isOpen={isOpen} navbar >
              <Nav className={`${styles.myNav} ms-auto`} navbar>
                <NavItem>
                  <Link 
                    className={` ${activeButton === 1 ? 'active' : ''}`} to='/'
                    onClick={() => handleClick(1)}
                    >HOME</Link>
                </NavItem>
                <UncontrolledDropdown className={styles.dropdown} nav inNavbar onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} isOpen={isDropdownOpen}>
                    <DropdownToggle nav caret>
                        COLLECTION
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag={Link} to="/women">WOMEN</DropdownItem>
                        <DropdownItem tag={Link} to="/men">MEN</DropdownItem>
                        <DropdownItem tag={Link} to="/accessories">ACCESSORIES</DropdownItem>
                        <DropdownItem tag={Link} to="/sale">SALE</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <Link 
                    className={` ${activeButton === 2 ? 'active' : ''}`} to='/lookbook'
                    onClick={() => handleClick(2)}
                    >LOOKBOOK</Link>
                </NavItem>
                <NavItem>
                  <Link 
                    className={` ${activeButton === 3 ? 'active' : ''}`} to='/customer_care'
                    onClick={() => handleClick(3)}
                    >CUSTOMER CARE</Link>
                </NavItem>
                <NavItem>
                  <Link 
                      className={` ${activeButton === 4 ? 'active' : ''}`} to='/visit_us'
                      onClick={() => handleClick(4)}
                      >VISIT US</Link>
                </NavItem>
              </Nav>
            </Collapse> 
            <div className='d-flex'>
              <Link to='/cart'>
                <button className={`ml-auto ${styles.cartButton}`}>
                  <img src="../../img/cart.png" alt="" /> 
                  <span><p className='mx-auto my-auto'>{cartItems.length === 0 || quantity===0? '' : quantity}</p></span> 
                </button>
              </Link>
              <NavbarToggler onClick={toggle} />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;