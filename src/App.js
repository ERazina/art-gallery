import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CardContext";
import About from "./components/About/About";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import Delivery from "./components/Delivery/Delivery";
import Contact from "./components/Contact/Contact";
import Main from "./components/Main/Main";
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
            <Route path="/" element={<Main />} />
            <Route path="/gallery" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/exhibitions" element={<Exhibitions />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contacts" element={<Contact />} />
          </Routes>
          <Footer />
        {/* </div> */}
      </Router>
    </CartProvider>
  );
}

export default App;
