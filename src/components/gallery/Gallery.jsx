import React from 'react';
import css from './Gallery.module.css';
import gal1 from '../../images/gal1.png';
import gal2 from '../../images/gal2.png';
import gal3 from '../../images/gal3.png';
import gal4 from '../../images/gal4.png';
import gal5 from '../../images/gal5.png';
import gal6 from '../../images/gal6.png';
import gal7 from '../../images/gal7.png';
import gal8 from '../../images/gal8.png';
import gal9 from '../../images/gal9.png';
import gal10 from '../../images/gal10.png';
import gal11 from '../../images/gal11.png';
import gal12 from '../../images/gal12.png';

const Gallery = () => {
  return (
    <>
      <div className={css.gallery}>
        <h2 className={css.heading}>PHOTO GALLERY</h2>
        <div className={css.photo_gallery}>
          <div className={css.row1}>
            <img src={gal1} alt="" className={css.photo} />
            <img src={gal2} alt="" className={css.photo} />
            <img src={gal3} alt="" className={css.photo} />
            <img src={gal4} alt="" className={css.photo} />
          </div>
          <div className={css.row2}>
            <img src={gal5} alt="" className={css.photo} />
            <img src={gal6} alt="" className={css.photo} />
            <img src={gal7} alt="" className={css.photo} />
            <img src={gal8} alt="" className={css.photo} />
          </div>
          <div className={css.row3}>
            <img src={gal9} alt="" className={css.photo} />
            <img src={gal10} alt="" className={css.photo} />
            <img src={gal11} alt="" className={css.photo} />
            <img src={gal12} alt="" className={css.photo} />
          </div>
        </div>
      </div>
      <div className={css.mbl_gallery} id="mbl_gallery">
        <img src={gal1} alt="" className={css.mbl_photo} />
        <img src={gal2} alt="" className={css.mbl_photo} />
        <img src={gal3} alt="" className={css.mbl_photo} />
        <img src={gal4} alt="" className={css.mbl_photo} />
        <img src={gal5} alt="" className={css.mbl_photo} />
        <img src={gal6} alt="" className={css.mbl_photo} />
        <img src={gal7} alt="" className={css.mbl_photo} />
        <img src={gal8} alt="" className={css.mbl_photo} />
        <img src={gal9} alt="" className={css.mbl_photo} />
        <img src={gal7} alt="" className={css.mbl_photo} />
        <img src={gal4} alt="" className={css.mbl_photo} />
        <img src={gal2} alt="" className={css.mbl_photo} />
      </div>
    </>
  );
};

export default Gallery;
