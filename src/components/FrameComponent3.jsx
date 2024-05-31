import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent = ({
  className = "",
  inStock,
  propBackgroundColor,
  propColor,
  propMinWidth,
  propBackgroundColor1,
  propColor1,
}) => {
  const stockStatusStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const inStockStyle = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const normalStyle = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div className={[styles.stockInfoWrapper, className].join(" ")}>
      <div className={styles.stockInfo}>
        <div className={styles.stockStatusWrapper}>
          <div className={styles.stockStatus} style={stockStatusStyle}>
            <div className={styles.inStock} style={inStockStyle}>
              {inStock}
            </div>
          </div>
        </div>
        <div className={styles.action}>
          <button className={styles.button} style={buttonStyle}>
            <div className={styles.normal} style={normalStyle}>
              Add to Cart
            </div>
          </button>
          <div className={styles.closeWrapper}>
            <img
              className={styles.closeIcon}
              loading="lazy"
              alt=""
              src="/close.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  inStock: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propColor1: PropTypes.any,
};

export default FrameComponent;
