import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";

const Product = ({
  className = "",
  image,
  greenCapsicum,
  propFlex,
  propMinWidth,
  propFlex1,
}) => {
  const productStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  return (
    <div className={[styles.product, className].join(" ")} style={productStyle}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.greenCapsicumWrapper} style={frameDivStyle}>
        <div className={styles.greenCapsicum}>{greenCapsicum}</div>
      </div>
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  greenCapsicum: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex1: PropTypes.any,
};

export default Product;
