import React from "react";
import Navbar from "./components/Navbar";
import MainBg from "./components/MainBg";
import Classes from "./components/Classes";
import Pricing from './components/Pricing';
import Community from './components/Community';

function App() {
  return (
    <div>
      <Navbar />
      <MainBg />
      <Classes />
      <Pricing />
      <Community />
    </div>
  );
}

export default App;
