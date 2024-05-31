import Category from "./Category";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.headingParent, className].join(" ")}>
      <div className={styles.heading}>
        <b className={styles.popularCategories}>Popular Categories</b>
        <div className={styles.viewAllCategories}>
          <div className={styles.button}>
            <div className={styles.viewAll}>View All</div>
            <div className={styles.viewAllIcon}>
              <img className={styles.groupIcon} alt="" src="/group-3.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.categories}>
        <Category image1="/image-1@2x.png" freshFruit="Fresh Fruit" />
        <Category
          image1="/image-1-1@2x.png"
          freshFruit="Fresh Vegetables"
          propBorder="1px solid var(--branding-success-dark)"
          propBoxShadow="0px 0px 12px rgba(32, 181, 38, 0.32)"
          propColor="#2c742f"
        />
        <Category
          image1="/image-1-2@2x.png"
          freshFruit={`Meat & Fish`}
          propBorder="1px solid var(--gray-scale-gray-100)"
          propBoxShadow="unset"
          propColor="#1a1a1a"
        />
        <Category
          image1="/image-1-3@2x.png"
          freshFruit="Nuts"
          propBorder="1px solid var(--gray-scale-gray-100)"
          propBoxShadow="unset"
          propColor="#1a1a1a"
        />
        <Category
          image1="/image-1-3@2x.png"
          freshFruit="Herbs and Spices"
          propBorder="1px solid var(--gray-scale-gray-100)"
          propBoxShadow="unset"
          propColor="#1a1a1a"
        />
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
