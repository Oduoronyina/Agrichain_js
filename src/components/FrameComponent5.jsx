import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/distributor-dashboard");
  }, [navigate]);

  return (
    <div className={[styles.rightPanelParent, className].join(" ")}>
      <div className={styles.rightPanel}>
        <img
          className={styles.rightPanelChild}
          loading="lazy"
          alt=""
          src="/frame-78@2x.png"
        />
      </div>
      <div className={styles.footer}>
        <a className={styles.agrichain}>AgriChain</a>
      </div>
      <div className={styles.distributorsNameWrapper}>
        <div className={styles.distributorsName}>
          <div className={styles.pwaniDistributors}>Pwani Distributors</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.iconlyboldcategoryParent}>
          <img
            className={styles.iconlyboldcategory}
            alt=""
            src="/iconlyboldcategory@2x.png"
          />
          <div className={styles.dataLabels}>
            <b className={styles.dashboard}>Dashboard</b>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
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
      <div className={styles.frameDiv}>
        <div
          className={styles.iconlyboldbuyParent}
          onClick={onFrameContainerClick}
        >
          <img
            className={styles.iconlyboldbuy}
            loading="lazy"
            alt=""
            src="/iconlyboldbuy@2x.png"
          />
          <div className={styles.processing}>Processing</div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
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
      <div className={styles.frameWrapper2}>
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

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
