import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import AboutUsPage from './pages/AboutUsPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import BookingPage from './pages/BookingPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
