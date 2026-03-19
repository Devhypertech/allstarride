import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PremiumBrandsSection from '../components/PremiumBrandsSection';
import MostSearchedVehiclesSection from '../components/MostSearchedVehiclesSection';
import RentalOfferSection from '../components/RentalOfferSection';
import BrowseByTypeSection from '../components/BrowseByTypeSection';
import HowItWorksSection from '../components/HowItWorksSection';
import CarLoanCalculatorSection from '../components/CarLoanCalculatorSection';
import FeaturedListingsSection from '../components/FeaturedListingsSection';
import TrustedExpertiseSection from '../components/TrustedExpertiseSection';
import OurServicesSection from '../components/OurServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CarReviewSection from '../components/CarReviewSection';
import UpcomingCarsEventsSection from '../components/UpcomingCarsEventsSection';
import AppDownloadBannerSection from '../components/AppDownloadBannerSection';
import FooterSection from '../components/FooterSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <PremiumBrandsSection />
        <MostSearchedVehiclesSection />
        <RentalOfferSection />
        <BrowseByTypeSection />
        <HowItWorksSection />
        <CarLoanCalculatorSection />
        <FeaturedListingsSection />
        <TrustedExpertiseSection />
        <OurServicesSection />
        <TestimonialsSection />
        <CarReviewSection />
        <UpcomingCarsEventsSection />
        <AppDownloadBannerSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;

