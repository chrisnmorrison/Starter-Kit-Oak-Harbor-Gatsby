import React from 'react'
import SocialLinks from './socialLinks'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import SidebarCard from './SidebarCard'
import './sidebar-styles.scss'

const About = () => {
  return (
    <SidebarCard>
      <Wrapper>
        <h2>Who We Are</h2>
        <StaticImage
          src="../../assets/logo_transparent.png"
          layout="fixed"
          width={100}
          height={100}
          alt="author"
          className="img"
        />
        <p>Find the best free educational resoures on your favourite topic.</p>
        <p>Open Education is free and open-source forever.</p>
        <SocialLinks className="sidebar-icons" />
      </Wrapper>
    </SidebarCard>
  )
}

const Wrapper = styled.div`
  text-align: center;
  p {
    color: var(--grey-5);
  }
  .img {
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`
export default About
