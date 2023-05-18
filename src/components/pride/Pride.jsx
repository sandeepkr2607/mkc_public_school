import css from "./Pride.module.css";
import twelve1 from "../../images/twelve1.png";
import twelve2 from "../../images/twelve2.png";
import twelve3 from "../../images/twelve3.png";
import twelve4 from "../../images/twelve4.png";
import ten1 from "../../images/ten1.png";
import ten2 from "../../images/ten2.png";
import ten3 from "../../images/ten3.png";
import ten4 from "../../images/ten4.png";
import name_logo from "../../images/name_logo.png";

const Pride = () => {
  return (
    <div className={css.pride}>
      <h2 className={css.pride_heading}>our school pride</h2>
      <div className={css.pride_top}>
        <h3 className={css.pride_top_heading}>class 12th toppers</h3>
        <div className={css.students_container}>
          <div className={css.student_container}>
            <img src={twelve1} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>shivam kumar</p>
            <p className={css.student_marks}>83.40% ( 417 )</p>
          </div>
          <div className={css.student_container}>
            <img src={twelve2} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>raunak kumar jha</p>
            <p className={css.student_marks}>80% ( 400 )</p>
          </div>
          <div className={css.student_container}>
            <img src={twelve3} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>aaradhya</p>
            <p className={css.student_marks}>78% ( 394 )</p>
          </div>
          <div className={css.student_container}>
            <img src={twelve4} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>aaradhya</p>
            <p className={css.student_marks}>75% ( 375 )</p>
          </div>
        </div>
      </div>
      <div className={css.pride_bottom}>
        <h3 className={css.pride_bottom_heading}>class 10th toppers</h3>
        <div className={css.students_container}>
          <div className={css.student_container}>
            <img src={ten1} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>siddhanth kumar</p>
            <p className={css.student_marks}>95% ( 474 )</p>
          </div>
          <div className={css.student_container}>
            <img src={ten2} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>navdeep singh</p>
            <p className={css.student_marks}>94.6% ( 473 )</p>
          </div>
          <div className={css.student_container}>
            <img src={ten3} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>nitin kumar</p>
            <p className={css.student_marks}>90.5 % ( 454 )</p>
          </div>
          <div className={css.student_container}>
            <img src={ten4} alt="" className={css.student_img} />
            <img src={name_logo} alt="" className={css.student_details_logo} />
            <p className={css.student_name}>satyam kumar</p>
            <p className={css.student_marks}>90.2% ( 451 )</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pride;
