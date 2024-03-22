import type { NextPage } from "next";
import styles from "./stroke-stylist.module.css";

const StrokeStylist: NextPage = () => {
  return (
    <section className={styles.strokeStylist}>
      <div className={styles.effectEffector}>
        <div className={styles.layerLayouter}>
          <h1 className={styles.joinOurWorldsContainer}>
            <span>{`Join our `}</span>
            <span className={styles.worldsLargest}>{`world's largest `}</span>
            <span>learning platform today</span>
          </h1>
          <div className={styles.startLearningBy}>
            Start learning by registering and get 30 days free trail
          </div>
        </div>
        <div className={styles.imageExporter}>
          <div className={styles.figmaFilter}>
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.joinAsInstructor}>Join as Instructor</div>
            </button>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.joinAsStudent}>Join as Student</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrokeStylist;
