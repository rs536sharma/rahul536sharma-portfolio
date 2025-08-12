import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import Gallery from "./pages/Gallery";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
