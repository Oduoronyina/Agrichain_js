import FrameComponent2 from "../components/FrameComponent21";
import Breadcrumbs1 from "../components/Breadcrumbs1";
import ContentWrapper from "../components/ContentWrapper";
import Footer from "../components/Footer1";
import styles from "./Checkout.module.css";

const Checkout = () => {
  return (
    <div className={styles.checkout}>
      <FrameComponent2 />
      <section className={styles.pageContent}>
        <Breadcrumbs1 />
        <ContentWrapper />
      </section>
      <Footer />
    </div>
  );
};

export default Checkout;
