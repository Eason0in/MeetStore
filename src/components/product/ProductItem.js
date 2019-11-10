import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ProductItem = ({ product }) => {
  const handleClick = e => {
    e.preventDefault()
    alert('click')
  }
  return (
    <div className="product-item">
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Img variant="top" src={product.img} className="mb-2" />
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button onClick={handleClick} variant="outline-danger">
            加入購物車
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductItem
