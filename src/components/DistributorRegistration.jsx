import { useCallback } from "react";
import NameInputFields from "./NameInputFields";
import NameInputFields1 from "./NameInputFields1";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import PropTypes from "prop-types";
import styles from "./DistributorRegistration.module.css";

const DistributorRegistration = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/distributor-dashboard1");
  }, [navigate]);

  return (
    <div className={[styles.distributorRegistration, className].join(" ")}>
      <a className={styles.distributorRegistration1}>
        Distributor Registration
      </a>
      <img className={styles.lefticon} alt="" src="/lefticon.svg" />
      <div className={styles.response}>
        <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
        <div className={styles.text}>Response</div>
      </div>
      <form className={styles.distributorRegistration2}>
        <div className={styles.distributorInput}>
          <b className={styles.ownerInformation}>Owner Information</b>
          <NameInputFields
            lastNameIconTextDecoration="none"
            propTextDecoration="none"
          />
          <NameInputFields1 propTextDecoration="none" />
          <div className={styles.input}>
            <div className={styles.label}>
              <img className={styles.lefticon2} alt="" src="/lefticon.svg" />
              <div className={styles.text1}>Connect Wallet Wallet ID</div>
            </div>
            <button className={styles.inputcontainer}>
              <div className={styles.inputinnercontainer}>
                <b className={styles.text2}>Connect with Internet Identity</b>
              </div>
            </button>
            <div className={styles.response1}>
              <img className={styles.lefticon3} alt="" src="/lefticon1.svg" />
              <div className={styles.text3}>Response</div>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <img className={styles.lefticon4} alt="" src="/lefticon3.svg" />
            <b className={styles.value}>Submit</b>
            <img className={styles.righticon} alt="" src="/righticon-1.svg" />
          </button>
        </div>
        <div className={styles.companyDetails}>
          <a className={styles.companyInformation}>Company Information</a>
          <div className={styles.typeOfCompany}>
            <div className={styles.radio}>
              <input className={styles.check} type="radio" />
              <a className={styles.value1}>Distributor</a>
            </div>
            <div className={styles.radio1}>
              <input className={styles.check1} type="radio" />
              <a className={styles.value2}>Processor</a>
            </div>
          </div>
          <Input
            leftIcon="/lefticon.svg"
            text="Company Name"
            inputInnerContainerPlaceh="Name of the company"
            showLeftIcon={false}
            propPadding="unset"
            propGap="4px"
            propDisplay="inline-block"
            propMinWidth="86px"
            propHeight="unset"
            propPadding1="var(--padding-3xs) var(--padding-2xs)"
          />
          <Input
            leftIcon="/lefticon.svg"
            text="Company Registration number"
            inputInnerContainerPlaceh="Registration no."
            showLeftIcon={false}
            propPadding="unset"
            propGap="4px"
            propDisplay="unset"
            propMinWidth="unset"
            propHeight="unset"
            propPadding1="var(--padding-3xs) var(--padding-2xs)"
          />
          <Input
            leftIcon="/lefticon-4.svg"
            text="Describe your case"
            inputInnerContainerPlaceh="Tell us about your use case..."
            showLeftIcon
            propPadding="0px var(--padding-214xl) 0px 0px"
            propGap="unset"
            propDisplay="inline-block"
            propMinWidth="102px"
            propHeight="68px"
            propPadding1="var(--padding-xs) var(--padding-2xs)"
          />
        </div>
      </form>
    </div>
  );
};

DistributorRegistration.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default DistributorRegistration;
