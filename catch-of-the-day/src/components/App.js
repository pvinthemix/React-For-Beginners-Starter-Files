import React, { Component } from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends Component {
  constructor(){
    super()
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes
    })
  };

  loadSamples = () => {
   this.setState({
     fishes: sampleFishes
    })
  };

  addToOrder = (fish) => {
    const order = {...this.state.order};
    order[fish] = order[fish] + 1 || 1;
    this.setState({
      order: order
    })
  }

  render() {
    return <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(fish => {
              return <Fish key={fish} index={fish} details={this.state.fishes[fish]} addToOrder={this.addToOrder}/>;
            })}
          </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>;
  }
}

export default App;