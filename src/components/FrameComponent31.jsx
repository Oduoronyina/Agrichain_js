import PropTypes from "prop-types";
import styles from "./FrameComponent31.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.metricsAndChartInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
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
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
