import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./StoreLocations.module.css";

const StoreLocations = ({
  className = "",
  group7028,
  group70281,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const secondaryMapPinNameStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const polygonIconStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <div className={[styles.storeLocations, className].join(" ")}>
      <div className={styles.storeLocationsContainer}>
        <div className={styles.storeLocationsContent}>
          <div className={styles.storeLocationHeader}>
            <b className={styles.storeLocations1}>store locations</b>
          </div>
          <div className={styles.storeLocationItem}>
            <div className={styles.storeLocationName}>
              <b className={styles.inMombasa}>in Mombasa</b>
            </div>
            <img
              className={styles.storeLocationDetails}
              alt=""
              src="/frame-3.svg"
            />
          </div>
        </div>
        <div className={styles.frameParent}>
          <img className={styles.frameChild} alt="" src="/group-25@2x.png" />
          <div className={styles.mapContent}>
            <div className={styles.mapPin}>
              <img
                className={styles.mapPinChild}
                loading="lazy"
                alt=""
                src={group7028}
              />
            </div>
            <div className={styles.mapPinDetails}>
              <div className={styles.mombasaKenya}>Mombasa, Kenya</div>
              <b className={styles.dashboard}>view details</b>
            </div>
          </div>
          <div className={styles.secondaryMapPin}>
            <div className={styles.secondaryMapPinContent}>
              <img
                className={styles.secondaryMapPinContentChild}
                loading="lazy"
                alt=""
                src="/polygon-2.svg"
              />
              <div className={styles.secondaryMapPinDetails}>
                <div className={styles.secondaryMapPinLocation}>
                  <div
                    className={styles.secondaryMapPinName}
                    style={secondaryMapPinNameStyle}
                  >
                    <div className={styles.secondaryMapPinNameInner}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src={group70281}
                      />
                    </div>
                    <div className={styles.secondaryMapPinNameAndLab}>
                      <div className={styles.mombasaKenya1}>Mombasa, Kenya</div>
                      <b className={styles.dashboard1}>view details</b>
                    </div>
                  </div>
                  <div className={styles.secondaryMapPinDirection}>
                    <img
                      className={styles.secondaryMapPinDirectionChild}
                      alt=""
                      src="/polygon-2.svg"
                      style={polygonIconStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderProcessing}>
        <div className={styles.orderSummary}>
          <div className={styles.orderSummaryHeader}>
            <b className={styles.processing}>Processing</b>
          </div>
          <button className={styles.orderSummaryAction}>
            <b className={styles.viewAll}>View all</b>
          </button>
        </div>
        <div className={styles.orderProcessingRows}>
          <div className={styles.orderProcessingRow}>
            <img
              className={styles.orderProcessingStatus}
              loading="lazy"
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className={styles.orderProcessingItems}>
              <div className={styles.redVelvetFrostings}>
                Red velvet frostings
              </div>
            </div>
          </div>
          <div className={styles.orderItemLocation}>
            <div className={styles.abujaBranch}>abuja branch</div>
          </div>
          <div className={styles.orderItemPrice}>
            <div className={styles.orderItemPriceDetails}>
              <div className={styles.kes7000}>KES 7,000</div>
              <div className={styles.x5}>x 5</div>
            </div>
          </div>
        </div>
        <div className={styles.orderProcessingRows1}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameInner}
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
          <div className={styles.orderProcessingRowsInner}>
            <div className={styles.kes7000Parent}>
              <div className={styles.kes70001}>KES 7,000</div>
              <div className={styles.x51}>x 5</div>
            </div>
          </div>
        </div>
        <div className={styles.orderProcessingRows2}>
          <div className={styles.rectangleGroup}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className={styles.redVelvetFrostingsContainer}>
              <div className={styles.redVelvetFrostings2}>
                Red velvet frostings
              </div>
            </div>
          </div>
          <div className={styles.abujaBranchContainer}>
            <div className={styles.abujaBranch2}>abuja branch</div>
          </div>
          <div className={styles.orderProcessingRowsChild}>
            <div className={styles.kes7000Group}>
              <div className={styles.kes70002}>KES 7,000</div>
              <div className={styles.x52}>x 5</div>
            </div>
          </div>
        </div>
        <div className={styles.orderProcessingRows3}>
          <div className={styles.rectangleContainer}>
            <img
              className={styles.frameChild1}
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
        </div>
        <div className={styles.orderProcessingRows4}>
          <div className={styles.rectangleParent1}>
            <img
              className={styles.frameChild2}
              alt=""
              src="/rectangle-23@2x.png"
            />
            <div className={styles.redVelvetFrostingsWrapper1}>
              <div className={styles.redVelvetFrostings4}>
                Red velvet frostings
              </div>
            </div>
          </div>
          <div className={styles.abujaBranchWrapper1}>
            <div className={styles.abujaBranch4}>abuja branch</div>
          </div>
          <div className={styles.orderProcessingRowsInner1}>
            <div className={styles.kes7000Parent1}>
              <div className={styles.kes70004}>KES 7,000</div>
              <div className={styles.x54}>x 5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

StoreLocations.propTypes = {
  className: PropTypes.string,
  group7028: PropTypes.string,
  group70281: PropTypes.string,

  /** Style props */
  propDebugCommit: PropTypes.any,
  propDebugCommit1: PropTypes.any,
};

export default StoreLocations;
