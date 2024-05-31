import PropTypes from "prop-types";
import styles from "./AddProduct.module.css";

const AddProduct = ({ className = "", onClose }) => {
  return (
    <div className={[styles.addProduct, className].join(" ")}>
      <a className={styles.addProduct1}>Add Product</a>
      <section className={styles.companyDetailsWrapper}>
        <form className={styles.companyDetails}>
          <b className={styles.productInformation}>Product Information</b>
          <div className={styles.typeOfCompany}>
            <div className={styles.radio}>
              <input
                className={styles.check}
                type="radio"
                name="radioGroup-1"
              />
              <a className={styles.value}>Fruit</a>
            </div>
            <div className={styles.radio1}>
              <input
                className={styles.check1}
                type="radio"
                name="radioGroup-1"
              />
              <a className={styles.value1}>Vegetable</a>
            </div>
          </div>
          <div className={styles.input}>
            <div className={styles.label}>
              <img className={styles.lefticon} alt="" src="/lefticon.svg" />
              <div className={styles.inputLeftIcon}>Product name</div>
            </div>
            <div className={styles.inputcontainer}>
              <div className={styles.inputinnercontainer}>
                <img className={styles.lefticon1} alt="" src="/lefticon2.svg" />
                <p className={styles.text}>Name of the company</p>
                <img
                  className={styles.righticon}
                  alt=""
                  src="/righticon11.svg"
                />
              </div>
            </div>
            <div className={styles.response}>
              <img className={styles.lefticon2} alt="" src="/lefticon1.svg" />
              <div className={styles.text1}>Response</div>
            </div>
          </div>
          <div className={styles.input1}>
            <div className={styles.label1}>
              <img className={styles.lefticon3} alt="" src="/lefticon.svg" />
              <div className={styles.text2}>Product Quatity</div>
            </div>
            <div className={styles.inputcontainer1}>
              <input
                className={styles.inputinnercontainer1}
                placeholder="Registration no."
                type="text"
              />
            </div>
            <div className={styles.response1}>
              <img className={styles.lefticon4} alt="" src="/lefticon1.svg" />
              <div className={styles.text3}>Response</div>
            </div>
          </div>
          <div className={styles.input2}>
            <div className={styles.label2}>
              <img
                className={styles.lefticon5}
                loading="lazy"
                alt=""
                src="/lefticon-4.svg"
              />
              <div className={styles.simpleInputLabel}>Describe your case</div>
            </div>
            <div className={styles.inputcontainer2}>
              <input
                className={styles.inputinnercontainer2}
                placeholder="Tell us about your use case..."
                type="text"
              />
            </div>
            <div className={styles.response2}>
              <img className={styles.lefticon6} alt="" src="/lefticon1.svg" />
              <div className={styles.text4}>Response</div>
            </div>
          </div>
          <button className={styles.button}>
            <img className={styles.lefticon7} alt="" src="/lefticon3.svg" />
            <b className={styles.value2}>Submit</b>
            <img className={styles.righticon1} alt="" src="/righticon-1.svg" />
          </button>
        </form>
      </section>
    </div>
  );
};

AddProduct.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default AddProduct;
