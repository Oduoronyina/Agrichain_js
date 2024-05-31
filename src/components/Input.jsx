import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.css";

const Input = ({
  className = "",
  leftIcon,
  text,
  inputInnerContainerPlaceh,
  showLeftIcon,
  propPadding,
  propGap,
  propDisplay,
  propMinWidth,
  propHeight,
  propPadding1,
}) => {
  const labelStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const text2Style = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const inputContainerStyle = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding1,
    };
  }, [propHeight, propPadding1]);

  return (
    <div className={[styles.input, className].join(" ")}>
      <div className={styles.label} style={labelStyle}>
        {showLeftIcon && (
          <img
            className={styles.lefticon}
            loading="lazy"
            alt=""
            src={leftIcon}
          />
        )}
        <div className={styles.text} style={text2Style}>
          {text}
        </div>
      </div>
      <div className={styles.inputcontainer} style={inputContainerStyle}>
        <input
          className={styles.inputinnercontainer}
          placeholder={inputInnerContainerPlaceh}
          type="text"
        />
      </div>
      <div className={styles.response}>
        <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
        <div className={styles.text1}>Response</div>
      </div>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  leftIcon: PropTypes.string,
  text: PropTypes.string,
  inputInnerContainerPlaceh: PropTypes.string,
  showLeftIcon: PropTypes.bool,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Input;
