import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Product5n.module.css";

const Product5n = ({
  className = "",
  image,
  greenApple,
  prop,
  propMinWidth,
  onProduct5nContainer1Click,
}) => {
  const div2Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.product5n, className].join(" ")}
      onClick={onProduct5nContainer1Click}
    >
      <div className={styles.productImage}>
        <img className={styles.imageIcon} alt="" src={image} />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.info}>
          <div className={styles.greenApple}>{greenApple}</div>
          <div className={styles.price}>
            <div className={styles.div} style={div2Style}>
              {prop}
            </div>
          </div>
        </div>
        <div className={styles.rating}>
          <img className={styles.ratingChild} alt="" src="/star-1.svg" />
          <img className={styles.ratingItem} alt="" src="/star-1.svg" />
          <img className={styles.ratingInner} alt="" src="/star-1.svg" />
          <img className={styles.starIcon} alt="" src="/star-1.svg" />
          <img className={styles.ratingChild1} alt="" src="/star-5.svg" />
        </div>
        <img className={styles.addToCart} alt="" src="/add-to-cart-1.svg" />
      </div>
    </div>
  );
};

Product5n.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  greenApple: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,

  /** Action props */
  onProduct5nContainer1Click: PropTypes.func,
};

export default Product5n;
