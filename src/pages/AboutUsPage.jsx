import React from 'react';
import Hero from '../components/Hero.jsx';
import AboutUs from '../components/AboutUs.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Testimonials from '../components/Testimonials.jsx';
import TestimonialsHeroImage from '../assets/testimonials-hero-image.svg';
import SubscribeOurNewsletter from '../components/SubscribeOurNewsletter.jsx';
import Brands from '../components/Brands.jsx';

function AboutUsPage() {
  return (
    <>
      <Hero
        title="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <AboutUs />
      <Brands />
      <Testimonials 
        backgroundImage={TestimonialsHeroImage}
        overlayColor="#12372A"
      />
      <WhyChooseUs />
      <SubscribeOurNewsletter />
    </>
  );
}

export default AboutUsPage;