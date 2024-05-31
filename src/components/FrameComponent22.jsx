import PropTypes from "prop-types";
import styles from "./FrameComponent22.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.rightSidebarParent, className].join(" ")}>
      <div className={styles.rightSidebar}>
        <img
          className={styles.rightSidebarChild}
          loading="lazy"
          alt=""
          src="/frame-78@2x.png"
        />
      </div>
      <div className={styles.brandName}>
        <a className={styles.agrichain}>AgriChain</a>
      </div>
      <div className={styles.farmNameWrapper}>
        <button className={styles.farmName}>
          <div className={styles.mombasaFarm}>Mombasa Farm</div>
        </button>
      </div>
      <div className={styles.metricIconsRowWrapper}>
        <div className={styles.metricIconsRow}>
          <img
            className={styles.iconlyboldcategory}
            alt=""
            src="/iconlyboldcategory@2x.png"
          />
          <div className={styles.metricLabels}>
            <b className={styles.dashboard}>Dashboard</b>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.iconlyboldgraphParent}>
          <img
            className={styles.iconlyboldgraph}
            loading="lazy"
            alt=""
            src="/iconlyboldgraph@2x.png"
          />
          <div className={styles.quotations}>quotations</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.iconlyboldbuyParent}>
          <img
            className={styles.iconlyboldbuy}
            loading="lazy"
            alt=""
            src="/iconlyboldbuy@2x.png"
          />
          <div className={styles.shipments}>shipments</div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.mditruckFastOutlineParent}>
          <img
            className={styles.mditruckFastOutlineIcon}
            loading="lazy"
            alt=""
            src="/mditruckfastoutline.svg"
          />
          <div className={styles.dispatches}>dispatches</div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.stockholmIconsShoppingSParent}>
          <img
            className={styles.stockholmIconsShoppingS}
            loading="lazy"
            alt=""
            src="/stockholmicons--shopping--settings@2x.png"
          />
          <div className={styles.storeManageentWrapper}>
            <div className={styles.storeManageent}>store manageent</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
