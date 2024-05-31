import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.discountBannarWrapper, className].join(" ")}>
      <div className={styles.discountBannar}>
        <div className={styles.info}>
          <div className={styles.summerSaleParent}>
            <div className={styles.summerSale}>Summer Sale</div>
            <div className={styles.off}>
              <span className={styles.span}>
                <span className={styles.span1}>37%</span>
                <span>{` `}</span>
              </span>
              <span>
                <span>OFF</span>
              </span>
            </div>
          </div>
          <div className={styles.freeOnAll}>
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </div>
        </div>
        <button className={styles.button}>
          <b className={styles.shopNow}>Shop Now</b>
          <div className={styles.groupWrapper}>
            <img className={styles.groupIcon} alt="" src="/group-5.svg" />
          </div>
        </button>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
