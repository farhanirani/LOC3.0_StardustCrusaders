import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your hurdle" data={productData} />
      <Feature />
      <Products
        heading="Check out these Community Workouts"
        data={productDataTwo}
      />
      <Footer />
    </Router>
  );
}

export default HomePage;
