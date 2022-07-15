import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Hero = () => {


  return (
    <HeroStyles>
      <section id="hero">
            <div className="hero-content">
                <div className="heroText">
                    <h1 id="home-h">Main Keywords of What They Do, And Location If Needed</h1>
                    <p>
                        Talk about the other services they do with keywords and locations where they serve.  Try to make this 2-3 lines tall.
                    </p>
                    <Link className="button-solid" href="/contact" target="_blank">
                        Main Call To Action
                    </Link>
                </div>
            </div>
        </section>
     
    </HeroStyles>
  )
}

export const HeroStyles = styled.header`
  
`

export default Hero
