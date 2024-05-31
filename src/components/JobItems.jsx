import PropTypes from "prop-types";
import styles from "./JobItems.module.css";

const JobItems = ({ className = "" }) => {
  return (
    <div className={[styles.jobItems, className].join(" ")}>
      <div className={styles.jobsHeader}>
        <div className={styles.jobsTitle}>
          <b className={styles.availableJobs}>Available Jobs</b>
        </div>
        <button className={styles.viewJobs}>
          <b className={styles.viewAll}>View all</b>
        </button>
      </div>
      <div className={styles.jobItem}>
        <div className={styles.jobDetails}>
          <img
            className={styles.jobBackgroundsIcon}
            loading="lazy"
            alt=""
            src="/rectangle-23@2x.png"
          />
          <div className={styles.jobTitles}>
            <div className={styles.redVelvetFrostings}>
              Red velvet frostings
            </div>
          </div>
        </div>
        <div className={styles.jobLocations}>
          <div className={styles.abujaBranch}>abuja branch</div>
        </div>
        <div className={styles.jobPrices}>
          <div className={styles.priceDetails}>
            <div className={styles.kes7000}>KES 7,000</div>
            <div className={styles.x5}>x 5</div>
          </div>
        </div>
        <div className={styles.jobActions}>
          <div className={styles.applyButton}>
            <b className={styles.apply}>Apply</b>
          </div>
        </div>
      </div>
      <div className={styles.jobItem1}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            alt=""
            src="/rectangle-23@2x.png"
          />
          <div className={styles.redVelvetFrostingsWrapper}>
            <div className={styles.redVelvetFrostings1}>
              Red velvet frostings
            </div>
          </div>
        </div>
        <div className={styles.abujaBranchWrapper}>
          <div className={styles.abujaBranch1}>abuja branch</div>
        </div>
        <div className={styles.jobItemInner}>
          <div className={styles.kes7000Parent}>
            <div className={styles.kes70001}>KES 7,000</div>
            <div className={styles.x51}>x 5</div>
          </div>
        </div>
        <div className={styles.prizeWrapper}>
          <div className={styles.prize}>
            <b className={styles.apply1}>Apply</b>
          </div>
        </div>
      </div>
      <div className={styles.jobItem2}>
        <div className={styles.rectangleGroup}>
          <img className={styles.frameItem} alt="" src="/rectangle-23@2x.png" />
          <div className={styles.redVelvetFrostingsContainer}>
            <div className={styles.redVelvetFrostings2}>
              Red velvet frostings
            </div>
          </div>
        </div>
        <div className={styles.abujaBranchContainer}>
          <div className={styles.abujaBranch2}>abuja branch</div>
        </div>
        <div className={styles.jobItemChild}>
          <div className={styles.kes7000Group}>
            <div className={styles.kes70002}>KES 7,000</div>
            <div className={styles.x52}>x 5</div>
          </div>
        </div>
        <div className={styles.prizeContainer}>
          <div className={styles.prize1}>
            <b className={styles.apply2}>Apply</b>
          </div>
        </div>
      </div>
      <div className={styles.jobItem3}>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.frameInner}
            alt=""
            src="/rectangle-23@2x.png"
          />
          <div className={styles.redVelvetFrostingsFrame}>
            <div className={styles.redVelvetFrostings3}>
              Red velvet frostings
            </div>
          </div>
        </div>
        <div className={styles.abujaBranchFrame}>
          <div className={styles.abujaBranch3}>abuja branch</div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.kes7000Container}>
            <div className={styles.kes70003}>KES 7,000</div>
            <div className={styles.x53}>x 5</div>
          </div>
        </div>
        <div className={styles.prizeFrame}>
          <div className={styles.prize2}>
            <b className={styles.apply3}>Apply</b>
          </div>
        </div>
      </div>
    </div>
  );
};

JobItems.propTypes = {
  className: PropTypes.string,
};

export default JobItems;
