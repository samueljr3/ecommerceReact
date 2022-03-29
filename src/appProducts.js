import React from "react";
//import productList from "./components/Products/products.json";
import HeroImg from "./components/Products/hero3.jpeg";
// import RAMList from "./components/Products/getRAM";
// import MOBOList from "./components/Products/getMOBO";
// import GPUList from "./components/Products/getGPU";
// import Filter from "./components/Products/Filter";
import ProductList from "./components/Products/getProducts";

const productStyle = {
  backgroundImage: `url(${HeroImg})`,
};

// const ramList = productList.RAM;
// const moboList = productList.Motherboards;
// const gpuList = productList.GraphicsCards;

class Products extends React.Component{  
  constructor(){
    super();
    this.state = {
      sort:"",
      price: "",
    }
  }
  handleOnChange = async (event, type) =>{
    //impl
    // console.log(event.target.value);

    // let value = event.target.value;
    // event.preventDefault();
    // let emptyObject = {};
    // emptyObject[type] = await value
    // await this.setState(emptyObject)
    // this.filter();

  }
  filterProducts(size){
    //impl
   // console.log(event.target.value);
  }
  render(){
  return (
    <main id="product-main">
      <section className="hero-products" style={productStyle}>
        <h1>Daily Steals</h1>
      </section>
      {/* <Filter
        price={this.state.price}
        sort={this.state.sort}
        filterProducts={this.filterProducts}
        sortProducts={this.sortProducts}>
      </Filter> */}

      {/* <h2 className="product-title">RAM</h2>
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
      </div> */}
        <ProductList/>
    </main>
  );
      }
};

export default Products;
