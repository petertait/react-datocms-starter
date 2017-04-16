import React from 'react'
import { Link } from 'react-router'

const Header = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
    </ul>
  </nav>
)

export default Header
