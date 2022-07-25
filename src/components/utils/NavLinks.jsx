import React from 'react'
import { Link } from 'gatsby'

const Links = () => {
  return (
    <>
      <li>
        <Link activeClassName="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/about">
          About Us
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/projects">
          Projects
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/services">
          Services
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/reviews">
          Reviews
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/blog">
          Blog
        </Link>
      </li>
    </>
  )
}

export default Links
