import React, { Component } from "react";
import { formatPrice } from "../helpers";

class Inventory extends Component {

  renderOrder = (order) => {
    const fish = this.props.fishes[order];
    const count = this.props.order[order];
    return <li>
      {count} lbs {fish.name} {formatPrice(count * fish.price)}
    </li>
  }

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((previousTotal, order) => {
      const fish = this.props.fishes[order];
      const count = this.props.order[order];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable) {
        return previousTotal + (count * fish.price)
      }
      return previousTotal;
    }, 0);

    return <div className="order-wrap">
        <h2>Order</h2>
        <ul>{orderIds.map(this.renderOrder)}</ul>
        Total:
        <strong>{formatPrice(total)}</strong>
      </div>;
  }
}

export default Inventory;