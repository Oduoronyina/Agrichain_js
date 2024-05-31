import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./HowItWorksStepColumns.module.css";

const HowItWorksStepColumns = ({
  className = "",
  prop,
  purchased,
  youreCurrentlyRunningYour,
  image3,
  propAlignSelf,
  propWidth,
  propPadding,
  propWidth1,
  propWidth2,
}) => {
  const howItWorksStepColumnsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      padding: propPadding,
    };
  }, [propAlignSelf, propWidth, propPadding]);

  const howItWorksStepRowsStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const image3IconStyle = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  return (
    <div
      className={[styles.howItWorksStepColumns, className].join(" ")}
      style={howItWorksStepColumnsStyle}
    >
      <div
        className={styles.howItWorksStepRows}
        style={howItWorksStepRowsStyle}
      >
        <div className={styles.howItWorksStepCells}>
          <div className={styles.howItWorksStepContent}>
            <div className={styles.wrapper}>
              <b className={styles.b}>{prop}</b>
            </div>
            <h1 className={styles.purchased}>{purchased}</h1>
          </div>
          <p className={styles.youreCurrentlyRunning}>
            {youreCurrentlyRunningYour}
          </p>
        </div>
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src={image3}
          style={image3IconStyle}
        />
      </div>
    </div>
  );
};

HowItWorksStepColumns.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  purchased: PropTypes.string,
  youreCurrentlyRunningYour: PropTypes.string,
  image3: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth1: PropTypes.any,
  propWidth2: PropTypes.any,
};

export default HowItWorksStepColumns;
