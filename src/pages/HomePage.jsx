import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import FooterSection from '../components/FooterSection';
import TaskManager from '../components/TaskManager';

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeatureSection />
      <TaskManager />
      <FooterSection/>
    </>
  );
};

export default HomePage;
