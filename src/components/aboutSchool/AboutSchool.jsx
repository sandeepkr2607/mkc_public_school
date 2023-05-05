import React from 'react';
import css from './AboutSchool.module.css';

import ReadMore from '../readMore/ReadMore';
import School from '../../images/School.png';
import gal1 from '../../images/gal1.png';

const data = [
  {
    title: 'WELCOME TO MKD PUBLIC SCHOOL',
    img: School,
    para: 'm.k.d public school is the sunrise institution in motihari at shantipuri, east champaran by the chairman advocate madan jha with the objectives of empowering the k',
    show: ' ',
  },
  {
    title: 'principle’s message',
    img: gal1,
    para: 'we at m.k.d.public school are very proud to be at the most recognised school chains in the country delivering high acedemic standards within a very caring and supportive school system.',
    show: ' ',
  },
];

const AboutSchool = () => {
  return (
    <div className={css.about_school}>
      <div className={css.about_top}>
        {data.map((item, index) => (
          <ReadMore key={index} item={item} />
        ))}
      </div>
      <div className={css.about_bottom}>
        <h2 className={css.bottom_heading}>20 years of experience</h2>
        <p className={css.bpttpm_para}>
          A lady of piously religious heart, Maa Kaushalya Dvi's ardent desire
          was always to make Motihari a place od dicipline, great Sacrament and
          selfless service.
        </p>
        <div className={css.row_one}>
          <button className={css.row_btn}>1351 successful kids</button>
          <button className={css.row_btn}>964 happy parents</button>
        </div>
        <div className={css.row_two}>
          <button className={css.row_btn}>18 certified teacher</button>
          <button className={css.row_btn}>300 awards won</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
