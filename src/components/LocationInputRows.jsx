import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./LocationInputRows.module.css";

const LocationInputRows = ({
  className = "",
  iconlyBoldLocation,
  enterLocationPlaceholder,
  origin1,
  propBackgroundColor,
  propBackgroundColor1,
  propWidth,
  propMinWidth,
  propPadding,
  propMinWidth1,
}) => {
  const locationInputCellsStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const locationIconRowsStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const enterLocationStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const locationLabelsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const originStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.locationInputRows, className].join(" ")}>
      <div
        className={styles.locationInputCells}
        style={locationInputCellsStyle}
      >
        <div
          className={styles.locationInputCellsChild}
          style={rectangleDivStyle}
        />
        <div className={styles.locationIconRows} style={locationIconRowsStyle}>
          <div className={styles.fullName}>full name</div>
          <div className={styles.locationIconCells}>
            <div className={styles.locationIconsInput}>
              <img
                className={styles.iconlyboldlocation}
                alt=""
                src={iconlyBoldLocation}
              />
              <input
                className={styles.enterLocation}
                placeholder={enterLocationPlaceholder}
                type="text"
                style={enterLocationStyle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.locationLabels} style={locationLabelsStyle}>
        <div className={styles.origin} style={originStyle}>
          {origin1}
        </div>
      </div>
    </div>
  );
};

LocationInputRows.propTypes = {
  className: PropTypes.string,
  iconlyBoldLocation: PropTypes.string,
  enterLocationPlaceholder: PropTypes.string,
  origin1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default LocationInputRows;
