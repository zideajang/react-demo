import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    const  navStyle = {
        color:'white'
    }
  return (
    <nav>
      <h3>Home</h3>
      <ul className="nav-link">
      <Link to="/about" style={navStyle}>
          <li>About</li>
      </Link>
      <Link to="/shop" style={navStyle}>
          <li>shop</li>
      </Link>
      </ul>
    </nav>
  )
}
