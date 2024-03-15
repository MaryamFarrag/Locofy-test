import type { NextPage } from "next";
import styles from "./frame-component5.module.css";

const FrameComponent5: NextPage = () => {
  return (
    <section className={styles.navWrapper}>
      <header className={styles.nav}>
        <nav className={styles.navInner}>
          <nav className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.about}>About</div>
            <div className={styles.contact}>Contact</div>
          </nav>
        </nav>
        <div className={styles.rectangle} />
        <div className={styles.landieWrapper}>
          <h2 className={styles.landie}>Landing</h2>
        </div>
        <div className={styles.elementbuttonsmallfilledWrapper}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Buy Now</div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent5;
