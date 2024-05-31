import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import PropTypes from "prop-types";
import styles from "./FrameComponent21.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onShoppingCardContainerClick = useCallback(() => {
    navigate("/consumer-shopping-cart");
  }, [navigate]);

  return (
    <header className={[styles.midleParent, className].join(" ")}>
      <div className={styles.midle}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <div className={styles.logoContainer}>
              <img
                className={styles.plant1Icon}
                loading="lazy"
                alt=""
                src="/plant-1.svg"
              />
            </div>
            <a className={styles.ecobazar}>AgriChain</a>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.searchField}>
            <div className={styles.searchInputContent}>
              <img className={styles.searchIcon} alt="" src="/search1.svg" />
              <input
                className={styles.search1}
                placeholder="Search"
                type="text"
              />
            </div>
          </div>
          <button className={styles.button}>
            <b className={styles.search2}>Search</b>
          </button>
        </div>
        <div className={styles.userActions}>
          <div className={styles.actionIcons}>
            <div className={styles.heartWrapper}>
              <img
                className={styles.heartIcon}
                loading="lazy"
                alt=""
                src="/heart.svg"
              />
            </div>
            <div className={styles.deviderWrapper}>
              <div className={styles.devider} />
            </div>
            <div
              className={styles.shoppingCard}
              onClick={onShoppingCardContainerClick}
            >
              <div className={styles.cart}>
                <img
                  className={styles.bagIcon}
                  loading="lazy"
                  alt=""
                  src="/bag.svg"
                />
                <div className={styles.no}>
                  <a className={styles.cartItemNumber}>2</a>
                </div>
              </div>
              <div className={styles.cartLabel}>
                <div className={styles.shoppingCart}>Shopping cart:</div>
                <div className={styles.cartNotification}>570</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
