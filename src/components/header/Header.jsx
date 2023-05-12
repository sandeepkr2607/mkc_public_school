import React, { useState } from 'react';
import css from './Header.module.css';
import { Link } from 'react-scroll';
// import { Link as Linkfb } from "react-router-dom"
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import Insta from '../../images/Insta.png';
import { BiMenuAltRight } from 'react-icons/bi';

const Header = () => {
  const [showMenu, setShowmenu] = useState(false);
  return (
    <>
      <div className={css.mainHeader}>
        <div className={css.leftHeader}>
          <li>
            <Link to="hero" smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={500}>
              PRICING
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true} duration={500}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="blog" smooth={true} duration={500}>
              BLOG
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={500}>
              TUTORIALS
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
        </div>

        <div className={css.rightHeader}>
          <a href="https://www.facebook.com/mkdps.motihari?mibextid=ZbWKwL" target="_blank"  smooth={true} duration={500}>
            <img src={Facebook} alt="" />
          </a>
          {/* <Link to="contact" smooth={true} duration={500}>
            <img src={Insta} alt="" />
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <img src={Twitter} alt="" />
          </Link> */}
        </div>
      </div>
      <div className={css.mobileMain}>
        <div className={css.mobileMenuLogo}>
          <BiMenuAltRight size={30} onClick={() => setShowmenu(!showMenu)} />
        </div>
        <div
          className={showMenu ? css.mobileMenu : css.noMobileMenu}
          onClick={() => setShowmenu(false)}
        >
          <li>
            <Link
              to="mbl_hero"
              smooth={true}
              duration={500}
              onClick={() => setShowmenu(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="mbl_about"
              smooth={true}
              duration={500}
              onClick={() => setShowmenu(false)}
            >
              ABOUT
            </Link>
          </li>

          <li>
            <Link
              to="mbl_gallery"
              smooth={true}
              duration={500}
              onClick={() => setShowmenu(false)}
            >
              GALLERY
            </Link>
          </li>

          <li>
            <Link
              to="#"
              smooth={true}
              duration={500}
              onClick={() => setShowmenu(false)}
            >
              TUTORIALS
            </Link>
          </li>
          <li>
            <Link
              to="mbl_contact"
              smooth={true}
              duration={500}
              onClick={() => setShowmenu(false)}
            >
              CONTACT
            </Link>
          </li>
        </div>
      </div>
    </>
  );
};

export default Header;
