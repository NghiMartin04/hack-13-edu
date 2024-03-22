import type { NextPage } from "next";
import styles from "./layout-lab.module.css";

const LayoutLab: NextPage = () => {
  return (
    <div className={styles.layoutLab}>
      <div className={styles.anchoringArea}>
        <div className={styles.axisAligner}>
          <img
            className={styles.starIcon}
            loading="lazy"
            alt=""
            src="/star.svg"
          />
        </div>
        <div className={styles.imageInput}>
          <div className={styles.buttonBuilderParent}>
            <div className={styles.buttonBuilder}>
              <div className={styles.arcArchitectParent}>
                <div className={styles.arcArchitect}>
                  <h1 className={styles.whatIsOurContainer}>
                    <p className={styles.whatIsOur}>{`What is our `}</p>
                    <p className={styles.difference}>difference</p>
                  </h1>
                </div>
                <div className={styles.starShaper}>
                  <div className={styles.pathPatternerParent}>
                    <div className={styles.pathPatterner}>
                      <div
                        className={styles.loremIpsumDolor}
                      >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ex ea commodo consequat. `}</div>
                      <div className={styles.fontFixer}>
                        <div className={styles.fontFixerChild} />
                        <img
                          className={styles.shapeTransformerIcon}
                          loading="lazy"
                          alt=""
                          src="/frame-2.svg"
                        />
                      </div>
                    </div>
                    <div
                      className={styles.utLaboreEt}
                    >{` ut labore et dolore magna aliqua. ex ea commodo consequat. `}</div>
                  </div>
                </div>
                <div className={styles.imageImporter}>
                  <button className={styles.buttonBase}>
                    <div className={styles.matrixModifier}>Learn More</div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.propertyProvider}>
              <div className={styles.propertyProviderChild} />
              <div className={styles.layoutLayouter}>
                <div className={styles.layoutLayouterChild} />
                <img
                  className={styles.layer5Icon}
                  loading="lazy"
                  alt=""
                  src="/layer-5@2x.png"
                />
              </div>
              <img className={styles.groupIcon} alt="" src="/group-1.svg" />
            </div>
          </div>
          <div className={styles.linkLinker}>
            <div className={styles.imageInputProcessor}>
              <div className={styles.buttonBuilderEngineParent}>
                <button className={styles.buttonBuilderEngine}>
                  <img
                    className={styles.graduationcapIcon}
                    alt=""
                    src="/graduationcap.svg"
                  />
                </button>
                <div className={styles.arcArchitectEngine}>
                  <div className={styles.starShaperEngineParent}>
                    <b className={styles.starShaperEngine}>300</b>
                    <div className={styles.instructor}>Instructor</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent}>
                <button className={styles.usersWrapper}>
                  <img className={styles.usersIcon} alt="" src="/users.svg" />
                </button>
                <div className={styles.frameWrapper}>
                  <div className={styles.parent}>
                    <b className={styles.b}>20,000+</b>
                    <div className={styles.student}>Student</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <button className={styles.videocameraWrapper}>
                  <img
                    className={styles.videocameraIcon}
                    alt=""
                    src="/videocamera.svg"
                  />
                </button>
                <div className={styles.frameContainer}>
                  <div className={styles.group}>
                    <b className={styles.b1}>10,000+</b>
                    <div className={styles.video}>Video</div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <button className={styles.usersthreeWrapper}>
                  <img
                    className={styles.usersthreeIcon}
                    alt=""
                    src="/usersthree.svg"
                  />
                </button>
                <div className={styles.frameWrapper1}>
                  <div className={styles.container}>
                    <b className={styles.b2}>1,00,000+</b>
                    <div className={styles.users}>User’s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutLab;
