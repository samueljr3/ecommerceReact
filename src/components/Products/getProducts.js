import React from 'react';
import axios from 'axios';

export default class ProductList extends React.Component{
    state = {
        productData:[],
        type:"Reset",
    };
    
    componentDidMount(){
        axios.get("http://localhost:4000/api/Products").then(res =>{
            
            this.setState({productData: res.data});
        });
    }

    productFilter(type){
        //type = document.getElementById('UserSelect').value
        return () => {
            this.setState({type})
        }
    }
    // filterProducts= () =>  {
    //     this.setState({productData: this.state.defaultData});
    //     var UserOption = document.getElementById('UserSelect').value;
    //     console.log(UserOption);

    //     let filteredProducts = this.state.productData.filter(product => product.part_type === UserOption)

    //     this.setState({productData: filteredProducts});
    //   let filteredProducts = this.state.productData.filter(product => product.price > 400)
    //   this.setState({productData: filteredProducts});
     
    // }

    
    render(){
        
        
        return(
            <>
            <div className="filter">
                <select onChange={(event) => {this.handleOnChange(event, "price")}}>
                <option value="">All</option>
                <option value="< 100">{`< $100`}</option>
                <option value="100 - 200">{`$100 - $200`}</option>
                <option value="200 - 300">{`$200 - $300`}</option>
                <option value="300 - 400">{`$300 - $400`}</option>
                <option value="400 - 500">{`$400 - $500`}</option>
                <option value="500 <" >{`$500 <`}</option>
                </select>
                <select className="form-control" id="UserSelect">
                    <option value="RAM">RAM</option>
                    <option value="MOBO">MOBO</option>
                    <option value="GPU">GPU</option>
                </select>
                {/* <button onClick= {this.productFilter()}>bruh</button> */}
                <button onClick= {this.productFilter(500)}>{`$500 <`}</button>
                <button onClick= {this.productFilter("RAM")}>RAM</button>
                <button onClick= {this.productFilter("MOBO")}>MOBO</button>
                <button onClick= {this.productFilter("GPU")}>GPU</button>
                <button onClick= {this.productFilter("Reset")}>Reset</button>

            </div>
            <h2 className="product-title">Our Products</h2>
            <div className="product-grid">
                   
                {this.state.productData
                .filter((card)=>{
                    if(this.state.type === "Reset"){
                        return true
                    }
                    else{
                        return this.state.type === card.part_type
                    }
                }).map((card) => {
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
        )
    }
}