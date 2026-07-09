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

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxQXswSmYMupP6P4V4luN6l_Uxz1si-QI1VbGdWtwkn12nRhWUkKQWMruUrUdzG5XZZ/exec";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const formData = new FormData();
    formData.append("formType", "Website Visit");
    formData.append("path", `${location.pathname}${location.search}`);
    formData.append("pageTitle", document.title);
    formData.append("referrer", document.referrer);
    formData.append("userAgent", navigator.userAgent);
    formData.append("visitedAt", new Date().toISOString());

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).catch((err) => console.error(err));
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
