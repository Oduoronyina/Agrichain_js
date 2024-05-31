import LocationInputRows from "./LocationInputRows";
import PropTypes from "prop-types";
import styles from "./FrameComponent51.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={[styles.headerInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <form className={styles.locationInputRowsParent}>
            <LocationInputRows
              iconlyBoldLocation="/iconlyboldlocation@2x.png"
              enterLocationPlaceholder="enter location"
              origin1="origin"
            />
            <LocationInputRows
              iconlyBoldLocation="/iconlyboldlocation@2x.png"
              enterLocationPlaceholder="enter location"
              origin1="desitination"
              propBackgroundColor="unset"
              propBackgroundColor1="unset"
              propWidth="103px"
              propMinWidth="46px"
              propPadding="var(--padding-5xs) var(--padding-7xs)"
              propMinWidth1="85px"
            />
            <LocationInputRows
              iconlyBoldLocation="/iconlyboldbag-2@2x.png"
              enterLocationPlaceholder="weight (KG0"
              origin1="weight"
              propBackgroundColor="#fff"
              propBackgroundColor1="#fff"
              propWidth="94px"
              propMinWidth="41px"
              propPadding="var(--padding-5xs) var(--padding-7xs)"
              propMinWidth1="51px"
            />
            <button className={styles.checkPriceWrapper}>
              <b className={styles.checkPrice}>check price</b>
            </button>
          </form>
        </div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/frame-6925@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
