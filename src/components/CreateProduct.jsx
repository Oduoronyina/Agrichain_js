import PropTypes from "prop-types";
import styles from "./CreateProduct.module.css";

const CreateProduct = ({ className = "" }) => {
  return (
    <div className={[styles.createProduct, className].join(" ")}>
      <b className={styles.createProduct1}>Create Product</b>
    </div>
  );
};

CreateProduct.propTypes = {
  className: PropTypes.string,
};

export default CreateProduct;
