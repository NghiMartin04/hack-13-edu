import type { NextPage } from "next";
import styles from "./condition-set.module.css";

const ConditionSet: NextPage = () => {
  return (
    <section className={styles.conditionSet}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <header className={styles.frameWrapper}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.edujarWrapper}>
                      <h1 className={styles.edujar}>Edujar</h1>
                    </div>
                    <img className={styles.frameIcon} alt="" src="/frame.svg" />
                  </div>
                  <nav className={styles.frameNav}>
                    <nav className={styles.homeParent}>
                      <b className={styles.home}>Home</b>
                      <div className={styles.about}>About</div>
                      <div className={styles.course}>Course</div>
                      <div className={styles.blog}>Blog</div>
                      <div className={styles.contact}>Contact</div>
                    </nav>
                  </nav>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.buttonBaseParent}>
                      <button className={styles.buttonBase}>
                        <div className={styles.text}>Login</div>
                      </button>
                      <button className={styles.buttonBase1}>
                        <div className={styles.text1}>Get Started</div>
                      </button>
                    </div>
                  </div>
                </div>
              </header>
              <div className={styles.groupParent}>
                <img className={styles.groupIcon} alt="" src="/group.svg" />
                <h1 className={styles.bestCoursesAreContainer}>
                  <p className={styles.bestCoursesAreWaitingToEn}>
                    <span className={styles.bestCourses}>Best courses</span>
                    <span>{` are waiting to enrich `}</span>
                  </p>
                  <p className={styles.yourSkill}>your skill</p>
                </h1>
              </div>
            </div>
            <h3 className={styles.providesYouWith}>
              Provides you with the latest online learning system and material
              that help your knowledge growing.
            </h3>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameWrapper2}>
              <div className={styles.searchParent}>
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <div className={styles.textWrapper}>
                  <div className={styles.text2}>Want to learn?</div>
                </div>
              </div>
            </div>
            <button className={styles.buttonBase2}>
              <div className={styles.text3}>Explore</div>
            </button>
          </div>
        </div>
        <div className={styles.ourCoursePartnersWrapper}>
          <h2 className={styles.ourCoursePartners}>Our Course Partners</h2>
        </div>
      </div>
    </section>
  );
};

export default ConditionSet;
