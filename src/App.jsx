import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LogisticsLandingPage from "./pages/LogisticsLandingPage";
import ConsumerHomepage from "./pages/ConsumerHomepage";
import ConsumerShoppingCart from "./pages/ConsumerShoppingCart";
import Checkout from "./pages/Checkout";
import DistributorDashboard from "./pages/DistributorDashboard";
import DistributorDashboard1 from "./pages/DistributorDashboard1";
import ProcessingCompany from "./pages/ProcessingCompany";
import FarmerDashboard from "./pages/FarmerDashboard";
import DriverDashboard from "./pages/DriverDashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/consumer-shopping-cart":
        title = "";
        metaDescription = "";
        break;
      case "/checkout":
        title = "";
        metaDescription = "";
        break;
      case "/distributor-dashboard1":
        title = "";
        metaDescription = "";
        break;
      case "/distributor-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/processing-company":
        title = "";
        metaDescription = "";
        break;
      case "/farmer-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/driver-dashboard":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogisticsLandingPage />} />
      <Route path="/consumer-homepage" element={<ConsumerHomepage />} />
      <Route
        path="/consumer-shopping-cart"
        element={<ConsumerShoppingCart />}
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/distributor-dashboard1"
        element={<DistributorDashboard />}
      />
      <Route
        path="/distributor-dashboard"
        element={<DistributorDashboard1 />}
      />
      <Route path="/processing-company" element={<ProcessingCompany />} />
      <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
      <Route path="/driver-dashboard" element={<DriverDashboard />} />
    </Routes>
  );
}
export default App;
