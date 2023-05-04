import React from 'react';
import css from './Contact.module.css';
import contact_img from '../../images/contact_img.png';
import email from '../../images/email.png';
import phone from '../../images/phone.png';
import locationSign from '../../images/locationSign.png';

const Contact = () => {
  return (
    <>
      <div className={css.mainContect} id="contact">
        <div className={css.contact}>
          <div className={css.right}>
            <div className={css.rightTop}></div>
            <div className={css.rightBottom}>
              <h3 className={css.rightHeading}>MKD PUBLIC SCHOOL</h3>
              <p className={css.rightPara}>
                Affiliated to CBSE 10+2, New Delhi
              </p>
              <p className={css.rightPara}>
                Affiliation No. - 330613, School No. 65607
              </p>
              <p className={css.rightPara}>Station Jaunpul Road, Motihari</p>
              <p className={css.rightPara}>+91-9155880200</p>
              <p className={css.rightPara}>+91-8521429612</p>
              <p className={css.rightPara}>mkdps2014@gmail.com</p>
            </div>
          </div>
          <div className={css.left}>
            <h2 className={css.leftHeading}>Contact Inquiry Form</h2>
            <div className={css.name}>
              <label htmlFor="name">Name</label>
              <div className={css.nameInputs}>
                <input
                  type="text"
                  className={css.nameInput}
                  placeholder="First"
                />
                <input
                  type="text"
                  className={css.nameInput}
                  placeholder="Last"
                />
              </div>
            </div>
            <div className={css.email}>
              <label htmlFor="email">Email</label>
              <input type="text" className={css.input} />
            </div>
            <div className={css.phone}>
              <label htmlFor="number">Phone No.</label>
              <input type="number" className={css.input} />
            </div>
            <div className={css.message}>
              <label htmlFor="message">Message</label>
              <input type="text" className={css.input} />
            </div>
            <div className={css.btnDiv}>
              <button className={css.btn}>Querry</button>
            </div>
          </div>
        </div>
        <h3 className={css.copyright}>
          Copyright © 2021-22 All rights reserved | MKD Public School
        </h3>
      </div>
      <div className={css.mbl_contact} id="mbl_contact">
        <h3 className={css.mbl_contact_title}>contact inquiry form</h3>
        <img src={contact_img} alt="" className={css.mbl_img} />
        <h2 className={css.mbl_schoolName}>MKD PUBLIC SCHOOL</h2>
        <p className={css.mbl_para}>Affiliated to CBSE 10+2, New Delhi</p>
        <p className={css.mbl_para}>
          Affiliation No. - 330613, School No. 65607
        </p>
        <p className={css.mbl_para}>Station Jaunpul Road, Motihari</p>
        <p className={css.mbl_para}>+91-9155880200</p>
        <p className={css.mbl_para}>+91-8521429612</p>
        <p className={css.mbl_para}>mkdps2014@gmail.com</p>
        <p className={css.mbl_para_copy}>
          Copyright © 2021-22 All rights reserved | MKD Public School
        </p>
      </div>
    </>
  );
};

export default Contact;
