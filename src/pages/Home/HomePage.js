import React from 'react';
import HeroSection from '../../components/HeroSection';
import TeamPage from './TeamPage';
import QuotePage from './QuotePage';

// import Navbar from "../components/Navbar";
// import Footer from './components/Footer';
// import AboutSection from '../components/AboutSection';
// import ServicesSection from '../components/ServicesSection';
// import ContactSection from '../components/ContactSection';

const HomePage = () => {
    return (
        <div>
            <HeroSection />
            <QuotePage/>
            <TeamPage/>
            
            {/* <AboutSection />
            <ServicesSection />
            <ContactSection /> */}
        </div>
    );
}

export default HomePage;
