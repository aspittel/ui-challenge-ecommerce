import React, { Component } from 'react'
import './ShoppingWidget.css'

class ShoppingWidget extends Component {
  render () {
    return (
      <div className='card'>
        <img src={this.props.picture} />
        <div className='description'>
          <div className='item-name'>{this.props.title}</div>
          <div className='item-price'>${this.props.price}.00</div>
        </div>
        <button style={{ backgroundColor: this.props.buttonColor }}>Add To Basket</button>
      </div>
    )
  }
}

export default ShoppingWidget
