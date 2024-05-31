import PropTypes from "prop-types";
import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ className = "" }) => {
  return (
    <div className={[styles.breadcrumbs, className].join(" ")}>
      <div className={styles.location}>
        <img className={styles.home11Icon} alt="" src="/home1-1.svg" />
        <img className={styles.groupIcon} alt="" src="/group1@2x.png" />
        <div className={styles.home}>Home</div>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <div className={styles.home1}>Home</div>
        <img className={styles.vectorIcon1} alt="" src="/vector.svg" />
        <div className={styles.home2}>Home</div>
        <img className={styles.vectorIcon2} alt="" src="/vector.svg" />
        <div className={styles.home3}>Vegetables</div>
        <div className={styles.shoppingCartLINKSWrapper}>
          <img className={styles.shoppingCartLINKS} alt="" src="/vector.svg" />
        </div>
        <div className={styles.vegetables}>Shopping Cart</div>
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumbs;
