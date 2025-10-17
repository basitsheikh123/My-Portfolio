import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg.png'
import underline from '../../assets/underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setmenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle state

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='navbar'>
      {/* Logo */}
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Mobile menu open icon */}
      <img
        src={menu_open}
        alt="Open Menu"
        className='nav-mob-open'
        onClick={toggleMenu}
      />

      {/* Menu */}
      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <img
          src={menu_close}
          alt="Close Menu"
          className='nav-mob-close'
          onClick={toggleMenu}
        />

        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p onClick={() => { setmenu("home"); setIsOpen(false); }}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt='' /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => { setmenu("about"); setIsOpen(false); }}>About me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt='' /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => { setmenu("services"); setIsOpen(false); }}>Services</p>
          </AnchorLink>
          {menu === "services" ? <img src={underline} alt='' /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => { setmenu("work"); setIsOpen(false); }}>Portfolio</p>
          </AnchorLink>
          {menu === "work" ? <img src={underline} alt='' /> : <></>}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => { setmenu("contact"); setIsOpen(false); }}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>

      {/* Connect Button */}
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me</AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
