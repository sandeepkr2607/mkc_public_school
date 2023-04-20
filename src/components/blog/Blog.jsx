import React from 'react';
import css from './Blog.module.css';
import blog1 from '../../images/blog1.png';
import blog2 from '../../images/blog2.png';
import blog3 from '../../images/blog3.png';
// import blog4 from '../../images/blog4.png';

const Blog = () => {
  return (
    <>
      <div className={css.blog} id="blog">
        <div className={css.bTop}>
          <h1 className={css.heading}>RECENT BLOG</h1>
          <p className={css.headingDisc}>
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
        </div>
        <div className={css.bMiddle}>
          <div className={css.left}>
            <h2 className={css.date}>27 january 2022</h2>
            <img src={blog1} alt="" />
            <h3 className={css.bTitle}>Skills To Develope Your Child Memory</h3>
            <p className={css.bdisc}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
            <button className={css.btn}>Read More</button>
          </div>
          <div className={css.center}>
            <h2 className={css.date}>27 january 2022</h2>
            <img src={blog2} alt="" />
            <h3 className={css.bTitle}>Skills To Develope Your Child Memory</h3>
            <p className={css.bdisc}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
            <button className={css.btn}>Read More</button>
          </div>
          <div className={css.right}>
            <h2 className={css.date}>27 january 2022</h2>
            <img src={blog3} alt="" />
            <h3 className={css.bTitle}>Skills To Develope Your Child Memory</h3>
            <p className={css.bdisc}>
              Lorem ipsum dolor sit amet consectetur. Habitant varius et justo
              volutpat lectus.
            </p>
            <button className={css.btn}>Read More</button>
          </div>
        </div>
        {/* <div className={css.bBottom}>
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
        </div> */}
      </div>
    </>
  );
};

export default Blog;
