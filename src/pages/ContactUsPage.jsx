import React from 'react';
import Hero from '../components/Hero.jsx';
import SubscribeOurNewsletter from '../components/SubscribeOurNewsletter.jsx';
import GetInTouch from '../components/GetInTouch.jsx';
import FindUs from '../components/FindUs.jsx';
import Faq from '../components/Faq.jsx';

function ContactUsPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <GetInTouch />
      <FindUs />
      <Faq />
      <SubscribeOurNewsletter />
    </>
  );
}

export default ContactUsPage;