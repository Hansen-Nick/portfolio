import React from "react";
import "./App.css";
import Header from "./components/LandingPage/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <Projects />
    </>
  );
}

export default App;
