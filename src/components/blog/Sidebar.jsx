import React from 'react'
import styled from 'styled-components'
import About from './About'
import SidebarCategories from './SidebarCategories'
import './sidebar-styles.scss'

const Sidebar = () => {
  return (
    <div className="col-lg-4 col-12">
      <SidebarStyles>
        <About />
        <SidebarCategories />
      </SidebarStyles>
    </div>
  )
}

const SidebarStyles = styled.aside`
  display: grid;
  grid-template-columns: 200px;
  justify-content: center;
  row-gap: 1rem;
  margin-top: 3.4rem;
  @media (min-width: 576px) {
    & {
      grid-template-columns: repeat(auto-fit, 92%);
      column-gap: 3rem;
    }
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: calc(100vw - 30px);

    margin-bottom: 3rem;
  }
`

export default Sidebar
