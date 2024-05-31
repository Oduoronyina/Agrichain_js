import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./NameInputFields1.module.css";

const NameInputFields1 = ({ className = "", propTextDecoration }) => {
  const text1Style = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  return (
    <div className={[styles.nameInputFields, className].join(" ")}>
      <div className={styles.text}>Phone number</div>
      <div className={styles.inputcontainer}>
        <div className={styles.inputinnercontainer}>
          <img
            className={styles.lefticon}
            loading="lazy"
            alt=""
            src="/lefticon-3.svg"
          />
          <div className={styles.text1} style={text1Style}>
            +254
          </div>
          <img
            className={styles.righticon}
            loading="lazy"
            alt=""
            src="/righticon1.svg"
          />
          <div className={styles.lastNameLabelBackground} />
          <div className={styles.lastNamePlaceholder}>Phone number</div>
        </div>
      </div>
    </div>
  );
};

NameInputFields1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTextDecoration: PropTypes.any,
};

export default NameInputFields1;
