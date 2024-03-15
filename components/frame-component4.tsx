import type { NextPage } from "next";
import styles from "./frame-component4.module.css";

const FrameComponent4: NextPage = () => {
  return (
    <div className={styles.nA}>
      <img
        className={styles.elementcardinfoCardsmalliIcon}
        loading="lazy"
        alt=""
        src="/elementcardinfocardsmalliconpositionleft@2x.png"
      />
      <div className={styles.titleParent}>
        <div className={styles.title}>Title Goes Here</div>
        <div
          className={styles.body}
        >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. `}</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
