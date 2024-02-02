import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import TeamPage from './pages/Home/TeamPage';
import ServicesPage from './pages/ServicesPage';
import QuotePage from './pages/Home/QuotePage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage/LoginPage';
import Chatbot from './components/Chatbot';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/Team" element={<TeamPage />} /> */}
        {/* <Route path="/services" element={<ServicesPage />} /> */}
        {/* <Route path="/" element={<ContactPage />} /> */}
        {/* <Route path="/contact" element={<QuotePage />} /> */}
      </Routes>
      <Footer/>
      <Chatbot/>


    </Router>
  );
}

export default App;
