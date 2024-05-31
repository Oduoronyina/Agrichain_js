import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ConsumerRegistration.module.css";

const ConsumerRegistration = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/consumer-homepage");
  }, [navigate]);

  return (
    <div className={[styles.consumerRegistration, className].join(" ")}>
      <h1 className={styles.consumerRegistration1}>Consumer Registration</h1>
      <img className={styles.lefticon} alt="" src="/lefticon.svg" />
      <div className={styles.response}>
        <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
        <div className={styles.text}>Response</div>
      </div>
      <section className={styles.consumerInfoParent}>
        <b className={styles.consumerInfo}>Consumer Info</b>
        <div className={styles.inputParent}>
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
              <a className={styles.leftIconLabel}>User ID</a>
            </div>
            <div className={styles.inputcontainer1}>
              <div className={styles.inputinnercontainer1}>
                <img className={styles.lefticon5} alt="" src="/lefticon2.svg" />
                <div className={styles.inputIconValue}>Doe</div>
                <img
                  className={styles.righticon}
                  alt=""
                  src="/righticon11.svg"
                />
              </div>
            </div>
            <div className={styles.response2}>
              <img className={styles.lefticon6} alt="" src="/lefticon1.svg" />
              <div className={styles.text3}>Response</div>
            </div>
          </div>
        </div>
        <div className={styles.textParent}>
          <div className={styles.text4}>Phone number</div>
          <div className={styles.inputcontainer2}>
            <div className={styles.inputinnercontainer2}>
              <img
                className={styles.lefticon7}
                loading="lazy"
                alt=""
                src="/lefticon-3.svg"
              />
              <a className={styles.inputIconPlaceholder}>+254</a>
              <img
                className={styles.righticon1}
                loading="lazy"
                alt=""
                src="/righticon1.svg"
              />
              <div className={styles.iconBackground} />
              <div className={styles.iconContent}>Phone number</div>
            </div>
          </div>
        </div>
        <div className={styles.input2}>
          <div className={styles.label2}>
            <img className={styles.lefticon8} alt="" src="/lefticon.svg" />
            <div className={styles.text5}>Connect Wallet Wallet ID</div>
          </div>
          <button className={styles.inputcontainer3}>
            <div className={styles.inputinnercontainer3}>
              <b className={styles.buttonInputValue}>
                Connect with Internet Identity
              </b>
            </div>
          </button>
          <div className={styles.response3}>
            <img className={styles.lefticon9} alt="" src="/lefticon1.svg" />
            <div className={styles.text6}>Response</div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <img className={styles.lefticon10} alt="" src="/lefticon3.svg" />
            <b className={styles.value}>Continue</b>
            <img className={styles.righticon2} alt="" src="/righticon-1.svg" />
          </button>
        </div>
      </section>
    </div>
  );
};

ConsumerRegistration.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ConsumerRegistration;
