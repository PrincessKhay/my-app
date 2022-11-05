import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
