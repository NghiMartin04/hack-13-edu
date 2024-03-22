import type { NextPage } from "next";
import GroupComponent from "./group-component";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.penWrapper}>
                <img
                  className={styles.penIcon}
                  loading="lazy"
                  alt=""
                  src="/pen.svg"
                />
              </div>
              <div className={styles.designWrapper}>
                <div className={styles.design}>Design</div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <img
                  className={styles.arrowuprightIcon}
                  alt=""
                  src="/arrowupright.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <div className={styles.frameWrapper1}>
                <div className={styles.layersParent}>
                  <img
                    className={styles.layersIcon}
                    alt=""
                    src="/layers@2x.png"
                  />
                  <div className={styles.developmentWrapper}>
                    <div className={styles.development}>Development</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.rectangleDiv} />
                <img
                  className={styles.arrowuprightIcon1}
                  alt=""
                  src="/arrowupright-1.svg"
                />
              </div>
            </div>
          </div>
          <GroupComponent
            paper="/paper.svg"
            professionalDev="Professional Dev."
          />
          <GroupComponent
            paper="/img-box@2x.png"
            professionalDev="Photography"
            propFlex="0.9084"
            propPadding="var(--padding-mini) var(--padding-sm) var(--padding-mini) var(--padding-10xl)"
            propPadding1="0px 0px var(--padding-3xs)"
            propWidth="209px"
            propAlignSelf="stretch"
          />
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper2}>
            <div className={styles.rectangleParent2}>
              <div className={styles.frameChild1} />
              <div className={styles.frameWrapper3}>
                <div className={styles.databaseParent}>
                  <img
                    className={styles.databaseIcon}
                    alt=""
                    src="/database.svg"
                  />
                  <div className={styles.dataScienceWrapper}>
                    <div className={styles.dataScience}>Data Science</div>
                  </div>
                </div>
              </div>
              <div className={styles.dataAggregator}>
                <div className={styles.dataAggregatorChild} />
                <img
                  className={styles.arrowuprightIcon2}
                  alt=""
                  src="/arrowupright-4.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.groupDiv}>
              <div className={styles.frameChild2} />
              <div className={styles.colorPalette}>
                <img
                  className={styles.colorPaletteChild}
                  alt=""
                  src="/group-512843.svg"
                />
              </div>
              <div className={styles.linkNetwork}>
                <div className={styles.business}>Business</div>
              </div>
              <div className={styles.propertyPanel}>
                <div className={styles.propertyPanelChild} />
                <img
                  className={styles.arrowuprightIcon3}
                  alt=""
                  src="/arrowupright-4.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.rectangleParent3}>
            <div className={styles.frameChild3} />
            <div className={styles.frameWrapper5}>
              <div className={styles.chartPinParent}>
                <img
                  className={styles.chartPinIcon}
                  alt=""
                  src="/chart-pin.svg"
                />
                <div className={styles.marketingWrapper}>
                  <div className={styles.marketing}>Marketing</div>
                </div>
              </div>
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.frameChild4} />
              <img
                className={styles.arrowuprightIcon4}
                alt=""
                src="/arrowupright-4.svg"
              />
            </div>
          </div>
          <div className={styles.rectangleParent5}>
            <div className={styles.frameChild5} />
            <div className={styles.musicWrapper}>
              <img className={styles.musicIcon} alt="" src="/music.svg" />
            </div>
            <div className={styles.musicContainer}>
              <div className={styles.music}>Music</div>
            </div>
            <div className={styles.rectangleParent6}>
              <div className={styles.frameChild6} />
              <img
                className={styles.arrowuprightIcon5}
                alt=""
                src="/arrowupright-4.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
