import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CardContext";
import About from "./components/About/About";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import Contact from "./components/Contact/Contact";
import Sea from './components/Sea/Sea'
import "./App.css";
function App() {
  return (
    <CartProvider>
      <Router>
        {/* <div
          className="no-select"
        > */}
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/gallery" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/sea" element={<Sea />} />
            <Route path="/about" element={<About />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
          <Footer />
        {/* </div> */}
      </Router>
    </CartProvider>
  );
}

export default App;
