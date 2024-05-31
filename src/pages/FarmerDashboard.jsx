import FrameComponent2 from "../components/FrameComponent22";
import TopBar from "../components/TopBar";
import Content from "../components/Content";
import FrameComponent1 from "../components/FrameComponent12";
import FrameComponent from "../components/FrameComponent7";
import styles from "./FarmerDashboard.module.css";

const FarmerDashboard = () => {
  return (
    <div className={styles.farmerDashboard}>
      <FrameComponent2 />
      <main className={styles.topBarParent}>
        <TopBar />
        <Content />
        <FrameComponent1 group85="/group-85.svg" />
        <FrameComponent />
      </main>
    </div>
  );
};

export default FarmerDashboard;
