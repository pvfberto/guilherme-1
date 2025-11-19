import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MechanismSection from './components/MechanismSection';
import SocialProofDeep from './components/SocialProofDeep';
import WhatYouGetSection from './components/WhatYouGetSection';
import AboutSection from './components/AboutSection';
import GuaranteeSection from './components/GuaranteeSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Social Proof Quick */}
      <SocialProof />

      {/* Section 3: Problem */}
      <ProblemSection />

      {/* Section 4: Solution */}
      <SolutionSection />

      {/* Section 5: Mechanism (4 Pillars) */}
      <MechanismSection />

      {/* Section 6: Social Proof Deep */}
      <SocialProofDeep />

      {/* Section 7: What You Get */}
      <WhatYouGetSection />

      {/* Section 8: About */}
      <AboutSection />

      {/* Section 9: Guarantee */}
      <GuaranteeSection />

      {/* Section 10: Pricing & Urgency */}
      <PricingSection />

      {/* Section 11: FAQ */}
      <FAQSection />

      {/* Section 12: Final CTA */}
      <FinalCTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
