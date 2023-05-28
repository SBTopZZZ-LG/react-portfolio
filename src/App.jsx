import React, { useState } from "react";

import { VGap, VMGap } from "./Components/Gap";
import Navbar2 from "./Components/NavBar";
import FooterBar from "./Components/FooterBar";

import HomePage from "./Pages/HomePage";

import './App.css';
import MenuOverlay from "./Pages/MenuOverlay";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <Navbar2 onMenuClick={setShowMenu} />

      {showMenu && <MenuOverlay paddingTop="60px" />}

      <VMGap
        gap={100}
        style={{ width: "100%" }}
      >
        <div style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}>
          <HomePage />
          <VGap gap={20} />

          <FooterBar />
        </div>
      </VMGap>
    </div>
  );
}

export default App;
