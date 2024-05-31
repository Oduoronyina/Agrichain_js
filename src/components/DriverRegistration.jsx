import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./DriverRegistration.module.css";

const DriverRegistration = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/driver-dashboard");
  }, [navigate]);

  return (
    <div className={[styles.driverRegistration, className].join(" ")}>
      <b className={styles.driverRegistration1}>Driver Registration</b>
      <img className={styles.lefticon} alt="" src="/lefticon.svg" />
      <div className={styles.response}>
        <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
        <div className={styles.text}>Response</div>
      </div>
      <form className={styles.driverForm}>
        <div className={styles.nameInput}>
          <b className={styles.driverInformation}>Driver Information</b>
          <div className={styles.nameInputFields}>
            <div className={styles.input}>
              <div className={styles.label}>
                <img className={styles.lefticon2} alt="" src="/lefticon.svg" />
                <a className={styles.text1}>Full Name</a>
              </div>
              <div className={styles.inputcontainer}>
                <input
                  className={styles.inputinnercontainer}
                  placeholder="John"
                  type="text"
                />
              </div>
              <div className={styles.response1}>
                <img className={styles.lefticon3} alt="" src="/lefticon1.svg" />
                <div className={styles.text2}>Response</div>
              </div>
            </div>
            <div className={styles.input1}>
              <div className={styles.label1}>
                <img className={styles.lefticon4} alt="" src="/lefticon.svg" />
                <a className={styles.infoLeftIcon}>User ID</a>
              </div>
              <div className={styles.inputcontainer1}>
                <div className={styles.inputinnercontainer1}>
                  <img
                    className={styles.lefticon5}
                    alt=""
                    src="/lefticon2.svg"
                  />
                  <div className={styles.informationPlaceholder}>Doe</div>
                  <img
                    className={styles.righticon}
                    alt=""
                    src="/righticon.svg"
                  />
                </div>
              </div>
              <div className={styles.response2}>
                <img className={styles.lefticon6} alt="" src="/lefticon1.svg" />
                <div className={styles.text3}>Response</div>
              </div>
            </div>
          </div>
          <div className={styles.nameInputFields1}>
            <div className={styles.text4}>Phone number</div>
            <div className={styles.inputcontainer2}>
              <div className={styles.inputinnercontainer2}>
                <img
                  className={styles.lefticon7}
                  loading="lazy"
                  alt=""
                  src="/lefticon-3.svg"
                />
                <a className={styles.text5}>+254</a>
                <img
                  className={styles.righticon1}
                  loading="lazy"
                  alt=""
                  src="/righticon1.svg"
                />
                <div className={styles.inputinnercontainerChild} />
                <div className={styles.text6}>Phone number</div>
              </div>
            </div>
          </div>
          <div className={styles.input2}>
            <div className={styles.label2}>
              <img className={styles.lefticon8} alt="" src="/lefticon.svg" />
              <div className={styles.inputExpandedLabel}>
                Connect Wallet Wallet ID
              </div>
            </div>
            <button className={styles.inputcontainer3}>
              <div className={styles.inputinnercontainer3}>
                <b className={styles.expandedPlaceholder}>
                  Connect with Internet Identity
                </b>
              </div>
            </button>
            <div className={styles.input3}>
              <div className={styles.label3}>
                <img
                  className={styles.lefticon9}
                  loading="lazy"
                  alt=""
                  src="/lefticon-4.svg"
                />
                <div className={styles.text7}>Describe your case</div>
              </div>
              <textarea
                className={styles.inputcontainer4}
                placeholder="Tell us about your use case..."
                rows={5}
                cols={17}
              />
              <div className={styles.response3}>
                <img
                  className={styles.lefticon10}
                  alt=""
                  src="/lefticon1.svg"
                />
                <div className={styles.text8}>Response</div>
              </div>
            </div>
            <div className={styles.response4}>
              <img className={styles.lefticon11} alt="" src="/lefticon1.svg" />
              <div className={styles.text9}>Response</div>
            </div>
          </div>
        </div>
        <div className={styles.truckDetails}>
          <a className={styles.truckDetails1}>Truck Details</a>
          <div className={styles.typeOfTruck}>
            <div className={styles.radio}>
              <input className={styles.check} type="radio" />
              <a className={styles.value}>{`Box Truck `}</a>
            </div>
            <div className={styles.radio1}>
              <input className={styles.check1} type="radio" />
              <div className={styles.value1}>Trailer Truck</div>
            </div>
          </div>
          <div className={styles.input4}>
            <div className={styles.label4}>
              <img className={styles.lefticon12} alt="" src="/lefticon.svg" />
              <div className={styles.text10}>Truck Model Name</div>
            </div>
            <div className={styles.inputcontainer5}>
              <input
                className={styles.inputinnercontainer4}
                placeholder="Model Name"
                type="text"
              />
            </div>
            <div className={styles.response5}>
              <img className={styles.lefticon13} alt="" src="/lefticon1.svg" />
              <div className={styles.text11}>Response</div>
            </div>
          </div>
          <div className={styles.input5}>
            <div className={styles.label5}>
              <img className={styles.lefticon14} alt="" src="/lefticon.svg" />
              <div className={styles.text12}>Vehicle Registration Number</div>
            </div>
            <div className={styles.inputcontainer6}>
              <input
                className={styles.inputinnercontainer5}
                placeholder="Plate no."
                type="text"
              />
            </div>
            <div className={styles.response6}>
              <img className={styles.lefticon15} alt="" src="/lefticon1.svg" />
              <div className={styles.text13}>Response</div>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <img className={styles.lefticon16} alt="" src="/lefticon3.svg" />
            <b className={styles.value2}>Submit</b>
            <img className={styles.righticon2} alt="" src="/righticon-1.svg" />
          </button>
        </div>
      </form>
    </div>
  );
};

DriverRegistration.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default DriverRegistration;
