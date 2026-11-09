import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SymptomChecker from './components/SymptomChecker';
import Specialties from './components/Specialties';
import AboutVera from './components/AboutVera';
import Modalities from './components/Modalities';
import ExperienceGallery from './components/ExperienceGallery';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import InteractiveBooking from './components/InteractiveBooking';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const scrollToBooking = () => {
    const el = document.getElementById('agendar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2D2926] selection:bg-[#F4EAE6] selection:text-[#9C5A48]">
      {/* Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero with Vera's Cutout & Visual Impact */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* 2. Interactive Symptom Assessment / Problem Identification */}
        <SymptomChecker />

        {/* 3. Detailed Visual Specialties */}
        <Specialties />

        {/* 4. About Vera Miranda & Humanized Philosophy */}
        <AboutVera />

        {/* 5. Online vs Presencial Modalities */}
        <Modalities />

        {/* 6. Sanctuary / Clinic Ambiance & Experience Tour */}
        <ExperienceGallery />

        {/* 7. Patient Stories & Testimonials */}
        <Testimonials />

        {/* 8. Interactive Booking Generator */}
        <InteractiveBooking />

        {/* 9. FAQ / Transparent Answers */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Widget */}
      <FloatingWhatsApp />
    </div>
  );
}
