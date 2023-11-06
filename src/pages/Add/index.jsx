import React, { useState } from 'react'
import "./style.css"
import axios from 'axios';

const Add = ({userData}) => {
    const [data,setData]=useState(
        {
            name:"",
            email:"",
            phone:""
        }
    );
    const addSupplier = (e) =>{
        e.preventDefault()
        console.log(data);
        
     axios.post("https://jsonplaceholder.typicode.com/users", data)
     .then(res=>{
        setData(res.data)
        userData=(res.data)
        setData(
            {
                name:"",
                email:"",
                phone:""
            } )})
    }
   
      
  return (
    <div>
       
        
     <div className="update-details">
           <h2>Add User</h2>
        <div className="update-modal-item">
            <form onSubmit={addSupplier} className="update-form">
            <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type="text" className="form-control" value={data.name} onChange={(e)=>setData({...data, name:e.target.value})} />
                <label htmlFor="email"> User Email</label>
                <input type="email" className="form-control" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} />
                <label htmlFor="phonenumber"> User Phone</label>
                <input type="text" className="form-control" value={data.phone} onChange={(e)=>setData({...data, phone:e.target.value})}  />
            </div>
            <button type="submit"  className="btn btn-secondary" >Add</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Add