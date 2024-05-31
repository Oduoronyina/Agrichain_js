import { useCallback } from "react";
import Product from "./Product";
import FrameComponent from "./FrameComponent3";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ShoppingCartContent.module.css";

const ShoppingCartContent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  return (
    <div className={[styles.shoppingCartContent, className].join(" ")}>
      <div className={styles.cartItems}>
        <div className={styles.cartItemHeader}>
          <h1 className={styles.myShoppingCart}>My Shopping Cart</h1>
        </div>
        <div className={styles.cart}>
          <div className={styles.productDetails}>
            <div className={styles.productPriceInfo}>
              <div className={styles.priceStock}>
                <div className={styles.productWrapper}>
                  <div className={styles.product}>Product</div>
                </div>
                <div className={styles.price}>price</div>
                <div className={styles.stockStatus}>Stock Status</div>
              </div>
            </div>
            <div className={styles.productDetailsChild} />
            <div className={styles.wishlistProductWrapper}>
              <div className={styles.wishlistProduct}>
                <div className={styles.productInfo}>
                  <Product
                    image="/image1@2x.png"
                    greenCapsicum="Green Capsicum"
                  />
                  <div className={styles.priceWrapper}>
                    <div className={styles.price1}>
                      <div className={styles.outOfStock}>1499</div>
                      <div className={styles.div}>$20.99</div>
                    </div>
                  </div>
                </div>
                <FrameComponent inStock="In Stock" />
              </div>
            </div>
            <div className={styles.deviderWrapper}>
              <div className={styles.devider} />
            </div>
            <div className={styles.wishlistProductContainer}>
              <div className={styles.wishlistProduct1}>
                <div className={styles.productParent}>
                  <Product
                    image="/image-12@2x.png"
                    greenCapsicum="Chinese Cabbage"
                    propFlex="1"
                    propMinWidth="173px"
                    propFlex1="1"
                  />
                  <div className={styles.priceContainer}>
                    <div className={styles.price2}>
                      <div className={styles.div1}>45.00</div>
                    </div>
                  </div>
                </div>
                <FrameComponent
                  inStock="In Stock"
                  propBackgroundColor="rgba(32, 181, 38, 0.2)"
                  propColor="#2c742f"
                  propMinWidth="55px"
                  propBackgroundColor1="#00b307"
                  propColor1="#fff"
                />
              </div>
            </div>
            <div className={styles.deviderContainer}>
              <div className={styles.devider1} />
            </div>
            <div className={styles.wishlistProductFrame}>
              <div className={styles.wishlistProduct2}>
                <Product
                  image="/image-21@2x.png"
                  greenCapsicum="Fresh Sujapuri Mango"
                  propFlex="unset"
                  propMinWidth="unset"
                  propFlex1="unset"
                />
                <div className={styles.price3}>
                  <div className={styles.div2}>09.00</div>
                </div>
                <FrameComponent
                  inStock="Out of Stock"
                  propBackgroundColor="rgba(234, 75, 72, 0.2)"
                  propColor="#ea4b48"
                  propMinWidth="85px"
                  propBackgroundColor1="#f2f2f2"
                  propColor1="#b3b3b3"
                />
              </div>
            </div>
            <div className={styles.devider2} />
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button} onClick={onButtonClick}>
              <b className={styles.normal}>Place Order</b>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ShoppingCartContent.propTypes = {
  className: PropTypes.string,
};

export default ShoppingCartContent;
