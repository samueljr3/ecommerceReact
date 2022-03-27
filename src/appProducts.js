import React from "react";
//import productList from "./components/Products/products.json";
import HeroImg from "./components/Products/hero3.jpeg";
import RAMList from "./components/Products/getRAM";
import MOBOList from "./components/Products/getMOBO";
import GPUList from "./components/Products/getGPU";

const productStyle = {
  backgroundImage: `url(${HeroImg})`,
};

// const ramList = productList.RAM;
// const moboList = productList.Motherboards;
// const gpuList = productList.GraphicsCards;

class Products extends React.Component{  
  
  render(){
  return (
    <main id="product-main">
      <section className="hero-products" style={productStyle}>
        <h1>Daily Steals</h1>
      </section>
      <h2 className="product-title">RAM</h2>
      <div className="product-grid">
        <RAMList/>
      </div>
      <h2 className="product-title">Motherboards</h2>
      <div className="product-grid">
       <MOBOList/>
      </div>
      <h2 className="product-title">Graphic Cards</h2>
      <div className="product-grid">
        <GPUList/>
      </div>
    </main>
  );
      }
};

export default Products;
