import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerInner}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.plant1Wrapper}>
              <img className={styles.plant1Icon} alt="" src="/plant-1.svg" />
            </div>
            <h1 className={styles.ecobazar}>AgriChain</h1>
          </div>
          <div className={styles.morbiCursusPorttitor}>
            Agricultural Products Rural Entrepreneurship Management System:
            AgriChain
          </div>
        </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.button}>
          <div className={styles.div}>(219) 555-0114</div>
        </div>
        <div className={styles.or}>or</div>
        <div className={styles.button1}>
          <div className={styles.proxygmailcom}>Proxy@gmail.com</div>
        </div>
      </div>
      <div className={styles.myAccountParent}>
        <div className={styles.myAccount}>My Account</div>
        <div className={styles.myAccountGroup}>
          <div className={styles.myAccount1}>My Account</div>
          <div className={styles.orderHistory}>Order History</div>
          <div className={styles.shopingCart}>Shoping Cart</div>
          <div className={styles.wishlist}>Wishlist</div>
        </div>
      </div>
      <div className={styles.helpsParent}>
        <div className={styles.helps}>Helps</div>
        <div className={styles.contactParent}>
          <div className={styles.contact}>Contact</div>
          <div className={styles.faqs}>Faqs</div>
          <div className={styles.termsCondition}>{`Terms & Condition`}</div>
          <div className={styles.privacyPolicy}>Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
