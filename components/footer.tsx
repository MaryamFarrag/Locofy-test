import type { NextPage } from "next";
import styles from "./footer.module.css";

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.rectangle} />
      <div className={styles.landie}>
        <div className={styles.introCopy}>
          <div className={styles.div}>©2023 Yourcompany</div>
        </div>
        <div className={styles.cTAcopy}>
          <h2 className={styles.landie1}>Landing</h2>
        </div>
        <div className={styles.iconButtonSmallFilled}>
          <div className={styles.elementbuttonsmallfilled}>
            <div className={styles.bg} />
            <div className={styles.buttonLabel}>Purchase now</div>
          </div>
        </div>
      </div>
      <div className={styles.footerFrame}>
        <div className={styles.emptyFrames} />
        <div className={styles.emptyFrames1}>
          <div className={styles.aboutFrame}>
            <div className={styles.home}>Home</div>
            <div className={styles.about}>About</div>
            <div className={styles.contact}>Contact</div>
          </div>
          <div className={styles.emptyFrames2}>
            <div className={styles.emptyNodes}>
              <img
                className={styles.iconsocialinstagramCopy4}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-4.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy3}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-3@2x.png"
              />
              <img
                className={styles.iconsocialinstagramCopy2}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy-2.svg"
              />
              <img
                className={styles.iconsocialinstagramCopy}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram-copy@2x.png"
              />
              <img
                className={styles.iconsocialinstagram}
                loading="lazy"
                alt=""
                src="/iconsocialinstagram@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
