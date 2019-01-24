import React, { Component } from 'react';



class StorePicker extends Component {

myInput = React.createRef();

goToStore = (event) => {
  event.preventDefault()
  const storeName = this.myInput.current.value
  this.props.history.push(`/store/${storeName}`)
}

  render() {
    return (
      <form>
        <form className= "store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter A Store</h2>
          <input 
            type="text" 
            required placeholder='Store Name'
            ref={this.myInput}
            defaultValue='hello'
          />
          <button type="submit">Visit Store -></button>
        </form>
      </form>
    )
  }
} 

export default StorePicker;