import PropTypes from "prop-types";
import styles from "./FrameComponent4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <header className={[styles.searchBarParent, className].join(" ")}>
      <div className={styles.searchBar}>
        <div className={styles.searchInput}>
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
      <div className={styles.searchField}>
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
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-22.svg"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="/avatar@2x.png" />
            <div className={styles.frameContainer}>
              <div className={styles.tigerShroffParent}>
                <a className={styles.tigerShroff}>tiger shroff</a>
                <div className={styles.id1234567}>
                  <span className={styles.id}>{`ID: `}</span>
                  <span className={styles.span}>1234567</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <img className={styles.frameItem} alt="" src="/frame-3.svg" />
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
