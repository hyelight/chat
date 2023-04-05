import React from "react";
import Navbar from "./components/Navbar";
import MainBg from "./components/MainBg";
import Classes from "./components/Classes";
import Pricing from "./components/Pricing";
import Community from "./components/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <MainBg />
      <Classes />
      <Pricing />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
