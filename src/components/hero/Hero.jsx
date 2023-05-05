import React from 'react';
import css from './Hero.module.css';
import './Hero.css';
import School from '../../images/School.png';
import school2 from '../../images/school2.png';
import school3 from '../../images/school3.png';
import school4 from '../../images/school4.png';
import hero1 from '../../images/hero1.png';
import hero2 from '../../images/hero2.png';
import hero3 from '../../images/hero3.png';
import hero4 from '../../images/hero4.png';
import Logo1 from '../../images/Logo1.png';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, A11y } from 'swiper';

const Hero = () => {
  return (
    <>
      <div className={css.hero} id="hero">
        <div className={css.top}>
          <div className={css.picture}>
            <div className={css.left}>
              <img src={School} className={css.school1} alt="" />
              <img src={school2} className={css.school2} alt="" />
            </div>
            <div className={css.right}>
              <img src={school3} className={css.school3} alt="" />
              <img src={school4} className={css.school4} alt="" />
            </div>
          </div>
          <div className={css.text}>
            <h2 className={css.heading}>MKD PUBLIC SCHOOL</h2>
            <p className={css.para}>
              admisssion for acedemic session 2022 - 2023 is going on. seats are
              limited. visit our school for latst updates
            </p>
            <button className={css.btn}>NEXT > > </button>
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.bottonOne}>
            <div className={css.circleOne}>
              <img src={hero1} alt="" />
            </div>
            <h2 className={css.headingTwo}>online admission portal</h2>
            <p className={css.paraNew}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
          </div>
          <div className={css.bottonTwo}>
            <div className={css.circleTwo}>
              <img src={hero2} alt="" />
            </div>
            <h2 className={css.headingTwo}>Querry</h2>
            <p className={css.paraNew}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
          </div>
          <div className={css.bottonThree}>
            <div className={css.circleThree}>
              <img src={hero3} alt="" />
            </div>
            <h2 className={css.headingTwo}>prospectus 2021</h2>
            <p className={css.paraNew}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
          </div>
          <div className={css.bottonFour}>
            <div className={css.circleFour}>
              <img src={hero4} alt="" />
            </div>
            <h2 className={css.headingTwo}>h. w. assignment</h2>
            <p className={css.paraNew}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
          </div>
        </div>
      </div>
      <div className={css.mobileHero} id="mbl_hero">
        <div className={css.mobileheroTop}>
          <div className={css.mbl_logo}>
            <img src={Logo1} alt="" className={css.mbl_logo_img} />
          </div>
          <h2 className={css.mbl_title}>MKD PUBLIC SCHOOL</h2>
          <p className={css.mbl_disc}>
            admission for acedemic session 2022 - 2023 is going on. seats are
            limited. visit our school for latest updates
          </p>
          <p className={css.mbl_contect}>
            motihari, bihar 845401, ph - +9155880200/ +918521429612, affiliation
            no. 330613, school no. 65607
          </p>
        </div>
        <div className={css.mobileheroBottom}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className={css.swiper}
          >
            <SwiperSlide className={css.swiperSlide}>
              <img src={School} alt="" />
            </SwiperSlide>
            <SwiperSlide className={css.swiperSlide}>
              <img src={school2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={css.swiperSlide}>
              <img src={school3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={css.swiperSlide}>
              <img src={school4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
