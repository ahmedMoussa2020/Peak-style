import React from 'react'
import '../styles/CartDropDown.styles.scss'
import Button from '../components/Button'

const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropDown
