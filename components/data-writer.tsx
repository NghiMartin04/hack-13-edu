import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./data-writer.module.css";

export type DataWriterType = {
  maskGroup?: string;
  polygon4?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const DataWriter: NextPage<DataWriterType> = ({
  maskGroup,
  polygon4,
  propWidth,
  propMinWidth,
}) => {
  const dataWriterStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  return (
    <div className={styles.dataWriter} style={dataWriterStyle}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup}
        />
        <div className={styles.valueSequencer}>
          <div className={styles.valueAssigner}>
            <div className={styles.inputValidator}>
              <div className={styles.outputValidator}>
                <div className={styles.controlSwitch}>
                  <div className={styles.logicMerger}>
                    <div className={styles.dataMultiplier}>
                      <div className={styles.dataDivider} />
                      <img
                        className={styles.dataMultiplierChild}
                        alt=""
                        src={polygon4}
                      />
                    </div>
                    <div className={styles.valueSaver}>
                      <div className={styles.xLesson}>10x Lesson</div>
                    </div>
                  </div>
                </div>
                <button className={styles.valueSwitch}>
                  <div className={styles.valueSwitchChild} />
                  <div className={styles.design}>Design</div>
                </button>
              </div>
            </div>
            <div className={styles.logicComparator}>
              <h2 className={styles.pythonForFinancial}>
                Python for Financial Analysis Next and Algorithmic Trading
              </h2>
            </div>
            <div className={styles.logicSequencer}>
              <div className={styles.valueCalculator}>
                <div className={styles.dataSifter} />
                <div className={styles.dataAggregator}>
                  <div className={styles.branchingLogic}>
                    <div className={styles.inputProcessor}>
                      <img
                        className={styles.outputRendererIcon}
                        loading="lazy"
                        alt=""
                        src="/ellipse-1202@2x.png"
                      />
                      <div className={styles.errorHandler}>
                        <div className={styles.adamSmith}>Adam Smith</div>
                        <div className={styles.pythonDeveloper}>
                          Python Developer
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.lineParent}>
                    <div className={styles.frameItem} />
                    <div className={styles.studentWrapper}>
                      <div className={styles.student}>50+ Student</div>
                    </div>
                  </div>
                </div>
                <div className={styles.dataSifter1} />
              </div>
              <div className={styles.frameParent}>
                <img
                  className={styles.frameInner}
                  alt=""
                  src="/group-512830.svg"
                />
                <div className={styles.enrollNow}>Enroll Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataWriter;
