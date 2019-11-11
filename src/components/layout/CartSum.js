import React, { useContext } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { CartContext } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'

const CartSum = ({ isCart }) => {
  const { cartItems } = useContext(CartContext)
  const totalAmount = cartItems.length ? cartItems.map(item => item.price).reduce((prev, next) => prev + next) : 0
  return (
    <>
      <Row>
        <Col sm={8}>總計：</Col>
        <Col sm={4}>${totalAmount}</Col>
      </Row>
      {isCart ? (
        <Row className="mt-2">
          <Col sm={12}>
            <Button as={Link} to="/pay" variant="danger" block>
              結帳
            </Button>
          </Col>
        </Row>
      ) : (
        ''
      )}
    </>
  )
}

export default CartSum
