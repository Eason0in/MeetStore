import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const API_URL = 'http://localhost:3001/'

const PayForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const hisotry = useHistory()
  const handleSubmit = e => {
    e.preventDefault()
    axios.post(API_URL + 'orders', { name, email, address }).then(res => {
      if (res.status === 201) hisotry.push('/receipt')
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
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
      <Form.Group controlId="address">
        <Form.Label>地址</Form.Label>
        <Form.Control
          type="text"
          placeholder="台北市信義區市府路1號"
          value={address}
          onChange={e => setAddress(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="info" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default PayForm
