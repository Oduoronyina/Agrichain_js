import PropTypes from "prop-types";
import styles from "./FrameComponent7.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={[styles.locationContainerWrapper, className].join(" ")}>
      <div className={styles.locationContainer}>
        <div className={styles.locationDetails}>
          <div className={styles.locationHeader}>
            <div className={styles.locationTitle}>
              <b className={styles.storeLocations}>store locations</b>
            </div>
            <div className={styles.locationCity}>
              <div className={styles.cityContainer}>
                <b className={styles.inMombasa}>in Mombasa</b>
              </div>
              <img
                className={styles.cityPlaceholderIcon}
                alt=""
                src="/frame-3.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/group-25@2x.png" />
            <div className={styles.mapPin}>
              <div className={styles.pinIcon}>
                <img
                  className={styles.pinIconChild}
                  loading="lazy"
                  alt=""
                  src="/group-70281@2x.png"
                />
              </div>
              <div className={styles.mapLabel}>
                <div className={styles.mombasaKenya}>Mombasa, Kenya</div>
                <b className={styles.dashboard}>view details</b>
              </div>
            </div>
            <div className={styles.secondaryMapPin}>
              <div className={styles.duplicatePin}>
                <img
                  className={styles.duplicatePinChild}
                  loading="lazy"
                  alt=""
                  src="/polygon-2.svg"
                />
                <div className={styles.pinContainer}>
                  <div className={styles.nestedPin}>
                    <div className={styles.pinDetails}>
                      <div className={styles.pinMarker}>
                        <img
                          className={styles.pinMarkerChild}
                          alt=""
                          src="/group-70281@2x.png"
                        />
                      </div>
                      <div className={styles.duplicateMapLabel}>
                        <div className={styles.mombasaKenya1}>
                          Mombasa, Kenya
                        </div>
                        <b className={styles.dashboard1}>view details</b>
                      </div>
                    </div>
                    <div className={styles.nestedPinInner}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/polygon-2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productStock}>
          <div className={styles.stockHeader}>
            <div className={styles.stockTitle}>
              <b className={styles.productsInStock}>products in stock</b>
            </div>
            <button className={styles.viewAllButton}>
              <b className={styles.viewAll}>View all</b>
            </button>
          </div>
          <div className={styles.stockContainer}>
            <div className={styles.productIconsParent}>
              <img
                className={styles.productIcons}
                loading="lazy"
                alt=""
                src="/rectangle-23@2x.png"
              />
              <div className={styles.productName}>
                <div className={styles.redVelvetFrostings}>
                  Red velvet frostings
                </div>
              </div>
            </div>
            <div className={styles.branchName}>
              <div className={styles.abujaBranch}>abuja branch</div>
            </div>
            <div className={styles.productPrice}>
              <div className={styles.priceDetails}>
                <div className={styles.kes7000}>KES 7,000</div>
                <div className={styles.x5}>x 5</div>
              </div>
            </div>
          </div>
          <div className={styles.stockContainer1}>
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
            <div className={styles.stockContainerInner}>
              <div className={styles.kes7000Parent}>
                <div className={styles.kes70001}>KES 7,000</div>
                <div className={styles.x51}>x 5</div>
              </div>
            </div>
          </div>
          <div className={styles.stockContainer2}>
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
            <div className={styles.stockContainerChild}>
              <div className={styles.kes7000Group}>
                <div className={styles.kes70002}>KES 7,000</div>
                <div className={styles.x52}>x 5</div>
              </div>
            </div>
          </div>
          <div className={styles.stockContainer3}>
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
          <div className={styles.stockContainer4}>
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
            <div className={styles.stockContainerInner1}>
              <div className={styles.kes7000Parent1}>
                <div className={styles.kes70004}>KES 7,000</div>
                <div className={styles.x54}>x 5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
