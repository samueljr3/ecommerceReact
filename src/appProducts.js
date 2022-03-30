import React from "react";
import HeroImg from "./components/Products/hero3.jpeg";
import ProductList from "./components/Products/getProducts";

const productStyle = {
  backgroundImage: `url(${HeroImg})`,
};

class Products extends React.Component{  
  constructor(){
    super();
    this.state = {
      sort:"",
      price: "",
    }
  }
 
  render(){
  return (
    <main id="product-main">
      <section className="hero-products" style={productStyle}>
        <h1>Daily Steals</h1>
      </section>
        <ProductList/>
    </main>
  );
      }
};

export default Products;
