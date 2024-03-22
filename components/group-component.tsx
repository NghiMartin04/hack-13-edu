import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  paper?: string;
  professionalDev?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  paper,
  professionalDev,
  propFlex,
  propPadding,
  propPadding1,
  propWidth,
  propAlignSelf,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
    };
  }, [propFlex, propPadding]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const professionalDevStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.rectangleParent} style={groupDiv1Style}>
      <div className={styles.frameChild} />
      <div className={styles.paperWrapper} style={frameDivStyle}>
        <img className={styles.paperIcon} alt="" src={paper} />
      </div>
      <div className={styles.professionalDevWrapper} style={frameDiv1Style}>
        <div className={styles.professionalDev} style={professionalDevStyle}>
          {professionalDev}
        </div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <img
          className={styles.arrowuprightIcon}
          alt=""
          src="/arrowupright-1.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
