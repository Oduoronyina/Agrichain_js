import FrameComponent4 from "./FrameComponent4";
import FrameComponent3 from "./FrameComponent31";
import StoreLocations from "./StoreLocations";
import PropTypes from "prop-types";
import styles from "./MenuPanel.module.css";

const MenuPanel = ({ className = "" }) => {
  return (
    <section className={[styles.menuPanel, className].join(" ")}>
      <FrameComponent4 />
      <div className={styles.summaryPanel}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryGrid}>
            <div className={styles.summaryCards}>
              <div className={styles.cardRow}>
                <div className={styles.dataCards}>
                  <img
                    className={styles.dataCardsChild}
                    loading="lazy"
                    alt=""
                    src="/group-275@2x.png"
                  />
                  <div className={styles.cardValues}>
                    <div className={styles.pendingQuotations}>
                      Pending Quotations
                    </div>
                    <b className={styles.cardData}>0</b>
                  </div>
                </div>
              </div>
              <FrameComponent3 />
              <div className={styles.cardRow1}>
                <div className={styles.frameParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-275-1@2x.png"
                  />
                  <div className={styles.shipmentsParent}>
                    <div className={styles.shipments}>shipments</div>
                    <b className={styles.b}>50</b>
                  </div>
                </div>
              </div>
              <div className={styles.cardRow2}>
                <div className={styles.frameGroup}>
                  <img
                    className={styles.frameItem}
                    alt=""
                    src="/group-275-2@2x.png"
                  />
                  <div className={styles.totalWarehouseParent}>
                    <div className={styles.totalWarehouse}>total warehouse</div>
                    <b className={styles.b1}>100</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <StoreLocations
            group7028="/group-70281@2x.png"
            group70281="/group-70281@2x.png"
            propDebugCommit="unset"
            propDebugCommit1="unset"
          />
        </div>
      </div>
    </section>
  );
};

MenuPanel.propTypes = {
  className: PropTypes.string,
};

export default MenuPanel;
