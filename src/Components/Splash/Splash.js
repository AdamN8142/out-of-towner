import React from 'react'
import { Link } from 'react-router-dom'
import './Splash.css'



export const Splash = () => {



  return (
    <div className= 'splash'>
      <h1 className='splash-header'>Out of Towner</h1>
      <p className='twenty-one-text'>You must be 21 years of age or older to view this page...</p>
      <div className='a'>
        <Link to= '/welcome'>
          <button className='verify-age-button'>I AGREE</button>
        </Link>
      </div>
    </div>
  )
}