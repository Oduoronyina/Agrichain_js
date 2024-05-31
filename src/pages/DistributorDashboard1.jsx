import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent3 from "../components/FrameComponent31";
import StoreLocations from "../components/StoreLocations";
import styles from "./DistributorDashboard1.module.css";

const DistributorDashboard1 = () => {
  return (
    <div className={styles.distributorDashboard}>
      <FrameComponent6 />
      <section className={styles.menuAndSearch}>
        <header className={styles.frameParent}>
          <div className={styles.menuIconWrapper}>
            <div className={styles.menuIcon}>
              <img
                className={styles.menuIcon1}
                loading="lazy"
                alt=""
                src="/menu.svg"
              />
              <div className={styles.dashboardMenu}>
                <b className={styles.dashbboard}>dashbboard</b>
              </div>
            </div>
          </div>
          <div className={styles.search}>
            <img
              className={styles.stockholmIconsGeneralSe}
              alt=""
              src="/stockholmicons--general--search@2x.png"
            />
            <div className={styles.searchPlaceholder}>
              <div className={styles.searchBySales}>
                Search by sales, products, attendants, branch
              </div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/group-22.svg"
              />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent}>
                <img className={styles.frameItem} alt="" src="/avatar@2x.png" />
                <div className={styles.frameDiv}>
                  <div className={styles.tigerShroffParent}>
                    <a className={styles.tigerShroff}>tiger shroff</a>
                    <a className={styles.id1234567}>
                      <span className={styles.id}>{`ID: `}</span>
                      <span className={styles.span}>1234567</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper1}>
                <img className={styles.frameInner} alt="" src="/frame-3.svg" />
              </div>
            </div>
          </div>
        </header>
        <div className={styles.dataVisualization}>
          <div className={styles.dataContainer}>
            <div className={styles.dataComponents}>
              <div className={styles.dataComponentLayout}>
                <div className={styles.dataComponentRows}>
                  <div className={styles.dataComponentRow}>
                    <img
                      className={styles.dataComponentRowChild}
                      loading="lazy"
                      alt=""
                      src="/group-275@2x.png"
                    />
                    <div className={styles.dataItemDetails}>
                      <div className={styles.pendingQuotations}>
                        Pending Quotations
                      </div>
                      <b className={styles.dataItemValues}>0</b>
                    </div>
                  </div>
                </div>
                <FrameComponent3 />
                <div className={styles.dataComponentRows1}>
                  <div className={styles.frameParent1}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group-275-1@2x.png"
                    />
                    <div className={styles.shipmentsParent}>
                      <a className={styles.shipments}>shipments</a>
                      <b className={styles.b}>50</b>
                    </div>
                  </div>
                </div>
                <div className={styles.dataComponentRows2}>
                  <div className={styles.frameParent2}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/group-275-2@2x.png"
                    />
                    <div className={styles.totalWarehouseParent}>
                      <div className={styles.totalWarehouse}>
                        total warehouse
                      </div>
                      <b className={styles.b1}>100</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <StoreLocations
              group7028="/group-7028@2x.png"
              group70281="/group-7028@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DistributorDashboard1;
