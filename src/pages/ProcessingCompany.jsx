import FrameComponent6 from "../components/FrameComponent6";
import MenuPanel from "../components/MenuPanel";
import styles from "./ProcessingCompany.module.css";

const ProcessingCompany = () => {
  return (
    <div className={styles.processingCompany}>
      <FrameComponent6 statsIconsTextDecoration="unset" />
      <MenuPanel />
    </div>
  );
};

export default ProcessingCompany;
