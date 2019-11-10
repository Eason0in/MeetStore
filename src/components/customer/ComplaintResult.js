import React from 'react'
import { Container, Media } from 'react-bootstrap'

const ComplaintResult = () => {
  return (
    <div className="finish mt-3">
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
            <h2 className="mb-3">客訴成功</h2>
            <h5>感謝您的來信，我們會盡快處理並跟您聯絡</h5>
          </Media.Body>
        </Media>
      </Container>
    </div>
  )
}

export default ComplaintResult
