import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { VGap } from "./Components/Gap";
import Navbar2 from "./Components/NavBar";
import FooterBar from "./Components/FooterBar";

import HomePage from "./Pages/HomePage";

import './App.css';
import MenuOverlay from "./Pages/MenuOverlay";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ height: "100%" }}>
      <div style={{
        minHeight: "100%",
        marginBottom: "-204px",
      }}>
        <Navbar2 onMenuClick={setShowMenu} />
        {showMenu && <MenuOverlay paddingTop="60px" />}

        <VGap gap={100} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>

        <VGap gap={204 + 15} />
      </div>

      <FooterBar />
    </div >
  );
}

export default App;
