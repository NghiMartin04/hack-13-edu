import type { NextPage } from "next";
import ConditionSet from "../components/condition-set";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import LayoutLab from "../components/layout-lab";
import PathPatternerEngine from "../components/path-patterner-engine";
import AnchoringAnchor from "../components/anchoring-anchor";
import StrokeStylist from "../components/stroke-stylist";
import BlendingModeBinder from "../components/blending-mode-binder";
import DataTransfer1 from "../components/data-transfer1";
import styles from "./index.module.css";

const EducationOrOnlineEducation: NextPage = () => {
  return (
    <div className={styles.educationOrOnlineEducation}>
      <div className={styles.label}>Email</div>
      <ConditionSet />
      <section className={styles.educationOrOnlineEducationInner}>
        <div className={styles.frameParent}>
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent1 />
      <section className={styles.educationOrOnlineEducationChild}>
        <div className={styles.frameGroup}>
          <FrameComponent />
          <LayoutLab />
          <PathPatternerEngine />
        </div>
      </section>
      <AnchoringAnchor />
      <StrokeStylist />
      <footer className={styles.variableVariator}>
        <div className={styles.variableVariatorChild} />
        <BlendingModeBinder />
        <DataTransfer1 />
      </footer>
    </div>
  );
};

export default EducationOrOnlineEducation;
