import PropTypes from "prop-types";
import styles from "./TopBar.module.css";

const TopBar = ({ className = "" }) => {
  return (
    <header className={[styles.topBar, className].join(" ")}>
      <div className={styles.topBarInner}>
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
      <div className={styles.profileInfo}>
        <div className={styles.profileInfoInner}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-22.svg"
          />
        </div>
        <div className={styles.profileDetails}>
          <img
            className={styles.profileBackgroundIcon}
            alt=""
            src="/avatar@2x.png"
          />
          <div className={styles.nameAndIdWrapper}>
            <div className={styles.nameAndId}>
              <a className={styles.tigerShroff}>tiger shroff</a>
              <a className={styles.walletId1234567Container}>
                <span className={styles.walletId}>{`Wallet ID: `}</span>
                <span className={styles.span}>1234567</span>
              </a>
            </div>
          </div>
          <div className={styles.notificationIcon}>
            <img
              className={styles.notificationBellIcon}
              alt=""
              src="/frame-3.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
