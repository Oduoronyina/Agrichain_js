import PropTypes from "prop-types";
import styles from "./DistributionContent.module.css";

const DistributionContent = ({ className = "" }) => {
  return (
    <div className={[styles.distributionContent, className].join(" ")}>
      <div className={styles.distributionHeader}>
        <b className={styles.distributionCycle}>Distribution Cycle</b>
        <div className={styles.distributionChart}>
          <div className={styles.chartBars}>
            <img
              className={styles.chartBarsChild}
              loading="lazy"
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className={styles.barChartLabels}>
              <div className={styles.redVelvetFrostings}>
                Red velvet frostings
              </div>
            </div>
          </div>
          <div className={styles.chartBars1}>
            <img
              className={styles.chartBarsItem}
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className={styles.redVelvetFrostingsWrapper}>
              <div className={styles.redVelvetFrostings1}>
                Red velvet frostings
              </div>
            </div>
          </div>
          <div className={styles.chartBars2}>
            <img
              className={styles.chartBarsInner}
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className={styles.redVelvetFrostingsContainer}>
              <div className={styles.redVelvetFrostings2}>
                Red velvet frostings
              </div>
            </div>
          </div>
          <div className={styles.chartBars3}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className={styles.redVelvetFrostingsFrame}>
              <div className={styles.redVelvetFrostings3}>
                Red velvet frostings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.branchNames}>
        <div className={styles.branchNamePairs}>
          <div className={styles.abujaBranch}>abuja branch</div>
          <div className={styles.abujaBranch1}>abuja branch</div>
          <div className={styles.abujaBranch2}>abuja branch</div>
          <div className={styles.abujaBranch3}>abuja branch</div>
        </div>
      </div>
      <div className={styles.branchNames1}>
        <div className={styles.abujaBranchParent}>
          <div className={styles.abujaBranch4}>abuja branch</div>
          <div className={styles.abujaBranch5}>abuja branch</div>
          <div className={styles.abujaBranch6}>abuja branch</div>
          <div className={styles.abujaBranch7}>abuja branch</div>
        </div>
      </div>
      <div className={styles.distributionFooter}>
        <div className={styles.footerContent}>
          <button className={styles.viewAllButton}>
            <b className={styles.viewAll}>View all</b>
          </button>
          <div className={styles.totalSales}>
            <div className={styles.salesAmount}>
              <div className={styles.kes7000}>KES 7,000</div>
              <div className={styles.x5}>x 5</div>
            </div>
          </div>
          <div className={styles.individualSales}>
            <div className={styles.salesBreakdown}>
              <div className={styles.salesPairs}>
                <div className={styles.kes70001}>KES 7,000</div>
                <div className={styles.x51}>x 5</div>
              </div>
              <div className={styles.salesPairs1}>
                <div className={styles.kes70002}>KES 7,000</div>
                <div className={styles.x52}>x 5</div>
              </div>
              <div className={styles.salesPairs2}>
                <div className={styles.kes70003}>KES 7,000</div>
                <div className={styles.x53}>x 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DistributionContent.propTypes = {
  className: PropTypes.string,
};

export default DistributionContent;
