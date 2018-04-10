import React, { Component } from 'react'
import './App.css'
import ShoppingWidget from './ShoppingWidget'

import blueSucculent from './images/blue-succulent.jpg'
import goldCactus from './images/gold-cactus.jpg'
import whitePot from './images/white-pot.jpg'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <ShoppingWidget
          picture={blueSucculent}
          price={8}
          title={'Potted Succulent'}
          buttonColor={'#E0FFFC'}
        />
        <ShoppingWidget
          picture={goldCactus}
          price={10}
          title={'Potted Cactus'}
          buttonColor={'#EF9AC7'}
        />
        <ShoppingWidget
          picture={whitePot}
          price={7}
          title={'Potted Succulent'}
          buttonColor={'#C8B4E9'}
        />

      </div>
    )
  }
}

export default App
