import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// importing pages 
import Home from "./pages/Home";
import Error from "./pages/Error";
// importing components 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;