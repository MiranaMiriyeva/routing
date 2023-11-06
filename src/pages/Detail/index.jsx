import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Detail = () => {
    const [data,setData] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
         .then(res => setData(res.data))
    },[id])

  return (
    <div>
        <h1>{data.name}</h1>
         <p>City: {data.address?.city}</p>
         <p>Website: {data.website}</p>
         <p>Company: {data.company?.name}</p>
    </div>
  )
}

export default Detail