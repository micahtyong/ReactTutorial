import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>Hi!<br />I’m Micah Yong</h1>
        <p>an LA-born, computer science student at the
         University of California, Berkeley.</p>
        <p>I love programming, designing, and grooving.</p>
        <Link to="/page-2/">See my work</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
