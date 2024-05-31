import PropTypes from "prop-types";
import styles from "./FrameComponent9.module.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.menuParent}>
          <img
            className={styles.menuIcon}
            loading="lazy"
            alt=""
            src="/menu.svg"
          />
          <div className={styles.dashbboardWrapper}>
            <b className={styles.dashbboard}>dashbboard</b>
          </div>
        </div>
      </div>
      <div className={styles.stockholmIconsGeneralSeParent}>
        <img
          className={styles.stockholmIconsGeneralSe}
          alt=""
          src="/stockholmicons--general--search@2x.png"
        />
        <div className={styles.searchBySalesProductsAttWrapper}>
          <div className={styles.searchBySales}>
            Search by sales, products, attendants, branch
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-221.svg"
          />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.profileBackgroundParent}>
            <img
              className={styles.profileBackgroundIcon}
              alt=""
              src="/avatar@2x.png"
            />
            <div className={styles.frameWrapper1}>
              <div className={styles.tigerShroffParent}>
                <a className={styles.tigerShroff}>tiger shroff</a>
                <a className={styles.id1234567}>
                  <span className={styles.id}>{`ID: `}</span>
                  <span className={styles.span}>1234567</span>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.statusIconWrapper}>
            <img className={styles.statusIcon} alt="" src="/frame-3.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
