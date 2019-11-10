import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'
import { Container, Row, Col } from 'react-bootstrap'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const { products } = useContext(ProductContext)
  console.log(products)
  return (
    <div className="product-list mt-3">
      <Container>
        <Row>
          {products.map(product => (
            <Col
              md="auto"
              className="mb-4 text-decoration-none text-dark"
              key={product.id}
              as={Link}
              to={'/productdetail/' + product.id}
            >
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductList
