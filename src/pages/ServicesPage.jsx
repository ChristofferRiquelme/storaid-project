import React from 'react';
import Hero from '../components/Hero.jsx';
import OurServices from '../components/OurServices.jsx';
import BookNow from '../components/BookNow.jsx';
import SubscribeOurNewsletter from '../components/SubscribeOurNewsletter.jsx';
import Testimonials from '../components/Testimonials.jsx';
import TestimonialsHeroImage from '../assets/testimonials-hero-image.svg';
import Faq from '../components/Faq.jsx';

function ServicesPage() {
  return (
    <>
      <Hero
        title="Services"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <OurServices />
      <Testimonials
        backgroundImage={TestimonialsHeroImage}
        overlayColor="#12372A"
      />
      <Faq />
      <BookNow />
      <SubscribeOurNewsletter />
    </>
  );
}

export default ServicesPage;