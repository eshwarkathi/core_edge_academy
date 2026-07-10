import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";

import ArtificialIntelligence from "./pages/ArtificialIntelligence";
import AutomationTesting from "./pages/AutomationTesting";
import DevOps from "./pages/DevOps";
import ScrumMaster from "./pages/ScrumMaster";
import DataAnalytics from "./pages/DataAnalytics";
import BusinessAnalyst from "./pages/BusinessAnalyst";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import FlutterDevelopment from "./pages/FlutterDevelopment";
import CyberSecurity from "./pages/CyberSecurity";
import TableauAI from "./pages/TableauAI";
import Enroll from "./pages/Enroll";
import About from "./pages/About";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search]);

  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/courses/ai"
          element={<ArtificialIntelligence />}
        />

        <Route
          path="/courses/qa"
          element={<AutomationTesting />}
        />

        <Route
          path="/courses/devops"
          element={<DevOps />}
        />

        <Route
          path="/courses/scrum"
          element={<ScrumMaster />}
        />

        <Route
          path="/courses/data"
          element={<DataAnalytics />}
        />

        <Route
          path="/courses/ba"
          element={<BusinessAnalyst />}
        />

        <Route
          path="/courses/fs"
          element={<FullStackDevelopment />}
        />

        <Route
          path="/courses/flutter"
          element={<FlutterDevelopment />}
        />

        <Route
          path="/courses/sec"
          element={<CyberSecurity />}
        />

        <Route
          path="/courses/tableau"
          element={<TableauAI />}
        />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/about" element={<About />} />



      </Routes>
      <FloatingWhatsApp />
    </>
  );
}

export default App;
