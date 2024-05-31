import Navigation1 from "../components/Navigation1";
import BigBanner from "../components/BigBanner";
import Featured from "../components/Featured";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./ConsumerHomepage.module.css";

const ConsumerHomepage = () => {
  return (
    <div className={styles.consumerHomepage}>
      <Navigation1 />
      <section className={styles.body}>
        <div className={styles.bigBannerParent}>
          <BigBanner />
          <Featured />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default ConsumerHomepage;
