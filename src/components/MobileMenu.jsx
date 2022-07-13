import React from 'react'
import NavLinks from './utils/NavLinks'
import { IoMdClose } from 'react-icons/io'
import styled from 'styled-components'

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <Wrapper>
      {' '}
      <aside className={`sidebar ${isOpen ? 'showSidebar' : ''}`}>
        <button className="close-btn" onClick={toggle}>
          <IoMdClose />
        </button>
        <div className="sidebar-container">
          <NavLinks styleClass="sidebar-links"></NavLinks>
        </div>
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;


  .sidebar-container li {
    list-style: none;
    margin-bottom: 1rem;
    
    a {
      font-size: 2rem;
    }
  }
`

export default MobileMenu
