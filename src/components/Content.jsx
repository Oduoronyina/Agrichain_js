import { useState, useCallback } from "react";
import AddProduct from "./AddProduct";
import PortalPopup from "./PortalPopup";
import CreateProduct from "./CreateProduct";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  const [isAddProductOpen, setAddProductOpen] = useState(false);

  const openAddProduct = useCallback(() => {
    setAddProductOpen(true);
  }, []);

  const closeAddProduct = useCallback(() => {
    setAddProductOpen(false);
  }, []);

  return (
    <>
      <section className={[styles.content, className].join(" ")}>
        <div className={styles.frameParent}>
          <div className={styles.quotationMetricValuesWrapper}>
            <div className={styles.quotationMetricValues}>
              <img
                className={styles.quotationMetricValuesChild}
                loading="lazy"
                alt=""
                src="/group-275@2x.png"
              />
              <div className={styles.quotationMetricLabels}>
                <div className={styles.requestForQuotation}>
                  request for quotation
                </div>
                <b className={styles.quotationAmounts}>0</b>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.frameContainer}>
                <div className={styles.currencyBackgroundWrapper}>
                  <div className={styles.currencyBackground} />
                </div>
                <img className={styles.icon} alt="" src="/.svg" />
              </div>
              <div className={styles.todaysRevenueParent}>
                <div className={styles.todaysRevenue}>today’s Revenue</div>
                <b className={styles.kes7000}>KES 7,000</b>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <img
                className={styles.frameChild}
                alt=""
                src="/group-275-1@2x.png"
              />
              <div className={styles.shipmentsParent}>
                <a className={styles.shipments}>shipments</a>
                <b className={styles.b}>50</b>
              </div>
            </div>
          </div>
          <div className={styles.createProductButton}>
            <button
              className={styles.createProductButtonInner}
              onClick={openAddProduct}
            >
              <div className={styles.createProductWrapper}>
                <CreateProduct />
              </div>
            </button>
          </div>
        </div>
      </section>
      {isAddProductOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddProduct}
        >
          <AddProduct onClose={closeAddProduct} />
        </PortalPopup>
      )}
    </>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
