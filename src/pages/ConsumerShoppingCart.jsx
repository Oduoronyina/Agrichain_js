import FrameComponent1 from "../components/FrameComponent11";
import Breadcrumbs from "../components/Breadcrumbs";
import ShoppingCartContent from "../components/ShoppingCartContent";
import Footer from "../components/Footer1";
import styles from "./ConsumerShoppingCart.module.css";

const ConsumerShoppingCart = () => {
  return (
    <div className={styles.consumerShoppingCart}>
      <FrameComponent1 />
      <section className={styles.breadcrumbsParent}>
        <Breadcrumbs />
        <ShoppingCartContent />
      </section>
      <Footer />
    </div>
  );
};

export default ConsumerShoppingCart;
