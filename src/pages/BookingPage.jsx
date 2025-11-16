import React from 'react';
import Hero from '../components/Hero.jsx';
import BookingUnit from '../components/BookingUnit.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import SubscribeOurNewsletter from '../components/SubscribeOurNewsletter.jsx';
import Faq from '../components/Faq.jsx';

function BookingPage() {
  return (
    <>
      <Hero
        title="Booking"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <BookingUnit />
      <WhyChooseUs />
      <Faq />
      <SubscribeOurNewsletter />
    </>
  );
}

export default BookingPage;