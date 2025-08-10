// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { ProductsPage } from './pages/Products';
import { CategoryPage } from './pages/Products/CategoryPage';
import { ProductDetailPage } from './pages/Products/ProductDetail';
import { ServicesPage } from './pages/Services';
import { InnovationPage } from './pages/Innovation';
import { NewsPage } from './pages/News';
import { ContactPage } from './pages/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/category/:categoryId" element={<CategoryPage />} />
            <Route path="/products/:productId" element={<ProductDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/innovation" element={<InnovationPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;