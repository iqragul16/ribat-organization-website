import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Programs from "./Pages/Programs";
import ProgramDetails from "./Pages/ProgramDetails";

import JoinTeam from "./Pages/JoinTeam";
import TeamDetails from "./Pages/TeamDetails";

import Humraah from "./Pages/Humraah";
import SkillDevelopment from "./Pages/SkillDevelopment";
import SportsPrograms from "./Pages/SportsPrograms";
import FamilySupport from "./Pages/FamilySupport";
import LegalMediation from "./Pages/LegalMediation";
import CulinaryCreations from "./Pages/CulinaryCreations";
import DesignEssentials from "./Pages/DesignEssentials";
import Karigar from "./Pages/Karigar";

import Services from "./Pages/Services";
import Library from "./Pages/Library";
import LearningNexus from "./Pages/LearningNexus";
import SportsCenter from "./Pages/SportsCenter";
import HarmonyResolutionCenter from "./Pages/HarmonyResolutionCenter";

function App() {
  return (
<HashRouter >     
 <Routes>

        {/* ================= HOME ================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ================= PROGRAMS ================= */}
        <Route
          path="/programs"
          element={<Programs />}
        />

        <Route
          path="/programs/:id"
          element={<ProgramDetails />}
        />

        {/* ================= HUMRAAH ================= */}
        <Route
          path="/humraah"
          element={<Humraah />}
        />

        <Route
          path="/humraah/skill-development"
          element={<SkillDevelopment />}
        />

        <Route
          path="/humraah/sports-programs"
          element={<SportsPrograms />}
        />

        <Route
          path="/humraah/family-support-group"
          element={<FamilySupport />}
        />

        <Route
          path="/humraah/legal-mediation"
          element={<LegalMediation />}
        />

        <Route
          path="/humraah/skill-development/culinary-creations"
          element={<CulinaryCreations />}
        />

        <Route
          path="/humraah/skill-development/design-essentials"
          element={<DesignEssentials />}
        />

        <Route
          path="/humraah/skill-development/karigar"
          element={<Karigar />}
        />

        {/* ================= JOIN TEAM ================= */}
        <Route
          path="/join-team"
          element={<JoinTeam />}
        />

        <Route
          path="/join-team/:type"
          element={<TeamDetails />}
        />

        {/* ================= SERVICES ================= */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* ================= SERVICE DETAILS ================= */}
        <Route
          path="/services/library"
          element={<Library />}
        />

        <Route
          path="/services/learning-nexus"
          element={<LearningNexus />}
        />
<Route
  path="/services/sports-center"
  element={<SportsCenter />}
/>
<Route
  path="/services/harmony-resolution-center"
  element={<HarmonyResolutionCenter />}
/>
      </Routes>
    </HashRouter>
  );
}

export default App;
