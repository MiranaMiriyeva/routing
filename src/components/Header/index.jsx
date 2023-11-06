import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Header = () => {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/list">Users</Link>
        <Link to="/add">Add</Link>
    </div>
  )
}

export default Header
