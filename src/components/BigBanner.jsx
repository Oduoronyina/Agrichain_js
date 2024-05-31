import PropTypes from "prop-types";
import styles from "./BigBanner.module.css";

const BigBanner = ({ className = "" }) => {
  return (
    <div className={[styles.bigBanner, className].join(" ")}>
      <div className={styles.bannarBig}>
        <div className={styles.freshHealthyOrganicFoodParent}>
          <b className={styles.freshHealthy}>AgriChain</b>
          <div className={styles.bannerDiscount}>
            <div className={styles.discountShape} />
            <div className={styles.description}>
              <div className={styles.saleUpToParent}>
                <h3 className={styles.saleUpTo}>Sale up to</h3>
                <div className={styles.offWrapper}>
                  <b className={styles.off}>30% OFF</b>
                </div>
              </div>
              <div className={styles.freeShippingOn}>
                Free shipping on all your order.
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <b className={styles.shopNow}>Shop now</b>
            <div className={styles.shopNowIcon}>
              <img className={styles.groupIcon} alt="" src="/group.svg" />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.smallBanner}>
        <div className={styles.bannar}>
          <img className={styles.bgIcon} alt="" src="/bg@2x.png" />
          <div className={styles.info}>
            <div className={styles.saleInfo}>
              <div className={styles.summerSale}>
                <div className={styles.summerSale1}>Summer Sale</div>
                <b className={styles.off1}>75% OFF</b>
              </div>
              <div className={styles.onlyFruit}>{`Only Fruit & Vegetable`}</div>
            </div>
            <div className={styles.button1}>
              <b className={styles.shopNow1}>Shop Now</b>
              <img className={styles.groupIcon1} alt="" src="/group.svg" />
            </div>
          </div>
        </div>
        <div className={styles.bannar1}>
          <img className={styles.bgIcon1} alt="" src="/bg-1@2x.png" />
          <div className={styles.info1}>
            <div className={styles.info2}>
              <div className={styles.bestDealWrapper}>
                <div className={styles.bestDeal}>Best Deal</div>
              </div>
              <h1 className={styles.specialProductsDeal}>
                Special Products Deal of the Month
              </h1>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.button2}>
                <b className={styles.shopNow2}>Shop Now</b>
                <div className={styles.smallShopIcon}>
                  <img className={styles.groupIcon2} alt="" src="/group.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BigBanner.propTypes = {
  className: PropTypes.string,
};

export default BigBanner;
