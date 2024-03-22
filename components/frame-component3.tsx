import type { NextPage } from "next";
import styles from "./frame-component3.module.css";

const FrameComponent3: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.popularCoursesWrapper}>
        <h1 className={styles.popularCourses}>
          <span>{`Popular `}</span>
          <span className={styles.courses}>Courses</span>
        </h1>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <button className={styles.buttonBase}>
          <div className={styles.text}>Design</div>
        </button>
        <button className={styles.buttonBase1}>
          <div className={styles.text1}>Development</div>
        </button>
        <button className={styles.buttonBase2}>
          <div className={styles.text2}>Business</div>
        </button>
        <div className={styles.buttonBaseWrapper}>
          <button className={styles.buttonBase3}>
            <div className={styles.text3}>Data Science</div>
          </button>
        </div>
        <div className={styles.buttonBase4}>
          <div className={styles.text4}>Marketing</div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
