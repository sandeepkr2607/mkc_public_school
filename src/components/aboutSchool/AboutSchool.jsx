import React from 'react';
import css from './AboutSchool.module.css';

import ReadMore from '../readMore/ReadMore';
import School from '../../images/School.png';
import gal1 from '../../images/gal1.png';

const data = [
  {
    title: 'WELCOME TO MKD PUBLIC SCHOOL',
    img: School,
    para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem necessitatibus cumque nesciunt non ipsa at enim qui totam, facilis itaque nobis delectus labore molestiae! Fuga dolore, eius earum ad, expedita tenetur, architecto in cupiditate quisquam hic distinctio ducimus? Tempora, voluptate blanditiis?',
    show: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A exercitationem inventore deserunt, hic sapiente optio, minus voluptatibus non maiores repudiandae doloremque necessitatibus quo reiciendis facilis laudantium eos amet consectetur nobis eaque animi. Quos tempora sint maiores temporibus porro alias assumenda praesentium rem, illum iure laudantium optio veniam minus cumque. Quaerat!',
  },
  {
    title: 'principle’s message',
    img: gal1,
    para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem necessitatibus cumque nesciunt non ipsa at enim qui totam, facilis itaque nobis delectus labore molestiae! Fuga dolore, eius earum ad, expedita tenetur, architecto in cupiditate quisquam hic distinctio ducimus? Tempora, voluptate blanditiis?',
    show: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. A exercitationem inventore deserunt, hic sapiente optio, minus voluptatibus non maiores repudiandae doloremque necessitatibus quo reiciendis facilis laudantium eos amet consectetur nobis eaque animi. Quos tempora sint maiores temporibus porro alias assumenda praesentium rem, illum iure laudantium optio veniam minus cumque. Quaerat!',
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
        <para className={css.bpttpm_para}>
          A lady of piously religious heart, Maa Kaushalya Dvi's ardent desire
          was always to make Motihari a place od dicipline, great Sacrament and
          selfless service.
        </para>
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
