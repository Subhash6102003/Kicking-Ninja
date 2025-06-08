import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Instructors from './pages/Instructors';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Shop from './pages/Shop';

function App() {  return (
    <Router basename="/Kicking-Ninja">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
        <Footer />
        <StickyCTA threshold={400} />
      </div>
    </Router>
  );
}

export default App;
