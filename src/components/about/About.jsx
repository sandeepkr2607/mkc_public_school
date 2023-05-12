import React from 'react';
import css from './About.module.css';
// import CLJha from '../../images/CLJha.png';

import blog4 from '../../images/blog4.png';
import gal1 from '../../images/gal1.png';

const About = () => {
  return (
    <>
      <div className={css.aboutTop} id="about">
        <div className={css.experience}>
          <h2 className={css.experienceHeading}>20 Years of Experience</h2>
          <p className={css.experienceDisc}>
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
        </div>
        <div className={css.achivement}>
          <div className={css.teachers}>
            <span className={css.Num}>18</span>
            <span className={css.Text}>Certified</span>
            <span className={css.Text}>Teachers</span>
          </div>
          <div className={css.students}>
            <span className={css.Num}>1351</span>
            <span className={css.Text}>Successful</span>
            <span className={css.Text}>Kids</span>
          </div>
          <div className={css.parents}>
            <span className={css.Num}>964</span>
            <span className={css.Text}>Happy</span>
            <span className={css.Text}>Parents</span>
          </div>
          <div className={css.awards}>
            <span className={css.Num}>300 +</span>
            <span className={css.Text}> Awards</span>
            <span className={css.Text}>Won</span>
          </div>
        </div>
        <div className={css.aboutTitle}>
          <h1 className={css.mainTitle}>DREAMS OF LATE MAA KAUSHALYA DEVI</h1>
          <p className={css.mainDisc}>
            A lady of piously religious heart, Maa Kaushalya Dvi's ardent desire
            was always to make Motihari a place od dicipline, great Sacrament
            and selfless service.
          </p>
        </div>
        <div className={css.cards}>
          <div className={css.card}>
            <p className={css.cardPara}>
              I have established M.k.d. public school in the core of motihari.
              as a consequence of late kaushaliya devi’s ardent desire, i am
              making an endless effort to impart a quality education to the
              children of the destrict. i am destined to inculcate in the
              children moral, social and ethical knowledge.
            </p>
            <div className={css.cardDetails}>
              <div className={css.cardPostAndName}>
                <p className={css.cardPost}>Director</p>
                <p className={css.cardName}>Dr. C.L.Jha</p>
              </div>
              {/* <img src={CLJha} alt="" /> */}
            </div>
          </div>
          <div className={css.card}>
            <p className={css.cardPara}>
              we at m.k.d.public school are very proud to be at the most
              recognised school chains in the country delivering high acedemic
              standards within a very caring and supportive school system. i am
              sure wgenever you visit a m.k.d.public school with unbridled joy
              and enthuriasm immersed in the eco-system learning in the confines
              of a lovingenvironment.
            </p>
            <div className={css.cardDetails}>
              <div className={css.cardPostAndName}>
                <p className={css.cardPost}>Principal</p>
                <p className={css.cardName}>A.N.Pandey</p>
              </div>
              {/* <img src={CLJha} alt="" /> */}
            </div>
          </div>
          <div className={css.card}>
            <p className={css.cardPara}>
              to make the dream of mata jee’s comes true, i tried to adore the
              school with the fragrance of all sort of knowledge and intellect
              available in the treasure of goddess saraswati, from the time of
              laying foundation of the school. by the grace of almighty i am
              trying every means of acedemic method to develop the intellectual
              sacrament of our young once
            </p>
            <div className={css.cardDetails}>
              <div className={css.cardPostAndName}>
                <p className={css.cardPost}>Secretary</p>
                <p className={css.cardName}>Dr. Ajit Vats</p>
              </div>
              {/* <img src={CLJha} alt="" /> */}
            </div>
          </div>
        </div>

        <div className={css.bBottom}>
          <div className={css.bLeft}>
            <h2 className={css.bLHeading}>Latest News</h2>
            <div className={css.bLeftNews}>
              <p className={css.bLNews}>
                Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
                volutpat lectus.
              </p>
              <p className={css.bLNews}>
                Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
                volutpat lectus.
              </p>
              <p className={css.bLNews}>
                Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
                volutpat lectus.
              </p>
              <p className={css.bLNews}>
                Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
                volutpat lectus.
              </p>
            </div>
          </div>
          <div className={css.bRight}>
            <h2 className={css.bRHeading}>Welcome To MKD Public School</h2>
            <div className={css.bRBottom}>
              <img src={blog4} alt="" className={css.bImg} />
              <p className={css.bRContent}>
                Lorem ipsum dolor sit amet consectetur. Platea id posuere
                iaculis enim urna rhoncus consequat. Vitae arcu vulputate
                pellentesque erat rhoncus amet iaculis. Non faucibus at
                elementum euismod ullamcorper integer at. Pretium eget leo magna
                fermentum ultrices dui. Sed blandit nulla.Lorem ipsum dolor sit
                amet consectetur. Platea id posuere iaculis enim urna rhoncus
                consequat. Vitae arcu vulputate pellentesque erat rhoncus amet
                iaculis. Non faucibus at elementum euismod ullamcorper integer
                consequat. Vitae arcu vulputate pellentesque erat rhoncus amet
                iaculis. Non faucibus at elementum euismod ullamcorper integer
                at. Pretium eget leo magna fermentum ultrices dui. Sed blandit
                nulla.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.mbl_about} id="mbl_about">
        <div className={css.mbl_about_top}>
          <h3 className={css.mbl_about_heading}>admisssion 2023-24</h3>
          <h3 className={css.mbl_about_rest}>online admission portal</h3>
          <h3 className={css.mbl_about_rest}>prospectus 2023</h3>
          <h3 className={css.mbl_about_rest}>query</h3>
          <h3 className={css.mbl_about_rest}>h.w. assignment</h3>
        </div>
        <div className={css.mbl_about_bottom}>
          <img src={gal1} alt="" className={css.mbl_about_bottom_img} />

          <h3 className={css.mbl_about_bottom_heading}>
            Dream of Late Maa Kaushalya Devi
          </h3>
          <p className={css.mbl_about_para}>
            A lady of piously religious heart, Maa Kaushalya Dvi's ardent desire
            was always to make Motihari a place od dicipline, great Sacrament
            and selfless service.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
