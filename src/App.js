import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import TeamPage from './pages/Home/TeamPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/Home/QuotePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StoryPage from './pages/StoryPage';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<StoryPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/Team" element={<TeamPage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="/" element={<ContactPage />} /> */}
        {/* <Route path="/contact" element={<QuotePage />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
