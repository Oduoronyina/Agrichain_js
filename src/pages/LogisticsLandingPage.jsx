import FrameComponent7 from "../components/FrameComponent71";
import FrameComponent6 from "../components/FrameComponent61";
import FrameComponent5 from "../components/FrameComponent51";
import FrameComponent4 from "../components/FrameComponent41";
import FrameComponent3 from "../components/FrameComponent32";
import Footer from "../components/Footer2";
import styles from "./LogisticsLandingPage.module.css";

const LogisticsLandingPage = () => {
  return (
    <div className={styles.logisticsLandingPage}>
      <section className={styles.headerParent}>
        <div className={styles.header}>
          <FrameComponent7 />
          <FrameComponent6 />
          <header className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              className={styles.iconsaxlinearsearchnormal1}
              loading="lazy"
              alt=""
              src="/iconsaxlinearsearchnormal1.svg"
            />
            <img
              className={styles.iconsaxlinearshoppingcart}
              loading="lazy"
              alt=""
              src="/iconsaxlinearshoppingcart.svg"
            />
          </header>
          <FrameComponent5 />
        </div>
        <FrameComponent4 />
      </section>
      <FrameComponent3 />
      <Footer />
    </div>
  );
};

export default LogisticsLandingPage;
