import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  const handleGetStarted = () => {
    setShowDashboard(true);
  };

  const handleBackToLanding = () => {
    setShowDashboard(false);
  };

  if (showDashboard) {
    return <Dashboard onBackToLanding={handleBackToLanding} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onGetStarted={handleGetStarted} />
      <Hero onGetStarted={handleGetStarted} />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
