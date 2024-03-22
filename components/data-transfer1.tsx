import type { NextPage } from "next";
import styles from "./data-transfer1.module.css";

const DataTransfer1: NextPage = () => {
  return (
    <div className={styles.dataTransfer}>
      <div className={styles.inputNormalizer} />
      <div className={styles.outputProcessor}>
        <div className={styles.copyright2023}>
          Copyright 2023 | All Rights Reserved
        </div>
        <div className={styles.weightedRandom}>
          <div className={styles.iconsfacebooklineParent}>
            <img
              className={styles.iconsfacebookline}
              alt=""
              src="/iconsfacebookline.svg"
            />
            <img
              className={styles.iconstwitterline}
              alt=""
              src="/iconstwitterline.svg"
            />
            <img
              className={styles.iconsinstagramline}
              alt=""
              src="/iconsinstagramline.svg"
            />
            <img
              className={styles.iconsbehanceline}
              alt=""
              src="/iconsbehanceline.svg"
            />
            <img
              className={styles.iconsdribbbleline}
              alt=""
              src="/iconsdribbbleline.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTransfer1;
