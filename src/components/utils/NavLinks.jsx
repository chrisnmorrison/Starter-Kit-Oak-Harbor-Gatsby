import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import NavLink from './NavLink'
import styled from 'styled-components'

const NavLinks = () => {
  return (
    
      <BrowserRouter>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/reviews">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </BrowserRouter>
  )
}


export default NavLinks
