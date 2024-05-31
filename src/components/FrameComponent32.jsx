import HowItWorksStepColumns from "./HowItWorksStepColumns";
import PropTypes from "prop-types";
import styles from "./FrameComponent32.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={[styles.logisticsLandingPageInner, className].join(" ")}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.howItWorksTitleContainerWrapper}>
            <div className={styles.howItWorksTitleContainer}>
              <div className={styles.howItWorksTitleDivider} />
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.mditruckFastOutlineIcon}
                  alt=""
                  src="/mditruckfastoutline-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.howItWorksParent}>
            <h1 className={styles.howItWorksContainer}>
              <span>
                <b>{`How it `}</b>
                <span>Works</span>
              </span>
            </h1>
            <div className={styles.frameItem} />
          </div>
        </div>
        <HowItWorksStepColumns
          prop="1"
          purchased="Purchased"
          youreCurrentlyRunningYour="You’re currently running your store on Shopify, WooCommerce, or any other platform. As a first step, you’ll connect your store with our platform."
          image3="/image-31@2x.png"
        />
        <div className={styles.howItWorksStepColumns}>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.frameInner}
              alt=""
              src="/rectangle-1314@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.emptyImageWrapper}>
                  <b className={styles.emptyImage}>2</b>
                </div>
                <h1 className={styles.processed}>Processed</h1>
              </div>
              <p className={styles.thenYouCan}>
                Then, you can send us your inventory and the fun begins. We’ll
                choose a delivery day together so your fulfilment is not
                interrupted.
              </p>
            </div>
            <img className={styles.groupIcon} alt="" src="/group-6934.svg" />
          </div>
        </div>
        <HowItWorksStepColumns
          prop="3"
          purchased="shipped"
          youreCurrentlyRunningYour="We pick, pack and ship all incoming orders directly from our own warehouse until 12pm on the same day,"
          image3="/91fa59e6781adbdced82e349bb595d99-1@2x.png"
          propAlignSelf="unset"
          propWidth="1140px"
          propPadding="0px var(--padding-xl)"
          propWidth1="950px"
          propWidth2="400px"
        />
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
