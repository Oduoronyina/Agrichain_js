import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent31";
import WeeklyChart from "../components/WeeklyChart";
import DistributionContent from "../components/DistributionContent";
import styles from "./DistributorDashboard.module.css";

const DistributorDashboard = () => {
  return (
    <div className={styles.distributorDashboard}>
      <FrameComponent5 />
      <main className={styles.leftPanel}>
        <FrameComponent4 />
        <section className={styles.dataVisualization}>
          <div className={styles.metricsAndChart}>
            <div className={styles.metricsAndChartInner}>
              <div className={styles.frameParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/group-275@2x.png"
                />
                <div className={styles.pendingQuotationsParent}>
                  <div className={styles.pendingQuotations}>
                    Pending Quotations
                  </div>
                  <b className={styles.metricUnits}>0</b>
                </div>
              </div>
            </div>
            <FrameComponent3 />
            <div className={styles.metricsAndChartChild}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="/group-275-1@2x.png"
                />
                <div className={styles.shipmentsParent}>
                  <a className={styles.shipments}>shipments</a>
                  <b className={styles.b}>50</b>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameInner}
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
        </section>
        <WeeklyChart />
        <section className={styles.branchDistribution}>
          <DistributionContent />
        </section>
      </main>
    </div>
  );
};

export default DistributorDashboard;
