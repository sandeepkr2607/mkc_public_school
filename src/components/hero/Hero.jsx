import React from 'react';
import css from './Hero.module.css';
import School from '../../images/School.png';
import school2 from '../../images/school2.png';
import school3 from '../../images/school3.png';
import school4 from '../../images/school4.png';
import hero1 from '../../images/hero1.png';
import hero2 from '../../images/hero2.png';
import hero3 from '../../images/hero3.png';
import hero4 from '../../images/hero4.png';

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
            <botton className={css.btn}>NEXT > > </botton>
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
            <h2 className={css.headingTwo}>h.w.assignment</h2>
            <p className={css.paraNew}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
