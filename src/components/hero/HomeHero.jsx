import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <HeroStyles>
      <section id="hero">
        <div className="hero-content">
          <div className="heroText">
            <h1 id="home-h">
              Terra <br /> Landscaping
            </h1>
            <p>
              We are a North Grenville Landscaping Company that creates{' '}
              <strong>beautiful</strong> outdoor living spaces, using nature to{' '}
              <strong>inspire</strong> and the talent of our
              team to build your vision. This is <strong>your space</strong>.
              What do you see?
            </p>
            <Link className="button-solid" href="/contact" target="_blank">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </HeroStyles>
  )
}

export const HeroStyles = styled.header``

export default Hero
