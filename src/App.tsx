// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './shared/components/layout/Layout';
import HomePage from './features/home/components/HomePage';
import AboutPage from './features/about/components/AboutPage';
import PlansPage from './features/plans/components/PlansPage';
import BlogPage from './features/blog/components/BlogPage';
import ContactPage from './features/contact/components/ContactPage';
import TestimonialsPage from './features/testimonials/components/TestimonialsPage';
import CheckoutPage from './features/checkout/components/CheckoutPage';
import FaqPage from './features/faq/components/FaqPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
