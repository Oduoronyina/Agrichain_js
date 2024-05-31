import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Product1.module.css";

const Product1 = ({
  className = "",
  image,
  greenCapsicum,
  x5,
  separator,
  propMinWidth,
  propMinWidth1,
}) => {
  const greenCapsicumStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const x5Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.product, className].join(" ")}>
      <div className={styles.info}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        <div className={styles.greenCapsicum} style={greenCapsicumStyle}>
          {greenCapsicum}
        </div>
        <div className={styles.x5} style={x5Style}>
          {x5}
        </div>
      </div>
      <div className={styles.separator}>{separator}</div>
    </div>
  );
};

Product1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  greenCapsicum: PropTypes.string,
  x5: PropTypes.string,
  separator: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default Product1;
