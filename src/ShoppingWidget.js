import React, { Component } from 'react'
import './ShoppingWidget.css'

const ShoppingButton = ({ inCart, buttonColor, toggleInCart }) => {
  let content = inCart ? (
    <span>
      <i className='fas fa-cart' />
      &nbsp;In Cart
    </span>

  ) : (
    <span>
      <i className='fas fa-cart-plus' />
      &nbsp;Add To Basket
    </span>
  )

  return (
    <button
      style={{ backgroundColor: buttonColor }}
      onClick={toggleInCart}
    >
      {content}
    </button>
  )
}

class ShoppingWidget extends Component {
  constructor () {
    super()

    this.state = {
      inCart: false
    }
  }

  toggleInCart () {
    this.setState(prevState => ({
      inCart: !prevState.inCart
    }))
  }

  render () {
    return (
      <div className='card'>
        <img src={this.props.picture} alt={this.props.title} />
        <div className='description'>
          <h3 className='item-name'>{this.props.title}</h3>
          <h4 className='item-price'>${this.props.price}.00</h4>
        </div>
        <ShoppingButton
          inCart={this.state.inCart}
          toggleInCart={this.toggleInCart.bind(this)}
          buttonColor={this.props.buttonColor}
        />
      </div>
    )
  }
}

export default ShoppingWidget
