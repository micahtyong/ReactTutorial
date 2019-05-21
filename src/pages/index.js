import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Welcome to my website.</h1>
    <p>Hi, I’m Micah - an LA-born, 
      computer science student at the
      University of California, Berkeley.</p>
    <p>I love programming, designing, and grooving.</p>
    <Link to="/page-2/">See my work</Link>
  </div>
)

export default IndexPage
