import PropTypes from "prop-types";
import styles from "./NavLinks.module.css";

const NavLinks = ({ className = "" }) => {
  return (
    <div className={[styles.navLinks, className].join(" ")}>
      <div className={styles.navLinks1}>
        <div className={styles.navLinks2}>
          <div className={styles.home}>Home</div>
          <img
            className={styles.chevronDownIcon}
            alt=""
            src="/chevron-down1.svg"
          />
        </div>
        <div className={styles.navLinks3}>
          <div className={styles.home1}>Shop</div>
          <img
            className={styles.chevronDownIcon1}
            alt=""
            src="/chevron-down-11.svg"
          />
        </div>
        <div className={styles.navLinks4}>
          <div className={styles.home2}>Pages</div>
          <img
            className={styles.chevronDownIcon2}
            alt=""
            src="/chevron-down-11.svg"
          />
        </div>
      </div>
      <div className={styles.callNow}>
        <img
          className={styles.phonecall1Icon}
          loading="lazy"
          alt=""
          src="/phonecall-11.svg"
        />
        <div className={styles.callLabel}>012345677</div>
      </div>
    </div>
  );
};

NavLinks.propTypes = {
  className: PropTypes.string,
};

export default NavLinks;
