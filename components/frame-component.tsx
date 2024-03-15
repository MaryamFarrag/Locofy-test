import type { NextPage } from "next";
import styles from "./frame-component.module.css";

const FrameComponent: NextPage = () => {
  return (
    <section className={styles.homeAboutContact}>
      <div className={styles.titleTextParent}>
        <div className={styles.titleText}>
          <h1 className={styles.title}>A Price To Suit Everyone</h1>
          <div
            className={styles.body}
          >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</div>
        </div>
        <div className={styles.elementButtonMediumFilled}>
          <div className={styles.priceParent}>
            <div className={styles.price}>$40</div>
            <div className={styles.title1}>UI Design Kit</div>
          </div>
        </div>
        <div className={styles.bodyCardText}>
          <div className={styles.rectangleVector}>
            <div className={styles.body1}>See, One price. Simple.</div>
            <div className={styles.emptyNodes}>
              <div className={styles.elementbuttonmediumfilled}>
                <div className={styles.bg} />
                <div className={styles.buttonLabel}>Purchase Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
