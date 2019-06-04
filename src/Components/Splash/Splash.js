import React from 'react'
import { Link } from 'react-router-dom'



export const Splash = () => {



  return (
    <div>
      <h1>Out of Towner</h1>
      <Link to= '/welcome'>
      <button>Hello</button>
      </Link>
      <p>You must be 21 years old to view this page.....</p>
    </div>
  )
}