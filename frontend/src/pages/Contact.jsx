import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Contact = () => {
  const [data, setData]= useState([])

  const getContactDetails = async ()=>{
    const response = await axios.get("http://localhost:3000/contact")
    setData(response.data)
  
    
  }
  useEffect(()=>{
    getContactDetails()
  },[])
    console.log(data)
  return (
    <div>
      <h1>Contact</h1>
      <div>
      <p>message: {data.message}</p>
      <p>name: {data.email}</p>
      <p>email: {data.phone}</p>
      <p>address: {data.address}</p>
      </div>

    </div>
  )
}

export default Contact