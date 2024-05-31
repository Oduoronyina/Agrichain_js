import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./NameInputFields.module.css";

const NameInputFields = ({
  className = "",
  lastNameIconTextDecoration,
  propTextDecoration,
}) => {
  const textStyle = useMemo(() => {
    return {
      textDecoration: lastNameIconTextDecoration,
    };
  }, [lastNameIconTextDecoration]);

  const lastNameIconStyle = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={[styles.nameInputFields, className].join(" ")}>
      <div className={styles.input}>
        <div className={styles.label}>
          <img className={styles.lefticon} alt="" src="/lefticon.svg" />
          <div className={styles.text} style={textStyle}>
            Full Name
          </div>
        </div>
        <div className={styles.inputcontainer}>
          <input
            className={styles.inputinnercontainer}
            placeholder="John"
            type="text"
          />
        </div>
        <div className={styles.response}>
          <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
          <div className={styles.text1}>Response</div>
        </div>
      </div>
      <div className={styles.input1}>
        <div className={styles.label1}>
          <img className={styles.lefticon2} alt="" src="/lefticon.svg" />
          <div className={styles.lastNameIcon} style={lastNameIconStyle}>
            User ID
          </div>
        </div>
        <div className={styles.inputcontainer1}>
          <div className={styles.inputinnercontainer1}>
            <img className={styles.lefticon3} alt="" src="/lefticon2.svg" />
            <div className={styles.lastNameValue}>Doe</div>
            <img className={styles.righticon} alt="" src="/righticon.svg" />
          </div>
        </div>
        <div className={styles.response1}>
          <img className={styles.lefticon4} alt="" src="/lefticon1.svg" />
          <div className={styles.text2}>Response</div>
        </div>
      </div>
    </div>
  );
};

NameInputFields.propTypes = {
  className: PropTypes.string,

  /** Style props */
  lastNameIconTextDecoration: PropTypes.any,
  propTextDecoration: PropTypes.any,
};

export default NameInputFields;
