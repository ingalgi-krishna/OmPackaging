import React from "react";
import Navbar from "./Components/Navbar";
import HeroPage from "./Components/HeroPage";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import "./App.css";
import AboutUs from "./Components/About";
import OurServices from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroPage />
      <OurServices />
      <AboutUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
