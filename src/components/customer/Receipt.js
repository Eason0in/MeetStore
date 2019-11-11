import React from 'react'
import { Container, Media } from 'react-bootstrap'

const Receipt = () => {
  return (
    <div className="receipt">
      <Container>
        <Media className="mt-4">
          <img
            width={512}
            height={384}
            className="align-self-center mr-5"
            src="/img/thank.png"
            alt="Generic placeholder"
          />

          <Media.Body>
            <h2 className="mb-3">購買成功</h2>
            <h5>感謝您的購物，我們將會盡快處理您的訂單</h5>
          </Media.Body>
        </Media>
      </Container>
    </div>
  )
}

export default Receipt
