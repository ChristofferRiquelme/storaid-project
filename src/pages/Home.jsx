import React from 'react';
import Hero from '../components/Hero.jsx';
import heroImage from '../assets/hero-image.svg';
import AboutUs from '../components/AboutUs.jsx';
import Brands from '../components/Brands.jsx';
import OurServices from '../components/OurServices.jsx';
import Testimonials from '../components/Testimonials.jsx';
import TestimonialsHeroImage from '../assets/testimonials-hero-image.svg';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import PricingPlan from '../components/PricingPlan.jsx';
import BookNow from '../components/BookNow.jsx';
import BlogAndNews from '../components/BlogAndNews.jsx';
import SubscribeOurNewsletter from '../components/SubscribeOurNewsletter.jsx';

function Home() {
  return (
    <>
      <Hero
        title="Space Simplified, Storage Perfected"
        subtitle="Welcome to StorAid"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor."
        image={heroImage}
        button={{ text: "Discover More", link: "/about" }}
      />
      <AboutUs />
      <Brands />
      <OurServices />
      <Testimonials 
        backgroundImage={TestimonialsHeroImage}
        overlayColor="#12372A"
        overlayOpacity={0.8}
      />
      <WhyChooseUs />
      <PricingPlan />
      <BookNow />
      <BlogAndNews />
      <SubscribeOurNewsletter />
    </>
  );
}

export default Home;