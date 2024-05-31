import PropTypes from "prop-types";
import styles from "./WeeklyChart.module.css";

const WeeklyChart = ({ className = "" }) => {
  return (
    <section className={[styles.weeklyChart, className].join(" ")}>
      <div className={styles.chartContainer}>
        <div className={styles.chartElementsParent}>
          <div className={styles.chartElements}>
            <div className={styles.chartTitleParent}>
              <div className={styles.chartTitle}>
                <a className={styles.weeklyShipmentsChart}>
                  Weekly shipments Chart
                </a>
              </div>
              <div className={styles.chartXAxis}>
                <div className={styles.thisWeekWrapper}>
                  <b className={styles.thisWeek}>this week</b>
                </div>
                <img
                  className={styles.emptyXAxisLabel}
                  alt=""
                  src="/frame-3.svg"
                />
              </div>
            </div>
            <div className={styles.chartYAxis}>
              <div className={styles.k}>80K</div>
              <div className={styles.yAxisDividerTop}>
                <img
                  className={styles.dividerGraphHorizontal}
                  loading="lazy"
                  alt=""
                  src="/divider--graph--horizontal.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.chartYAxisBottom}>
            <div className={styles.yAxisLabelBottom}>
              <div className={styles.kParent}>
                <div className={styles.k1}>60K</div>
                <div className={styles.yAxisDividerBottom}>
                  <img
                    className={styles.dividerGraphHorizontal1}
                    alt=""
                    src="/divider--graph--horizontal.svg"
                  />
                </div>
              </div>
              <div className={styles.yAxisLabelBottomInner}>
                <div className={styles.sheetParent}>
                  <img
                    className={styles.sheetIcon}
                    loading="lazy"
                    alt=""
                    src="/sheet.svg"
                  />
                  <b className={styles.pointerValue}>30,000</b>
                </div>
              </div>
              <div className={styles.yAxisGrid}>
                <div className={styles.yAxisGridLabels}>
                  <div className={styles.k2}>40K</div>
                  <div className={styles.k3}>20K</div>
                  <div className={styles.yAxisGrid1}>0</div>
                </div>
                <div className={styles.yAxisGridInner}>
                  <div className={styles.frameParent}>
                    <div className={styles.frameGroup}>
                      <div className={styles.dividerGraphHorizontalParent}>
                        <img
                          className={styles.dividerGraphHorizontal2}
                          alt=""
                          src="/divider--graph--horizontal.svg"
                        />
                        <div className={styles.pointerAndCursor}>
                          <img
                            className={styles.pointerAndCursorChild}
                            alt=""
                            src="/group-1849.svg"
                          />
                          <img
                            className={styles.cursorPointingHand}
                            loading="lazy"
                            alt=""
                            src="/cursor--pointing-hand.svg"
                          />
                        </div>
                      </div>
                      <img
                        className={styles.dividerGraphHorizontal3}
                        alt=""
                        src="/divider--graph--horizontal.svg"
                      />
                    </div>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/group-1852.svg"
                    />
                    <img
                      className={styles.dividerGraphHorizontal4}
                      alt=""
                      src="/divider--graph--horizontal.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.locationChart}>
              <div className={styles.locationChartBars}>
                <div className={styles.locationChartBarValues}>
                  <div className={styles.abuja}>abuja</div>
                </div>
              </div>
              <div className={styles.locationChartBars1}>
                <div className={styles.lagosWrapper}>
                  <div className={styles.lagos}>lagos</div>
                </div>
              </div>
              <div className={styles.locationChartBars2}>
                <div className={styles.lagosContainer}>
                  <div className={styles.lagos1}>lagos</div>
                </div>
              </div>
              <div className={styles.locationChartBars3}>
                <div className={styles.accraWrapper}>
                  <div className={styles.accra}>accra</div>
                </div>
              </div>
              <div className={styles.locationChartBars4}>
                <div className={styles.baliWrapper}>
                  <div className={styles.bali}>bali</div>
                </div>
              </div>
              <div className={styles.lastLocation}>
                <b className={styles.greece}>greece</b>
              </div>
              <div className={styles.locationChartBars5}>
                <div className={styles.milanWrapper}>
                  <b className={styles.milan}>milan</b>
                </div>
              </div>
              <div className={styles.locationChartBars6}>
                <div className={styles.usaWrapper}>
                  <div className={styles.usa}>USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.deliveryStatus}>
          <div className={styles.deliveryElements}>
            <b className={styles.deliveries}>deliveries</b>
            <div className={styles.deliveryVisualization}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/group-85.svg"
                />
                <div className={styles.progressDotsContainer}>
                  <div className={styles.progressDotOne} />
                </div>
                <div className={styles.progressDotTwo} />
                <div className={styles.progressIndicators}>
                  <div className={styles.inProgressContainer}>
                    <div className={styles.inProgressCircle} />
                  </div>
                  <div className={styles.delayedContainer}>
                    <div className={styles.delayedCircle}>
                      <div className={styles.delayedLabel}>
                        <span>78</span>
                        <span className={styles.span}>%</span>
                      </div>
                    </div>
                    <div className={styles.delayedCount} />
                  </div>
                </div>
              </div>
              <div className={styles.deliveryStatus1}>
                <div className={styles.frameDiv}>
                  <div className={styles.statusCirclesParent}>
                    <div className={styles.statusCircles}>
                      <div className={styles.deliveryCircles} />
                    </div>
                    <div className={styles.ontime}>ontime</div>
                    <div className={styles.deliveryCounts}>78%</div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.ellipseWrapper}>
                      <div className={styles.frameInner} />
                    </div>
                    <div className={styles.inProgress}>in progress</div>
                    <div className={styles.div}>78%</div>
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.ellipseContainer}>
                      <div className={styles.ellipseDiv} />
                    </div>
                    <div className={styles.delayed}>delayed</div>
                    <div className={styles.div1}>78%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.downloadButtonContainerWrapper}>
            <button className={styles.downloadButtonContainer}>
              <b className={styles.downloadStatistics}>download statistics</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

WeeklyChart.propTypes = {
  className: PropTypes.string,
};

export default WeeklyChart;
