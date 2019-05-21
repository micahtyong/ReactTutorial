import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className = "Header">
    <div className = "HeaderGroup">
      <img src = {require('../images/Icon.png')} 
      width = "30"></img>
      <Link to = "/work">Work</Link>
      <Link to = "/about">About</Link>
      {/* <Link to = "/about"><button>About</button></Link> */}
    </div>
  </div>
)

export default Header
