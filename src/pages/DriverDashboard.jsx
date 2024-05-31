import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent1 from "../components/FrameComponent12";
import JobItems from "../components/JobItems";
import styles from "./DriverDashboard.module.css";

const DriverDashboard = () => {
  return (
    <div className={styles.driverDashboard}>
      <FrameComponent10 />
      <main className={styles.frameParent}>
        <FrameComponent9 />
        <FrameComponent8 />
        <FrameComponent1
          group85="/group-851.svg"
          frameSectionWidth="unset"
          frameSectionPadding="0px var(--padding-11xl)"
          frameSectionAlignSelf="stretch"
          chartAndLegendMinWidth="434px"
        />
        <section className={styles.jobListings}>
          <JobItems />
        </section>
      </main>
    </div>
  );
};

export default DriverDashboard;
