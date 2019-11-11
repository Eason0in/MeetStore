import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

const ComplaintForm = ({ handleSubmit }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [textarea, setTextarea] = useState('')
  return (
    <div className="complaint mt-3">
      <Container>
        <h2>有什麼建議想跟我們說的嗎?</h2>
        <Form onSubmit={e => handleSubmit(e, name, email, textarea)}>
          <Form.Group controlId="name">
            <Form.Label>姓名</Form.Label>
            <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="textarea">
            <Form.Label>詳細描述</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              value={textarea}
              onChange={e => setTextarea(e.target.value)}
              required
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default ComplaintForm
