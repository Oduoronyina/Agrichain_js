import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Product5n1 from "./Product5n1";
import Product5n from "./Product5n";
import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onProduct5nContainer1Click = useCallback(() => {
    navigate("/consumer-shopping-cart");
  }, [navigate]);

  const onProduct5nContainer12Click = useCallback(() => {
    navigate("/consumer-shopping-cart");
  }, [navigate]);

  const onProduct5nContainer2Click = useCallback(() => {
    navigate("/consumer-shopping-cart");
  }, [navigate]);

  const onProduct5nContainer4Click = useCallback(() => {
    navigate("/consumer-shopping-cart");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/consumer-shopping-cart");
  }, [navigate]);

  return (
    <section className={[styles.productListingWrapper, className].join(" ")}>
      <div className={styles.productListing}>
        <div className={styles.heading}>
          <b className={styles.popularCategories}>Popular Products</b>
          <div className={styles.viewAllProducts}>
            <div className={styles.button}>
              <div className={styles.viewAll}>View All</div>
              <div className={styles.viewProductIcon}>
                <img className={styles.groupIcon} alt="" src="/group-3.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productList}>
          <div className={styles.productItems}>
            <Product5n1
              image="/image@2x.png"
              greenApple="Green Apple"
              prop="100"
              prop1="$20.99"
              div={false}
            />
            <Product5n
              image="/image-11@2x.png"
              greenApple="Fresh Kenyan Malta"
              prop="120.00"
              onProduct5nContainer1Click={onProduct5nContainer1Click}
            />
            <div className={styles.product5n}>
              <div className={styles.productImage}>
                <img
                  className={styles.imageIcon}
                  alt=""
                  src="/image-2@2x.png"
                  onClick={onImageClick}
                />
                <div className={styles.addToWishlistParent}>
                  <img
                    className={styles.addToWishlist}
                    alt=""
                    src="/add-to-wishlist.svg"
                  />
                  <img
                    className={styles.quickViewIcon}
                    loading="lazy"
                    alt=""
                    src="/quick-view.svg"
                  />
                </div>
              </div>
              <div className={styles.productInfo}>
                <div className={styles.info}>
                  <div className={styles.greenApple}>Kenyan cabbage</div>
                  <div className={styles.price}>
                    <div className={styles.div}>112.00</div>
                  </div>
                </div>
                <div className={styles.rating}>
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/star-1.svg"
                  />
                  <img className={styles.ratingItem} alt="" src="/star-1.svg" />
                  <img
                    className={styles.ratingInner}
                    alt=""
                    src="/star-1.svg"
                  />
                  <img className={styles.starIcon} alt="" src="/star-1.svg" />
                  <img
                    className={styles.ratingChild1}
                    alt=""
                    src="/star-5.svg"
                  />
                </div>
                <img
                  className={styles.addToCart}
                  alt=""
                  src="/add-to-cart-2.svg"
                />
              </div>
            </div>
            <Product5n
              image="/image-3@2x.png"
              greenApple="Green Lettuce"
              prop="9.00"
              propMinWidth="35px"
            />
            <Product5n
              image="/image-4@2x.png"
              greenApple="Eggplant"
              prop="34.00"
              propMinWidth="45px"
            />
          </div>
          <div className={styles.productItems1}>
            <Product5n
              image="/image-5@2x.png"
              greenApple="Big Potatoes"
              prop="20.00"
              propMinWidth="44px"
            />
            <Product5n
              image="/image-6@2x.png"
              greenApple="Corn"
              prop="20.00"
              propMinWidth="44px"
              onProduct5nContainer1Click={onProduct5nContainer12Click}
            />
            <Product5n
              image="/image-7@2x.png"
              greenApple="Fresh Cauliflower"
              prop="12.00"
              propMinWidth="40px"
              onProduct5nContainer1Click={onProduct5nContainer2Click}
            />
            <Product5n1
              image="/image-8@2x.png"
              greenApple="Green Capsicum"
              prop="9.00"
              div
              propHeight="87px"
              propFlex="1"
              propFlex1="1"
              propMinWidth="35px"
              propWidth="0px"
            />
            <Product5n
              image="pending_I12:2144;74:61"
              greenApple="Green Chili"
              prop="34.00"
              propMinWidth="45px"
              onProduct5nContainer1Click={onProduct5nContainer4Click}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
