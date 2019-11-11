import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CartContext } from '../../contexts/CartContext'
import { Col, Image, Row, Button } from 'react-bootstrap'

const CartItem = ({ item }) => {
  const { removeCartItem } = useContext(CartContext)
  return (
    <Row className="mb-2">
      <Col sm={3}>
        <Image src={item.img} rounded fluid="false" />
      </Col>
      <Col sm={4} className="align-self-center">
        {item.title}
      </Col>
      <Col sm={3} className="align-self-center">
        $ {item.price}
      </Col>
      <Col sm={2} className="align-self-center">
        <Button type="button" variant="outline-danger" onClick={() => removeCartItem(item.id)}>
          <FontAwesomeIcon icon="trash" />
        </Button>
      </Col>
    </Row>
  )
}

export default CartItem
