import type { NextPage } from "next";
import styles from "./frame-component1.module.css";

const FrameComponent1: NextPage = () => {
  return (
    <section className={styles.frameParent}>
      <img
        className={styles.frameIcon}
        loading="lazy"
        alt=""
        src="/frame-1.svg"
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.buttonBaseWrapper}>
            <button className={styles.buttonBase}>
              <div className={styles.text}>Explore all Courses</div>
            </button>
          </div>
          <h1 className={styles.mostPopularCategoryContainer}>
            <span>{`Most Popular `}</span>
            <span className={styles.category}>Category</span>
            <span>{` `}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
