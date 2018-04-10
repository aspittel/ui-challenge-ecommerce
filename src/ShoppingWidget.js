import React, { Component } from 'react'
import './ShoppingWidget.css'

class ShoppingWidget extends Component {
  render () {
    return (
      <div className='card'>
        <img src={this.props.picture} />
        <div className='description'>
          <h3 className='item-name'>{this.props.title}</h3>
          <h4 className='item-price'>${this.props.price}.00</h4>
        </div>
        <button style={{ backgroundColor: this.props.buttonColor }}>Add To Basket</button>
      </div>
    )
  }
}

export default ShoppingWidget
