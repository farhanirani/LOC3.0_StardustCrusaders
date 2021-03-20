import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Fade from "react-reveal/Fade";

function HomePage() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Fade left>
        <Products heading="Choose your hurdle" data={productData} />
      </Fade>
      <Feature />
      <Fade right>
        <Products
          heading="Check out these Community Workouts"
          data={productDataTwo}
        />
      </Fade>
      <Footer />
    </Router>
  );
}

export default HomePage;
