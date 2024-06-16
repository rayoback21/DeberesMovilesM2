import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./layout/inicio";
import StartInit from "./pages/pages";
import ComponentsPage from "./pages/pagesdos";

const App: React.FC = () => {
  return (
    <Router>
      <Inicio>
        <Routes>
          <Route path="/" element={<StartInit />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </Inicio>
    </Router>
  );
};

export default App;
