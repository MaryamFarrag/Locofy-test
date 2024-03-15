import type { NextPage } from "next";
import FrameComponent5 from "../components/frame-component5";
import UndrawMobileLoginIkmvEle from "../components/undraw-mobile-login-ikmv-ele";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import Footer from "../components/footer";
import styles from "./index.module.css";

const LandingPage: NextPage = () => {
  return (
    <div className={styles.landingPage2}>
      <div className={styles.mask} />
      <FrameComponent5 />
      <div className={styles.landingPage2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.titleParent}>
            <h1
              className={styles.title}
            >{`Introduce Your Product Quickly & Effectively`}</h1>
            <div className={styles.body}>
              <p
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus `}</p>
              <p className={styles.musDonecQuam}>
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
          </div>
          <div className={styles.elementbuttonlargefilledParent}>
            <div className={styles.elementbuttonlargefilled}>
              <div className={styles.bg} />
              <div className={styles.buttonLabel}>Purchase UI Kit</div>
            </div>
            <div className={styles.elementbuttonlargefilledCo}>
              <div className={styles.bg1} />
              <div className={styles.buttonLabel1}>Learn More</div>
            </div>
          </div>
        </div>
      </div>
      <UndrawMobileLoginIkmvEle />
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
    </div>
  );
};

export default LandingPage;
