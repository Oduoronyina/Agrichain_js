import PropTypes from "prop-types";
import styles from "./FrameComponent8.module.css";

const FrameComponent8 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.metricValuesWrapper}>
        <div className={styles.metricValues}>
          <img
            className={styles.metricValuesChild}
            loading="lazy"
            alt=""
            src="/group-275@2x.png"
          />
          <div className={styles.completedDeliveriesParent}>
            <div className={styles.completedDeliveries}>
              Completed Deliveries
            </div>
            <b className={styles.metricsUnits}>0</b>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.revenueBackgroundWrapper}>
              <div className={styles.revenueBackground} />
            </div>
            <img className={styles.icon} alt="" src="/.svg" />
          </div>
          <div className={styles.todaysRevenueParent}>
            <div className={styles.todaysRevenue}>today’s Revenue</div>
            <b className={styles.kes7000}>KES 7,000</b>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <img className={styles.frameChild} alt="" src="/group-275-1@2x.png" />
          <div className={styles.shipmentsParent}>
            <a className={styles.shipments}>shipments</a>
            <b className={styles.b}>50</b>
          </div>
        </div>
      </div>
      <div className={styles.frameWrapper1}>
        <div className={styles.frameParent2}>
          <img className={styles.frameItem} alt="" src="/group-275-2@2x.png" />
          <div className={styles.walletBallanceParent}>
            <div className={styles.walletBallance}>Wallet Ballance</div>
            <b className={styles.b1}>100</b>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
