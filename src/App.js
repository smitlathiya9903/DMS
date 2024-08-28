import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Dashboard from "./pages/dashboard";
import Sales from "./pages/sales";
import RoughDiamondPurchase from "./pages/rough-diamond-purchase";
import Expenses from "./pages/expenses";
import AnalysisSales from "./pages/analysis-sales";
import AnalysisPurchase from "./pages/analysis-purchase";
import AnalysisExpances from "./pages/analysis-expances";
import Notification1 from "./pages/notification1";
import WorkersNisarg from "./pages/workers-nisarg";
import WorkersSmit from "./pages/workers-smit";
import WorkersPriyesh from "./pages/workers-priyesh";

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
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/sales":
        title = "";
        metaDescription = "";
        break;
      case "/rough-diamond-purchase":
        title = "";
        metaDescription = "";
        break;
      case "/expenses":
        title = "";
        metaDescription = "";
        break;
      case "/analysis-sales":
        title = "";
        metaDescription = "";
        break;
      case "/analysis-purchase":
        title = "";
        metaDescription = "";
        break;
      case "/analysis-expances":
        title = "";
        metaDescription = "";
        break;
      case "/notification":
        title = "";
        metaDescription = "";
        break;
      case "/workers-nisarg":
        title = "";
        metaDescription = "";
        break;
      case "/workers-smit":
        title = "";
        metaDescription = "";
        break;
      case "/workers-priyesh":
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
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sales" element={<Sales />} />
      <Route
        path="/rough-diamond-purchase"
        element={<RoughDiamondPurchase />}
      />
      <Route path="/expenses" element={<Expenses />} />
      <Route path="/analysis-sales" element={<AnalysisSales />} />
      <Route path="/analysis-purchase" element={<AnalysisPurchase />} />
      <Route path="/analysis-expances" element={<AnalysisExpances />} />
      <Route path="/notification" element={<Notification1 />} />
      <Route path="/workers-nisarg" element={<WorkersNisarg />} />
      <Route path="/workers-smit" element={<WorkersSmit />} />
      <Route path="/workers-priyesh" element={<WorkersPriyesh />} />
    </Routes>
  );
}
export default App;
