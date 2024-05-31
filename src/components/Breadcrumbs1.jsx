import PropTypes from "prop-types";
import styles from "./Breadcrumbs1.module.css";

const Breadcrumbs1 = ({ className = "" }) => {
  return (
    <div className={[styles.breadcrumbs, className].join(" ")}>
      <div className={styles.location}>
        <img
          className={styles.home11Icon}
          loading="lazy"
          alt=""
          src="/home1-1.svg"
        />
        <div className={styles.breadcrumbItems}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group1@2x.png"
          />
        </div>
        <div className={styles.home}>Home</div>
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.home1}>Home</div>
        <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        <div className={styles.home2}>Home</div>
        <img className={styles.vectorIcon2} alt="" src="/vector1.svg" />
        <div className={styles.home3}>Shopping Cart</div>
        <div className={styles.breadcrumbItems1}>
          <img className={styles.vectorIcon3} alt="" src="/vector1.svg" />
        </div>
        <div className={styles.vegetables}>Checkout</div>
      </div>
    </div>
  );
};

Breadcrumbs1.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumbs1;
