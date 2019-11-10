import React, { useState } from 'react'
import axios from 'axios'
import ComplaintForm from './ComplaintForm'
import ComplaintResult from './ComplaintResult'

const API_URL = 'http://localhost:3001/'

const Complaint = () => {
  const [isFinished, setFinish] = useState(false)
  const handleSubmit = (e, name, email, textarea) => {
    e.preventDefault()
    axios.post(API_URL + 'complaint', { name, email, textarea }).then(res => {
      if (res.status === 201) setFinish(true)
    })
  }
  return isFinished ? <ComplaintResult /> : <ComplaintForm handleSubmit={handleSubmit} />
}

export default Complaint
