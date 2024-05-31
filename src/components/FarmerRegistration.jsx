import { useCallback } from "react";
import NameInputFields from "./NameInputFields";
import NameInputFields1 from "./NameInputFields1";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FarmerRegistration.module.css";

const FarmerRegistration = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/farmer-dashboard");
  }, [navigate]);

  return (
    <div className={[styles.farmerRegistration, className].join(" ")}>
      <h1 className={styles.farmerRegistration1}>Farmer Registration</h1>
      <img className={styles.lefticon} alt="" src="/lefticon.svg" />
      <div className={styles.response}>
        <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
        <div className={styles.text}>Response</div>
      </div>
      <form className={styles.farmerNameInputParent}>
        <div className={styles.farmerNameInput}>
          <b className={styles.farmerInfo}>Farmer Info</b>
          <NameInputFields />
          <NameInputFields1 />
          <div className={styles.input}>
            <div className={styles.label}>
              <img className={styles.lefticon2} alt="" src="/lefticon.svg" />
              <div className={styles.text1}>Connect Wallet Wallet ID</div>
            </div>
            <button className={styles.inputcontainer}>
              <div className={styles.inputinnercontainer}>
                <b className={styles.infoInputValue}>
                  Connect with Internet Identity
                </b>
              </div>
            </button>
            <Input
              leftIcon="/lefticon-4.svg"
              text="Describe your farming produce"
              inputInnerContainerPlaceh="Tell us about your use case..."
              showLeftIcon
            />
            <div className={styles.response1}>
              <img className={styles.lefticon3} alt="" src="/lefticon1.svg" />
              <div className={styles.text2}>Response</div>
            </div>
          </div>
        </div>
        <div className={styles.truckDetails}>
          <a className={styles.farmDetails}>Farm Details</a>
          <div className={styles.typeOfTruck}>
            <div className={styles.radio}>
              <input className={styles.check} type="radio" />
              <div className={styles.value}>Large Scale</div>
            </div>
            <div className={styles.radio1}>
              <input className={styles.check1} type="radio" />
              <div className={styles.value1}>Small Scale</div>
            </div>
          </div>
          <Input
            leftIcon="/lefticon.svg"
            text="Farm Location"
            inputInnerContainerPlaceh="Model Name"
            showLeftIcon={false}
            propPadding="unset"
            propGap="4px"
            propDisplay="inline-block"
            propMinWidth="77px"
            propHeight="unset"
            propPadding1="var(--padding-3xs) var(--padding-2xs)"
          />
          <Input
            leftIcon="/lefticon.svg"
            text="Vehicle Registration Number"
            inputInnerContainerPlaceh="Plate no."
            showLeftIcon={false}
            propPadding="unset"
            propGap="4px"
            propDisplay="unset"
            propMinWidth="unset"
            propHeight="unset"
            propPadding1="var(--padding-3xs) var(--padding-2xs)"
          />
          <button className={styles.button} onClick={onButtonClick}>
            <img className={styles.lefticon4} alt="" src="/lefticon3.svg" />
            <b className={styles.value2}>Submit</b>
            <img className={styles.righticon} alt="" src="/righticon-1.svg" />
          </button>
        </div>
      </form>
    </div>
  );
};

FarmerRegistration.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default FarmerRegistration;
