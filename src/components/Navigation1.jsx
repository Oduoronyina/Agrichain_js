import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onText14Click = useCallback(() => {
    navigate("/consumer-shopping-cart");
  }, [navigate]);

  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.midle}>
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
        <div className={styles.topLinks}>
          <div className={styles.navLinks}>
            <div className={styles.navLinks1}>
              <div className={styles.home}>Home</div>
              <div className={styles.chevronDownWrapper}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevron-down.svg"
                />
              </div>
            </div>
            <div className={styles.navLinks2}>
              <div className={styles.home1}>Shop</div>
              <div className={styles.chevronDownContainer}>
                <img
                  className={styles.chevronDownIcon1}
                  alt=""
                  src="/chevron-down-1.svg"
                />
              </div>
            </div>
            <div className={styles.navLinks3}>
              <div className={styles.home2}>Pages</div>
              <div className={styles.chevronDownFrame}>
                <img
                  className={styles.chevronDownIcon2}
                  alt=""
                  src="/chevron-down-1.svg"
                />
              </div>
            </div>
            <div className={styles.navLinks4}>
              <div className={styles.home3}>Blog</div>
              <img
                className={styles.chevronDownIcon3}
                alt=""
                src="/chevron-down-1.svg"
              />
            </div>
            <div className={styles.navLinks5}>
              <div className={styles.home4}>About Us</div>
              <img
                className={styles.chevronDownIcon4}
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.contact}>
          <div className={styles.userActions}>
            <div className={styles.userActionIcons}>
              <img
                className={styles.phonecall1Icon}
                loading="lazy"
                alt=""
                src="/phonecall-1.svg"
              />
              <div className={styles.phoneLabelWrapper}>
                <div className={styles.phoneLabel}>(219) 555-0114</div>
              </div>
            </div>
            <div className={styles.searchCart}>
              <div className={styles.searchBar}>
                <img
                  className={styles.searchIcon}
                  loading="lazy"
                  alt=""
                  src="/search.svg"
                />
              </div>
              <div className={styles.cart}>
                <img
                  className={styles.bagIcon}
                  loading="lazy"
                  alt=""
                  src="/bag.svg"
                />
                <div className={styles.no}>
                  <a className={styles.cartItemNumber} onClick={onText14Click}>
                    2
                  </a>
                </div>
              </div>
              <div className={styles.searchBar1}>
                <img
                  className={styles.user31Icon}
                  loading="lazy"
                  alt=""
                  src="/user-3-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
