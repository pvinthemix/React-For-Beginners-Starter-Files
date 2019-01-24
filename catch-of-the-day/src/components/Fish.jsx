import React, { Component } from "react";
import  { formatPrice } from "../helpers";


class Fish extends Component {
  

  render() {
    const {image, name, price, desc, status} = this.props.details;


    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name}/>
        <h3 className="fish-name">
          {name} 
          <span className="formatPrice">{formatPrice(price)}</span> 
        </h3>
        <p className="des">{desc}</p>
        <button onClick={() => this.props.addToOrder(this.props.index)} disabled={!isAvailable}>
          {isAvailable ? 'Add to Order' : 'Sold Out'}
        </button>
      </li>
    )
  }
}

export default Fish;
