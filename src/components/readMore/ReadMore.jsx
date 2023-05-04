import React, { useState } from 'react';
import css from './ReadMore.module.css';

import { useCollapse } from 'react-collapsed';

const ReadMore = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className={css.readmore_main}>
      <h2 className={css.readmore_heading}>{item.title}</h2>
      <img src={item.img} alt="" className={css.readmore_img} />
      <p className={css.readmore_para}>{item.para}</p>
      <p className={css.readmore_show} {...getCollapseProps()}>
        {item.show}
      </p>
      <button
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
        className={css.readmore_btn}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
      {/* <section {...getCollapseProps()}>Collapsed content 🙈</section> */}
    </div>
  );
};

export default ReadMore;
