import React from 'react';
import css from './Header.module.css';
import { Link } from 'react-scroll';
import Facebook from '../../images/Facebook.png';
import Twitter from '../../images/Twitter.png';
import Insta from '../../images/Insta.png';
// import { AiOutlineHome } from 'react-icons/ai';
// import { FaBook } from 'react-icons/fa';
// import { FaRegMoneyBillAlt } from 'react-icons/fa';

const Header = () => {
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
        {/* <div className={css.leftMobileHeader}>
          <li>
            <Link to="hero" smooth={true} duration={500}>
              <AiOutlineHome />
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              <FaBook />
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={500}>
              <FaRegMoneyBillAlt />
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
        </div> */}
        <div className={css.rightHeader}>
          <Link to="contact" smooth={true} duration={500}>
            <img src={Facebook} alt="" />
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <img src={Insta} alt="" />
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <img src={Twitter} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
