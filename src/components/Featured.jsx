import PropTypes from "prop-types";
import styles from "./Featured.module.css";

const Featured = ({ className = "" }) => {
  return (
    <div className={[styles.featured, className].join(" ")}>
      <div className={styles.feature}>
        <img
          className={styles.deliveryTruck1Icon}
          loading="lazy"
          alt=""
          src="/deliverytruck-1.svg"
        />
        <div className={styles.info}>
          <b className={styles.freeShipping}>Free Shipping</b>
          <div className={styles.freeShippingOn}>
            Free shipping on all your order
          </div>
        </div>
      </div>
      <div className={styles.feature1}>
        <img className={styles.shippingIcon} alt="" src="/shipping.svg" />
        <img className={styles.sucureIcon} alt="" src="/sucure.svg" />
        <img className={styles.boxIcon} alt="" src="/box.svg" />
        <img
          className={styles.headphones1Icon}
          alt=""
          src="/headphones-1.svg"
        />
        <div className={styles.info1}>
          <div className={styles.customerSupport247}>Customer Support 24/7</div>
          <div className={styles.instantAccessTo}>
            Instant access to Support
          </div>
        </div>
      </div>
      <div className={styles.feature2}>
        <img className={styles.shippingIcon1} alt="" src="/shipping.svg" />
        <img className={styles.icon} alt="" src="/247.svg" />
        <img className={styles.boxIcon1} alt="" src="/box.svg" />
        <img className={styles.shoppingBagIcon} alt="" src="/shoppingbag.svg" />
        <div className={styles.info2}>
          <div className={styles.securePayment}>100% Secure Payment</div>
          <div className={styles.weEnsureYour}>
            We ensure your money is save
          </div>
        </div>
      </div>
      <div className={styles.feature3}>
        <img className={styles.shippingIcon2} alt="" src="/shipping.svg" />
        <img className={styles.icon1} alt="" src="/247.svg" />
        <img className={styles.sucureIcon1} alt="" src="/sucure.svg" />
        <img className={styles.packageIcon} alt="" src="/package.svg" />
        <div className={styles.info3}>
          <b className={styles.moneyBackGuarantee}>Money-Back Guarantee</b>
          <div className={styles.daysMoneyBackGuarantee}>
            30 Days Money-Back Guarantee
          </div>
        </div>
      </div>
    </div>
  );
};

Featured.propTypes = {
  className: PropTypes.string,
};

export default Featured;
