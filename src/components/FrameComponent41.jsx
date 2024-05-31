import { useState, useCallback } from "react";
import ConsumerRegistration from "./ConsumerRegistration";
import PortalPopup from "./PortalPopup";
import DriverRegistration from "./DriverRegistration";
import ProcessorRegistration from "./ProcessorRegistration";
import PropTypes from "prop-types";
import styles from "./FrameComponent41.module.css";

const FrameComponent4 = ({ className = "" }) => {
  const [isConsumerRegistrationOpen, setConsumerRegistrationOpen] =
    useState(false);
  const [isDriverRegistrationOpen, setDriverRegistrationOpen] = useState(false);
  const [isProcessorRegistrationOpen, setProcessorRegistrationOpen] =
    useState(false);

  const openConsumerRegistration = useCallback(() => {
    setConsumerRegistrationOpen(true);
  }, []);

  const closeConsumerRegistration = useCallback(() => {
    setConsumerRegistrationOpen(false);
  }, []);

  const openDriverRegistration = useCallback(() => {
    setDriverRegistrationOpen(true);
  }, []);

  const closeDriverRegistration = useCallback(() => {
    setDriverRegistrationOpen(false);
  }, []);

  const openProcessorRegistration = useCallback(() => {
    setProcessorRegistrationOpen(true);
  }, []);

  const closeProcessorRegistration = useCallback(() => {
    setProcessorRegistrationOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.frameParent, className].join(" ")}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.keyFeaturesParent}>
                <h1 className={styles.keyFeatures}>Key Features</h1>
                <div className={styles.keyFeaturesDivider} />
              </div>
            </div>
            <div className={styles.featureIconContainerWrapper}>
              <div className={styles.featureIconContainer}>
                <div className={styles.featureIconBackground} />
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <img
                    className={styles.mditruckFastOutlineIcon}
                    loading="lazy"
                    alt=""
                    src="/mditruckfastoutline1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.featureColumnsParent}>
          <div className={styles.featureColumns}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <img
                className={styles.mditruckFastOutlineIcon1}
                alt=""
                src="/mditruckfastoutline-1.svg"
              />
            </div>
            <div className={styles.featureTitleColumn}>
              <b className={styles.transparentSupplychain}>
                Transparent SupplyChain
              </b>
              <div className={styles.aPayAsYouGo}>
                A pay as-you-go solution for: pallet storage, inventory
                management, fulfillment(e.g. pick and pack), in/out-bound
                solutions, and more.
              </div>
            </div>
          </div>
          <div className={styles.featureColumns1}>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameInner} />
              <img
                className={styles.bxbxsPlaneTakeOffIcon}
                loading="lazy"
                alt=""
                src="/bxbxsplanetakeoff.svg"
              />
            </div>
            <div className={styles.efficiencyWrapper}>
              <b className={styles.efficiency}>Efficiency</b>
            </div>
            <div className={styles.searchAndCompare}>
              Search and compare the best shipping rates among dozens of trusted
              logistic partners for the last mile delivery and freight.
            </div>
          </div>
          <div className={styles.featureColumns2}>
            <div className={styles.wrapperGroup6921}>
              <img
                className={styles.wrapperGroup6921Child}
                loading="lazy"
                alt=""
                src="/group-6921@2x.png"
              />
            </div>
            <div className={styles.trustAndAccountabilityParent}>
              <h2 className={styles.trustAndAccountability}>
                Trust and Accountability
              </h2>
              <div className={styles.ourPackagingSolutions}>
                Our packaging solutions are optimized for each individual
                customer and are selected based on on the customer’s specific
                needs and requirements.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.targetAudienceExtendedLinksWrapper}>
          <div className={styles.targetAudienceExtendedLinks}>
            <button
              className={styles.targetAudienceExtended}
              onClick={openConsumerRegistration}
            >
              <b className={styles.forConsumers}>For Consumers</b>
            </button>
            <button
              className={styles.targetAudienceExtended1}
              onClick={openDriverRegistration}
            >
              <b className={styles.forDrivers}>For Drivers</b>
            </button>
            <button
              className={styles.targetAudienceExtended2}
              onClick={openProcessorRegistration}
            >
              <b className={styles.forProcessors}>For Processors</b>
            </button>
          </div>
        </div>
      </div>
      {isConsumerRegistrationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConsumerRegistration}
        >
          <ConsumerRegistration onClose={closeConsumerRegistration} />
        </PortalPopup>
      )}
      {isDriverRegistrationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDriverRegistration}
        >
          <DriverRegistration onClose={closeDriverRegistration} />
        </PortalPopup>
      )}
      {isProcessorRegistrationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeProcessorRegistration}
        >
          <ProcessorRegistration onClose={closeProcessorRegistration} />
        </PortalPopup>
      )}
    </>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
