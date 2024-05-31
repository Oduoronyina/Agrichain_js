import PropTypes from "prop-types";
import styles from "./FrameComponent71.module.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <div className={styles.plant1Wrapper}>
            <img
              className={styles.plant1Icon}
              loading="lazy"
              alt=""
              src="/plant-1.svg"
            />
          </div>
          <a className={styles.ecobazar}>AgriChain</a>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.homeParent}>
          <a className={styles.home}>Home</a>
          <a className={styles.about}>About</a>
          <a className={styles.products}>Products</a>
          <a className={styles.projects}>Projects</a>
        </div>
      </div>
      <div className={styles.fillButton}>
        <div className={styles.iconsaxlinearcallWrapper}>
          <img
            className={styles.iconsaxlinearcall}
            loading="lazy"
            alt=""
            src="/iconsaxlinearcall.svg"
          />
        </div>
        <div className={styles.callAnytimeParent}>
          <a className={styles.callAnytime}>Call Anytime</a>
          <a className={styles.a}>012345677</a>
        </div>
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
