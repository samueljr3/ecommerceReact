import React from "react";
import productList from "./components/Products/products.json";
import HeroImg from "./components/Products/hero3.jpeg";
import RAMList from "./components/Products/getRAM";
import MOBOList from "./components/Products/getMOBO";

const productStyle = {
  backgroundImage: `url(${HeroImg})`,
};

const ramList = productList.RAM;
const moboList = productList.Motherboards;
const gpuList = productList.GraphicsCards;

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
        {moboList.map((card) => {
          return (
            <div className="product-card">
              <figure>
                <img src={card.image} alt={card.name} />
                <figcaption>
                  {card.name} - ${card.price}
                </figcaption>
              </figure>
              <p>{card.desc}</p>
              <button className="product-button">Buy Now</button>
            </div>
          );
        })}
      </div>
      <h2 className="product-title">Graphic Cards</h2>
      <div className="product-grid">
        {gpuList.map((card) => {
          return (
            <div className="product-card">
              <figure>
                <img src={card.image} alt={card.name} />
                <figcaption>
                  {card.name} - ${card.price}
                </figcaption>
              </figure>
              <p>{card.desc}</p>
              <button className="product-button">Buy Now</button>
            </div>
          );
        })}
      </div>
    </main>
  );
      }
};

export default Products;
