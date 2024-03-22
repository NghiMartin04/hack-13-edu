import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component1.module.css";

export type GroupComponent1Type = {
  maskGroup?: string;
  polygon4?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBorderTop?: CSSProperties["borderTop"];
  propBorderRight?: CSSProperties["borderRight"];
  propBorderTop1?: CSSProperties["borderTop"];
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  maskGroup,
  polygon4,
  propWidth,
  propBorderTop,
  propBorderRight,
  propBorderTop1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const timingManagerStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const valueSorterStyle: CSSProperties = useMemo(() => {
    return {
      borderRight: propBorderRight,
    };
  }, [propBorderRight]);

  const dataValidatorStyle: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop1,
    };
  }, [propBorderTop1]);

  return (
    <div className={styles.rectangleParent} style={groupDivStyle}>
      <div className={styles.frameChild} />
      <img
        className={styles.maskGroupIcon}
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.dataAggregatorWrapper}>
            <div className={styles.dataAggregator}>
              <div className={styles.logicBranch}>
                <div className={styles.inputCluster}>
                  <div className={styles.functionNest}>
                    <div className={styles.conditionSet} />
                    <img
                      className={styles.functionNestChild}
                      alt=""
                      src={polygon4}
                    />
                  </div>
                  <div className={styles.outputCollector}>
                    <div className={styles.xLesson}>10x Lesson</div>
                  </div>
                </div>
              </div>
              <button className={styles.valueTransformer}>
                <div className={styles.valueTransformerChild} />
                <div className={styles.design}>Design</div>
              </button>
            </div>
          </div>
          <div className={styles.iterationLoop}>
            <h2 className={styles.pythonForFinancial}>
              Python for Financial Analysis Next and Algorithmic Trading
            </h2>
          </div>
          <div className={styles.signalReceiver}>
            <div className={styles.signalEmitter}>
              <div
                className={styles.timingManager}
                style={timingManagerStyle}
              />
              <div className={styles.dataQueue}>
                <div className={styles.dataPool}>
                  <div className={styles.dataPump}>
                    <img
                      className={styles.logicGateIcon}
                      loading="lazy"
                      alt=""
                      src="/ellipse-1202@2x.png"
                    />
                    <div className={styles.functionCaller}>
                      <div className={styles.adamSmith}>Adam Smith</div>
                      <div className={styles.pythonDeveloper}>
                        Python Developer
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.valueCombiner}>
                  <div
                    className={styles.valueSorter}
                    style={valueSorterStyle}
                  />
                  <div className={styles.dataSplitter}>
                    <div className={styles.student}>50+ Student</div>
                  </div>
                </div>
              </div>
              <div
                className={styles.dataValidator}
                style={dataValidatorStyle}
              />
            </div>
            <div className={styles.dataProcessor}>
              <img
                className={styles.dataProcessorChild}
                alt=""
                src="/group-512830.svg"
              />
              <div className={styles.enrollNow}>Enroll Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent1;
