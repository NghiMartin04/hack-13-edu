import type { NextPage } from "next";
import styles from "./blending-mode-binder.module.css";

const BlendingModeBinder: NextPage = () => {
  return (
    <div className={styles.blendingModeBinder}>
      <div className={styles.effectEditor}>
        <div className={styles.shapeStyler}>
          <div className={styles.wrapperIcon}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/icon.svg"
            />
          </div>
          <div className={styles.containerComposer}>
            <h1 className={styles.edujar}>Edujar</h1>
          </div>
        </div>
        <div
          className={styles.veniamQuisNostrud}
        >{`Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</div>
      </div>
      <div className={styles.imageResizer}>
        <div className={styles.inputSplitter}>
          <h3 className={styles.quickLinks}>Quick Links</h3>
          <div className={styles.decisionTree}>
            <div className={styles.aboutParent}>
              <div className={styles.about}>About</div>
              <div className={styles.course}>Course</div>
            </div>
            <div className={styles.errorChecker}>
              <div className={styles.queueManager}>
                <div className={styles.blog}>Blog</div>
                <div className={styles.contact}>Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageDetectorWrapper}>
        <div className={styles.imageDetector}>
          <h3 className={styles.contactUs}>Contact us</h3>
          <div className={styles.randomizerParent}>
            <div className={styles.randomizer}>
              <div className={styles.frameParent}>
                <div className={styles.phoneIcon1Parent}>
                  <img
                    className={styles.phoneIcon1}
                    alt=""
                    src="/8666632-phone-icon-1.svg"
                  />
                  <div className={styles.div}>(209) 555-0104</div>
                </div>
                <div className={styles.frameGroup}>
                  <div className={styles.frameWrapper}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/group-13186.svg"
                    />
                  </div>
                  <div className={styles.michelleriveraexamplecom}>
                    michelle.rivera@example.com
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.addressLocationMapNavigatioIcon}
              alt=""
              src="/4200473-address-location-map-navigation-icon-1.svg"
            />
            <div className={styles.ashDrSan}>
              2715 Ash Dr. San Jose, South Dakota 83475
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlendingModeBinder;
