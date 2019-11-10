import React, { useContext } from 'react'
import { Container, Media, Button } from 'react-bootstrap'
import { ProductContext } from '../../contexts/ProductContext'
import { Link } from 'react-router-dom'

const ProductDetail = props => {
  const { id } = props.match.params
  const { products } = useContext(ProductContext)
  const detailData = products.find(product => product.id.toString() === id)
  return (
    <div className="product-detail mt-3">
      <Container>
        <Button as={Link} to="/" variant="outline-secondary" className="d-inline-block mt-1">
          回到上一頁
        </Button>

        <Media className="mt-4">
          <img
            width={512}
            height={384}
            className="align-self-center mr-5"
            src={detailData.img}
            alt="Generic placeholder"
          />

          <Media.Body>
            <h5 className="mb-3">{detailData.title}</h5>
            <p>{detailData.subtitle}</p>
            <p className="mt-4 mb-5">{detailData.description}</p>
            <div className="button-group mt-5">
              <Button variant="outline-info" size="lg" className="mr-2">
                立即結帳
              </Button>
              <Button variant="outline-danger" size="lg">
                加入購物車
              </Button>
            </div>
          </Media.Body>
        </Media>
      </Container>
    </div>
  )
}

export default ProductDetail
