import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { CartItemType } from './App'

type Props = {
  cartItems: CartItemType[]
  addToCart: (clicked: CartItemType) => void
  removeItem: (id: number) => void
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeItem }) => {
  const calcTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0)

  return (
    <Wrapper>
      <h2>shopping cart</h2>
      {cartItems.length < 1 && <p>your cart is empty</p>}
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeItem={removeItem}
          />
        )
      })}

      <h2>Total: ${calcTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 500px;
  padding: 2em;
`

export default Cart
