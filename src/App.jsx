import { BrowserRouter, Routes, Route } from "react-router-dom";

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
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/programs"
          element={<Programs />}
        />

        <Route
          path="/programs/:id"
          element={<ProgramDetails />}
        />

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
        <Route
          path="/join-team"
          element={<JoinTeam />}
        />

        <Route
          path="/join-team/:type"
          element={<TeamDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;