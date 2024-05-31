import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Category.module.css";

const Category = ({
  className = "",
  image1,
  freshFruit,
  propBorder,
  propBoxShadow,
  propColor,
}) => {
  const categoryStyle = useMemo(() => {
    return {
      border: propBorder,
      boxShadow: propBoxShadow,
    };
  }, [propBorder, propBoxShadow]);

  const freshFruitStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={[styles.category, className].join(" ")}
      style={categoryStyle}
    >
      <div className={styles.image1Wrapper}>
        <img className={styles.image1Icon} loading="lazy" alt="" src={image1} />
      </div>
      <div className={styles.freshFruit} style={freshFruitStyle}>
        {freshFruit}
      </div>
    </div>
  );
};

Category.propTypes = {
  className: PropTypes.string,
  image1: PropTypes.string,
  freshFruit: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
  propBoxShadow: PropTypes.any,
  propColor: PropTypes.any,
};

export default Category;
