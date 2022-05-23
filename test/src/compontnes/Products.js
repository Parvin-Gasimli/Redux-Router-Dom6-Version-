import React from 'react'
import { Link } from 'react-router-dom'


const Products = () => {
  return (
    <div>
        <h3>Products</h3>
        <Link to="/about" className='btn btn-primary'>
            About Page
        </Link>
    </div>
  )
}

export default Products