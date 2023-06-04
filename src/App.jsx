import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { VGap } from "./Components/Gap";
import Navbar2 from "./Components/NavBar";
import FooterBar from "./Components/FooterBar";

import HomePage from "./Pages/HomePage";

import './App.css';
import MenuOverlay from "./Pages/MenuOverlay";
import AboutMePage from "./Pages/AboutMePage";
import WorksPage from "./Pages/WorksPage";
import CredentialsPage from "./Pages/CredentialsPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ height: "100%" }}>
      <div style={{
        minHeight: "100%",
        marginBottom: "-204px",
      }}>
        {/* NavBar */}
        <Navbar2 onMenuClick={setShowMenu} />
        {showMenu && <MenuOverlay paddingTop="60px" />}
        <VGap gap={100} />

        {/* Page content */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/works" element={<WorksPage />} />
            <Route path="/credentials" element={<CredentialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>

        {/* Don't ask me wtf this is, but don't remove Lmao */}
        <VGap gap={204 + 60} />
      </div>

      {/* Footer */}
      <FooterBar />
    </div >
  );
}

export default App;
