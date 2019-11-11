import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartItem from '../layout/CartItem'
import { Container, Media, Button } from 'react-bootstrap'
import CartSum from '../layout/CartSum'
import PayForm from './PayForm'

const Pay = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="pay mt-3">
      <Container>
        {cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item} />) : ''}
        <CartSum isCart={false} />
        <PayForm />
      </Container>
    </div>
  )
}

export default Pay
