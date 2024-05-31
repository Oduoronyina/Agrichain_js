import NavLinks from "./NavLinks";
import PropTypes from "prop-types";
import styles from "./FrameComponent11.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header className={[styles.midleParent, className].join(" ")}>
      <div className={styles.midle}>
        <div className={styles.logoWrapper}>
          <div className={styles.logo}>
            <div className={styles.plant1Wrapper}>
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
          <div className={styles.searchInner}>
            <div className={styles.searchParent}>
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
        <div className={styles.headerRight}>
          <div className={styles.frameParent}>
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
            <div className={styles.cart}>
              <img
                className={styles.bagIcon}
                loading="lazy"
                alt=""
                src="/bag.svg"
              />
              <div className={styles.no}>
                <a className={styles.cartCount}>2</a>
              </div>
            </div>
            <div className={styles.shoppingCartParent}>
              <div className={styles.shoppingCart}>Shopping cart:</div>
              <div className={styles.cartNotification}>570</div>
            </div>
          </div>
        </div>
      </div>
      <NavLinks />
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
