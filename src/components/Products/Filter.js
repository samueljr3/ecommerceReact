import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className='filter'>
          <div className="filter-sort">Order{" "}
            <select value={this.props.sort} onChange={this.props.sortProducts}>
                <option>Latest</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
            </select></div>
          <div className="filter-price">Filter{" "}
            <select value={this.props.price} onChange={this.props.filterProducts}>
                <option value="">All</option>
                <option value="< 100">{`< 100`}</option>
                <option value="100 - 200">{`100 - 200`}</option>
                <option value="200 - 300">{`200 - 300`}</option>
                <option value="300 - 400">{`300 - 400`}</option>
                <option value="400 - 500">{`400 - 500`}</option>
                <option value="500 <">{`500 <`}</option>
            </select>
            </div>
      </div>
    )
  }
}
