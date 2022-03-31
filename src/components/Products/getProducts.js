import React from "react";
import axios from "axios";

export default class ProductList extends React.Component {
  state = {
    originalProductData: [],
    productData: [],
    type: "Reset",

  };

   componentDidMount() {
    axios.get("/api/products").then((res) => {
      //when deploying change url to '/api/Products'
      this.setState({ productData: res.data, originalProductData: res.data });
      //if heroku dies type 'heroku restart' in terminal
    });
  }

  productFilter(type) {
    // if (this.originalProductData != null) {
    //   return () => {
    //     this.setState({ type, productData: this.originalProductData });
    //   };
    // }
    return () => {
      this.setState({ type });
    };
  }

  render() {
    return (
      <>
        <div className="filter">
          <p>Sort by type: </p>
          <button onClick={this.productFilter("RAM")}>RAM</button>
          <button onClick={this.productFilter("MOBO")}>MOBO</button>
          <button onClick={this.productFilter("GPU")}>GPU</button>
          <button onClick={this.productFilter("Reset")}>Reset</button>
        </div>
        <div className="filter">
          <p>Sort by price: </p>
          <button onClick={this.productFilter(200)}>{`$200 >`}</button>
          <button onClick={this.productFilter(300)}>{`$300 >`}</button>
          <button onClick={this.productFilter(400)}>{`$400 >`}</button>
          <button onClick={this.productFilter(500)}>{`$500 <`}</button>
        </div>
        <h2 className="product-title">Our Products</h2>
        <div className="product-grid">
          {this.state.productData
            .filter((card) => {
              if (this.state.type === "Reset") {
                return true;
              } else if (this.state.type === 500) {
                return this.state.type < card.price;
              } else if (Number.isInteger(this.state.type)) {
                return this.state.type > card.price;
              } else {
                return this.state.type === card.part_type;
              }
            })
            .map((card) => {
              return (
                <div className="product-card">
                  <figure>
                    <img src={card.image} alt={card.product_name} />
                    <figcaption>
                      {card.product_name} - ${card.price}
                    </figcaption>
                  </figure>
                  <p>{card.product_desc}</p>
                  <button className="product-button">Buy Now</button>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
