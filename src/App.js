import React from "react";
import "./App.css";
import APropos from "./components/APropos/APropos";
import Banner from "./components/Banner/Banner";
import Competences from "./components/Competences/Competences";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <APropos />
      <Competences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
