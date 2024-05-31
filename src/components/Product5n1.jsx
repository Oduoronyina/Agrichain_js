import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Product5n1.module.css";

const Product5n1 = ({
  className = "",
  image,
  greenApple,
  prop,
  prop1,
  div,
  propHeight,
  propFlex,
  propFlex1,
  propMinWidth,
  propWidth,
}) => {
  const productInfoStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const infoStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const div1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={[styles.product5n, className].join(" ")}>
      <div className={styles.productImageInfo}>
        <div className={styles.productImage}>
          <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        </div>
        <div className={styles.tag}>
          <div className={styles.sale}>Sale</div>
          <div className={styles.saleValue}>50%</div>
        </div>
      </div>
      <div className={styles.productInfo} style={productInfoStyle}>
        <div className={styles.info} style={infoStyle}>
          <div className={styles.greenApple}>{greenApple}</div>
          <div className={styles.price} style={priceStyle}>
            <div className={styles.div} style={divStyle}>
              {prop}
            </div>
            {!div && (
              <div className={styles.div1} style={div1Style}>
                {prop1}
              </div>
            )}
          </div>
        </div>
        <div className={styles.rating}>
          <img className={styles.ratingChild} alt="" src="/star-1.svg" />
          <img className={styles.ratingItem} alt="" src="/star-1.svg" />
          <img className={styles.ratingInner} alt="" src="/star-1.svg" />
          <img className={styles.starIcon} alt="" src="/star-1.svg" />
          <img className={styles.ratingChild1} alt="" src="/star-5.svg" />
        </div>
        <img
          className={styles.addToCart}
          loading="lazy"
          alt=""
          src="/add-to-cart.svg"
        />
      </div>
    </div>
  );
};

Product5n1.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  greenApple: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,
  div: PropTypes.bool,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Product5n1;
