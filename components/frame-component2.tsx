import type { NextPage } from "next";
import DataWriter from "./data-writer";
import GroupComponent1 from "./group-component1";
import styles from "./frame-component2.module.css";

const FrameComponent2: NextPage = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.dataWriterParent}>
        <DataWriter maskGroup="/mask-group@2x.png" polygon4="/polygon-4.svg" />
        <GroupComponent1
          maskGroup="/mask-group-1@2x.png"
          polygon4="/polygon-4.svg"
        />
        <GroupComponent1
          maskGroup="/mask-group-2@2x.png"
          polygon4="/polygon-4-2.svg"
          propWidth="520px"
          propBorderTop="1px solid var(--color-lavender-300)"
          propBorderRight="1px solid var(--color-lavender-300)"
          propBorderTop1="1px solid var(--color-lavender-300)"
        />
      </div>
      <div className={styles.variableUpdaterParent}>
        <DataWriter
          maskGroup="/mask-group-3@2x.png"
          polygon4="/polygon-4-2.svg"
          propWidth="unset"
          propMinWidth="unset"
        />
        <GroupComponent1
          maskGroup="/mask-group-4@2x.png"
          polygon4="/polygon-4-2.svg"
          propWidth="unset"
          propBorderTop="1px solid var(--color-lavender-300)"
          propBorderRight="1px solid var(--color-lavender-300)"
          propBorderTop1="1px solid var(--color-lavender-300)"
        />
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/mask-group-5@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.frameParent1}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameItem} />
                        <img
                          className={styles.frameInner}
                          alt=""
                          src="/polygon-4-2.svg"
                        />
                      </div>
                      <div className={styles.xLessonWrapper}>
                        <div className={styles.xLesson}>10x Lesson</div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.rectangleGroup}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.design}>Design</div>
                  </button>
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.pythonForFinancialAnalysisWrapper}>
                  <h2 className={styles.pythonForFinancial}>
                    Python for Financial Analysis Next and Algorithmic Trading
                  </h2>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.lineParent}>
                    <div className={styles.lineDiv} />
                    <div className={styles.frameParent4}>
                      <div className={styles.frameWrapper2}>
                        <div className={styles.ellipseGroup}>
                          <img
                            className={styles.ellipseIcon}
                            loading="lazy"
                            alt=""
                            src="/ellipse-1202@2x.png"
                          />
                          <div className={styles.adamSmithParent}>
                            <div className={styles.adamSmith}>Adam Smith</div>
                            <div className={styles.pythonDeveloper}>
                              Python Developer
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.lineGroup}>
                        <div className={styles.frameChild1} />
                        <div className={styles.studentWrapper}>
                          <div className={styles.student}>50+ Student</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameChild2} />
                  </div>
                  <div className={styles.frameParent5}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-512830.svg"
                    />
                    <div className={styles.enrollNow}>Enroll Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.errorChecker}>
            <div className={styles.functionCreator} />
            <div className={styles.functionDeleter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
