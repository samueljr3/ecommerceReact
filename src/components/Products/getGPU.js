import React from 'react';
import axios from 'axios';

export default class GPUList extends React.Component{
    state = {
        gpuData:[],
    };

    componentDidMount(){
        axios.get("http://localhost:4000/api/GPU").then(res =>{
            console.log(res);
            this.setState({gpuData: res.data});
        });
    }

    render(){
        return(
            <>
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