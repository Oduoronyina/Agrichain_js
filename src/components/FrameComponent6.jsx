import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent6.module.css";

const FrameComponent6 = ({ className = "", statsIconsTextDecoration }) => {
  const dashboardStyle = useMemo(() => {
    return {
      textDecoration: statsIconsTextDecoration,
    };
  }, [statsIconsTextDecoration]);

  return (
    <div className={[styles.rightPanelParent, className].join(" ")}>
      <div className={styles.rightPanel}>
        <img
          className={styles.userProfileIcon}
          loading="lazy"
          alt=""
          src="/frame-78@2x.png"
        />
      </div>
      <div className={styles.appName}>
        <a className={styles.agrichain}>AgriChain</a>
      </div>
      <div className={styles.distributorName}>
        <div className={styles.distributorsName}>
          <div className={styles.pwaniDistributors}>Pwani Distributors</div>
        </div>
      </div>
      <div className={styles.statsIcons}>
        <div className={styles.statsIconsRow}>
          <img
            className={styles.iconlyboldcategory}
            loading="lazy"
            alt=""
            src="/iconlyboldcategory1@2x.png"
          />
          <div className={styles.statsData}>
            <a className={styles.dashboard} style={dashboardStyle}>
              Dashboard
            </a>
          </div>
        </div>
      </div>
      <div className={styles.statsIcons1}>
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
      <div className={styles.statsIcons2}>
        <button className={styles.iconlyboldbuyParent}>
          <img
            className={styles.iconlyboldbuy}
            alt=""
            src="/iconlyboldbuy1@2x.png"
          />
          <div className={styles.processing}>Processing</div>
        </button>
      </div>
      <div className={styles.statsIcons3}>
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
      <div className={styles.statsIcons4}>
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

FrameComponent6.propTypes = {
  className: PropTypes.string,

  /** Style props */
  statsIconsTextDecoration: PropTypes.any,
};

export default FrameComponent6;
