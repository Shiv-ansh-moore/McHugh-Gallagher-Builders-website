// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import NewBuilds from "./pages/Services/NewBuilds";
import Navbar from "./components/Navbar";
import CouncilWorks from "./pages/Services/CouncilWorks";
import Extensions from "./pages/Services/Extensions";
import HSEWorks from "./pages/Services/HSEWorks";
import InsuranceWorks from "./pages/Services/InsuranceWorks";
import Interior from "./pages/Services/Interior";
import JoineryService from "./pages/Services/JoineryService";
import Schools from "./pages/Services/Schools"
import Sunrooms from "./pages/Services/Sunrooms";
import Renovations from "./pages/Services/Renovations";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services/NewBuilds" element={<NewBuilds/>}/>
          <Route path="/Services/CouncilWorks" element={<CouncilWorks/>}/>
          <Route path="/Services/Extensions" element={<Extensions/>}/>
          <Route path="/Services/HSEWorks" element={<HSEWorks/>}/>
          <Route path="/Services/InsuranceWorks" element={<InsuranceWorks/>}/>
          <Route path="/Services/Interior" element={<Interior/>}/>
          <Route path="/Services/JoineryService" element={<JoineryService/>}/>
          <Route path="/Services/Schools" element={<Schools/>}/>
          <Route path="/Services/Sunrooms" element={<Sunrooms/>}/>
          <Route path="/Services/Renovations" element={<Renovations/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
