import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeatuesGrid';
import HowItWorks from './components/HowItWorks';
import ApiShowcase from './components/ApiShowcase';
import StatsBar from './components/StatsBar';
import CtaSection from './components/CtaSection';
import BigLogoSection from './components/BigLogoSection';
import Footer from './components/Footer';
import Docx from './components/Docx';

const LandingPage = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <ApiShowcase />
      <StatsBar />
      <CtaSection />
      <BigLogoSection />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-teal/30 selection:text-teal">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<Docx />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
