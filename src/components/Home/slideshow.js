import React from 'react';
import { Slide } from 'react-slideshow-image';



class Slideshow extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <img src={this.props.data[0]} alt= {this.props.data[3]}/>
          </div>
          <div className="each-slide">
            <img src={this.props.data[1]} alt= {this.props.data[4]}/>
          </div>
          <div className="each-slide">
              <img src={this.props.data[2]} alt= {this.props.data[5]}/>
          </div>
        </Slide>
      </div>
    )
        }
};


export default Slideshow;
