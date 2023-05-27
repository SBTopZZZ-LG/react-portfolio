import './App.css';

import { VGap } from "./Components/Gap";
import Navbar2 from "./Components/NavBar";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Navbar2 />
      <VGap gap={20} />

      <HomePage />
    </div>
  );
}

export default App;
