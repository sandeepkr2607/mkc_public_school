import React from 'react';
import css from './Home.module.css';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
import Gallery from '../../components/gallery/Gallery';
import Blog from '../../components/blog/Blog';
import Contact from '../../components/contect/Contact';

import Clock from '../../images/Clock.png';
import Location from '../../images/Location.png';
import Logo1 from '../../images/Logo1.png';
import AboutSchool from '../../components/aboutSchool/AboutSchool';

const Home = () => {
  return (
    <>
      <div className={css.top}>
        <div className={css.logo}>
          <img src={Logo1} alt="" />
        </div>
        <div className={css.addTiming}>
          <div className={css.Address}>
            <img src={Location} alt="" />
            <span>Station, Janpul Road, Motihari</span>
          </div>
          <div className={css.timing}>
            <img src={Clock} alt="" />
            <div className={css.sechedule}>
              <span>Mon-Fri: 8AM to 6PM</span>
              <span>Sat-Sun: 10AM to 4PM</span>
            </div>
          </div>
        </div>
      </div>
      <Header />
      <Hero />
      <About />
      <AboutSchool />
      <Gallery />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
