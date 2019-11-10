import React, { useContext } from 'react'
import { Col, Image, Row } from 'react-bootstrap'

const CartItem = ({ item }) => {
  return (
    <Row className="mb-2">
      <Col sm={3}>
        <Image src={item.img} rounded fluid="false" />
      </Col>
      <Col sm={5} className="align-self-center">
        {item.title}
      </Col>
      <Col sm={4} className="align-self-center">
        price ：{item.price}
      </Col>
    </Row>
  )
}

export default CartItem
