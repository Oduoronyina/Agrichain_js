import { useState, useCallback } from "react";
import FarmerRegistration from "./FarmerRegistration";
import PortalPopup from "./PortalPopup";
import DistributorRegistration from "./DistributorRegistration";
import PropTypes from "prop-types";
import styles from "./FrameComponent61.module.css";

const FrameComponent6 = ({ className = "" }) => {
  const [isFarmerRegistrationOpen, setFarmerRegistrationOpen] = useState(false);
  const [isDistributorRegistrationOpen, setDistributorRegistrationOpen] =
    useState(false);

  const openFarmerRegistration = useCallback(() => {
    setFarmerRegistrationOpen(true);
  }, []);

  const closeFarmerRegistration = useCallback(() => {
    setFarmerRegistrationOpen(false);
  }, []);

  const openDistributorRegistration = useCallback(() => {
    setDistributorRegistrationOpen(true);
  }, []);

  const closeDistributorRegistration = useCallback(() => {
    setDistributorRegistrationOpen(false);
  }, []);

  return (
    <>
      <div className={[styles.headerInner, className].join(" ")}>
        <div className={styles.wrapperGroup6922Parent}>
          <div className={styles.wrapperGroup6922}>
            <img
              className={styles.wrapperGroup6922Child}
              loading="lazy"
              alt=""
              src="/group-6922.svg"
            />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent}>
              <div className={styles.safeEfficientEcosystemInParent}>
                <div className={styles.safeEfficientContainer}>
                  <span>
                    <span
                      className={styles.safeEfficient}
                    >{`Safe & Efficient `}</span>
                    <b
                      className={styles.ecosystemInAgricultural}
                    >{`Ecosystem in Agricultural Production `}</b>
                    <span>
                      <span className={styles.solution}>solution</span>
                      <b className={styles.b}>.</b>
                    </span>
                  </span>
                </div>
                <p className={styles.empoweringRuralDreams}>
                  Empowering Rural Dreams, Nurturing Agricultural Growth –
                  AgriChain cultivates prosperity from the roots up.
                </p>
              </div>
              <div className={styles.targetAudienceLinksParent}>
                <button
                  className={styles.targetAudienceLinks}
                  onClick={openFarmerRegistration}
                >
                  <b className={styles.forFarmers}>For Farmers</b>
                </button>
                <button
                  className={styles.targetAudienceLinks1}
                  onClick={openDistributorRegistration}
                >
                  <b className={styles.forDistributors}>For Distributors</b>
                </button>
              </div>
              <div className={styles.wrapperGroup7031Parent}>
                <div className={styles.wrapperGroup7031}>
                  <img
                    className={styles.wrapperGroup7031Child}
                    alt=""
                    src="/group-7031.svg"
                  />
                </div>
                <div className={styles.benefitIconsParent}>
                  <div className={styles.benefitIcons} />
                  <div className={styles.benefitIcons1} />
                  <div className={styles.benefitIcons2} />
                  <div className={styles.benefitIcons3} />
                  <div className={styles.benefitIcons4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFarmerRegistrationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFarmerRegistration}
        >
          <FarmerRegistration onClose={closeFarmerRegistration} />
        </PortalPopup>
      )}
      {isDistributorRegistrationOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDistributorRegistration}
        >
          <DistributorRegistration onClose={closeDistributorRegistration} />
        </PortalPopup>
      )}
    </>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
