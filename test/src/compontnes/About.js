import React from 'react'
import { Link } from 'react-router-dom'
import "../../src/index.css"

const About = () => {
  return (
    <div>
        <h2>About</h2>
        <Link to="/" className='btn '>
            Ana Seyfeye Geri Don
        </Link>
    </div>
  )
}

export default About