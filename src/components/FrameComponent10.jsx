import PropTypes from "prop-types";
import styles from "./FrameComponent10.module.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-78@2x.png"
        />
      </div>
      <div className={styles.agrichainWrapper}>
        <a className={styles.agrichain}>AgriChain</a>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.iconlyboldcategoryParent}>
            <img
              className={styles.iconlyboldcategory}
              alt=""
              src="/iconlyboldcategory@2x.png"
            />
            <div className={styles.dashboardWrapper}>
              <a className={styles.dashboard}>Dashboard</a>
            </div>
          </div>
          <div className={styles.metricsIcons}>
            <img
              className={styles.iconlyboldgraph}
              loading="lazy"
              alt=""
              src="/iconlyboldgraph@2x.png"
            />
            <div className={styles.quotations}>quotations</div>
          </div>
          <div className={styles.metricsIcons1}>
            <img
              className={styles.iconlyboldbuy}
              loading="lazy"
              alt=""
              src="/iconlyboldbuy@2x.png"
            />
            <div className={styles.shipments}>shipments</div>
          </div>
          <div className={styles.metricsIcons2}>
            <img
              className={styles.mditruckFastOutlineIcon}
              loading="lazy"
              alt=""
              src="/mditruckfastoutline.svg"
            />
            <div className={styles.dispatches}>dispatches</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
