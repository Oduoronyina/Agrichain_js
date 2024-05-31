import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent12.module.css";

const FrameComponent1 = ({
  className = "",
  group85,
  frameSectionWidth,
  frameSectionPadding,
  frameSectionAlignSelf,
  chartAndLegendMinWidth,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      width: frameSectionWidth,
      padding: frameSectionPadding,
      alignSelf: frameSectionAlignSelf,
    };
  }, [frameSectionWidth, frameSectionPadding, frameSectionAlignSelf]);

  const chartAndLegendStyle = useMemo(() => {
    return {
      minWidth: chartAndLegendMinWidth,
    };
  }, [chartAndLegendMinWidth]);

  return (
    <section
      className={[styles.frameWrapper, className].join(" ")}
      style={frameSectionStyle}
    >
      <div className={styles.chartAndLegendParent}>
        <div className={styles.chartAndLegend} style={chartAndLegendStyle}>
          <div className={styles.chartArea}>
            <div className={styles.frameParent}>
              <div className={styles.weeklyShipmentsChartWrapper}>
                <a className={styles.weeklyShipmentsChart}>
                  Weekly shipments Chart
                </a>
              </div>
              <div className={styles.chartLegend}>
                <div className={styles.thisWeekWrapper}>
                  <b className={styles.thisWeek}>this week</b>
                </div>
                <img
                  className={styles.emptyLegendIcon}
                  alt=""
                  src="/frame-3.svg"
                />
              </div>
            </div>
            <div className={styles.yAxis}>
              <div className={styles.k}>80K</div>
              <div className={styles.dividerGraphHorizontalWrapper}>
                <img
                  className={styles.dividerGraphHorizontal}
                  loading="lazy"
                  alt=""
                  src="/divider--graph--horizontal.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.chartBars}>
            <div className={styles.firstBar}>
              <div className={styles.kParent}>
                <div className={styles.k1}>60K</div>
                <div className={styles.dividerGraphHorizontalContainer}>
                  <img
                    className={styles.dividerGraphHorizontal1}
                    alt=""
                    src="/divider--graph--horizontal.svg"
                  />
                </div>
              </div>
              <div className={styles.pointerAndValueWrapper}>
                <div className={styles.pointerAndValue}>
                  <img
                    className={styles.sheetIcon}
                    loading="lazy"
                    alt=""
                    src="/sheet.svg"
                  />
                  <b className={styles.pointerValue}>30,000</b>
                </div>
              </div>
              <div className={styles.chartBottomLabels}>
                <div className={styles.bottomValues}>
                  <div className={styles.k2}>40K</div>
                  <div className={styles.k3}>20K</div>
                  <div className={styles.chartValues}>0</div>
                </div>
                <div className={styles.bottomDividers}>
                  <div className={styles.dividersAndCursor}>
                    <div className={styles.firstDividerSet}>
                      <div className={styles.horizontalDividers}>
                        <img
                          className={styles.dividerGraphHorizontal2}
                          alt=""
                          src="/divider--graph--horizontal.svg"
                        />
                        <div className={styles.frameGroup}>
                          <img
                            className={styles.frameChild}
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
                      className={styles.dividersAndCursorChild}
                      alt=""
                      src="/group-18521.svg"
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
            <div className={styles.locationLabels}>
              <div className={styles.locationLabelsInner}>
                <div className={styles.abujaWrapper}>
                  <div className={styles.abuja}>abuja</div>
                </div>
              </div>
              <div className={styles.locationLabelsChild}>
                <div className={styles.lagosWrapper}>
                  <div className={styles.lagos}>lagos</div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.lagosContainer}>
                  <div className={styles.lagos1}>lagos</div>
                </div>
              </div>
              <div className={styles.locationLabelsInner1}>
                <div className={styles.accraWrapper}>
                  <div className={styles.accra}>accra</div>
                </div>
              </div>
              <div className={styles.locationLabelsInner2}>
                <div className={styles.baliWrapper}>
                  <div className={styles.bali}>bali</div>
                </div>
              </div>
              <div className={styles.greeceWrapper}>
                <b className={styles.greece}>greece</b>
              </div>
              <div className={styles.locationLabelsInner3}>
                <div className={styles.milanWrapper}>
                  <b className={styles.milan}>milan</b>
                </div>
              </div>
              <div className={styles.locationLabelsInner4}>
                <div className={styles.usaWrapper}>
                  <div className={styles.usa}>USA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.deliveriesTitleParent}>
          <div className={styles.deliveriesTitle}>
            <b className={styles.deliveries}>deliveries</b>
            <div className={styles.deliveryProgress}>
              <div className={styles.frameContainer}>
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src={group85}
                />
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.ellipseDiv} />
                <div className={styles.frameParent1}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild1} />
                  </div>
                  <div className={styles.frameParent2}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>
                        <span>78</span>
                        <span className={styles.span}>%</span>
                      </div>
                    </div>
                    <div className={styles.frameChild2} />
                  </div>
                </div>
              </div>
              <div className={styles.deliveryStatus}>
                <div className={styles.statusContainer}>
                  <div className={styles.statusTrio}>
                    <div className={styles.statusIndicatorsWrapper}>
                      <div className={styles.statusIndicators} />
                    </div>
                    <div className={styles.ontime}>ontime</div>
                    <div className={styles.separators}>78%</div>
                  </div>
                  <div className={styles.statusTrio1}>
                    <div className={styles.statusTrioInner}>
                      <div className={styles.frameChild3} />
                    </div>
                    <div className={styles.inProgress}>in progress</div>
                    <div className={styles.div1}>78%</div>
                  </div>
                  <div className={styles.statusTrio2}>
                    <div className={styles.statusTrioChild}>
                      <div className={styles.frameChild4} />
                    </div>
                    <div className={styles.delayed}>delayed</div>
                    <div className={styles.div2}>78%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statisticsDownload}>
            <button className={styles.downloadContainer}>
              <b className={styles.downloadStatistics}>download statistics</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  group85: PropTypes.string,

  /** Style props */
  frameSectionWidth: PropTypes.any,
  frameSectionPadding: PropTypes.any,
  frameSectionAlignSelf: PropTypes.any,
  chartAndLegendMinWidth: PropTypes.any,
};

export default FrameComponent1;
