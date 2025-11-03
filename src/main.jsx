import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import heroImage from './assets/hero-image.svg'
import AboutUs from './components/AboutUs.jsx'
import Brands from './components/Brands.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Nav />
    <Hero
      title="Space Simplified, Storage Perfected"
      subtitle="Welcome to StorAid"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor."
      image={heroImage}
    />
    <AboutUs />
    <Brands />
  </StrictMode>,
)
