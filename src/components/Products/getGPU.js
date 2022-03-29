import React from 'react';
import axios from 'axios';

export default class GPUList extends React.Component{
    state = {
        gpuData:[],
    };

    componentDidMount(){
        axios.get("http://localhost:4000/api/GPU").then(res =>{
            this.setState({gpuData: res.data});
        });
    }

    filterProducts= () =>  {
      let filteredProducts = this.state.gpuData.filter(product => product.price > 400)
      this.setState({gpuData: filteredProducts});
    }

    render(){
        return(
            <>
            <button onClick= {this.filterProducts}>bruh</button>
            {this.state.gpuData.map((card) => {
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
            </>
        )
    }
}