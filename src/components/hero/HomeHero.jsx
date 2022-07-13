import React from 'react'
import styled from 'styled-components'
import landing from '../../assets/hero.jpg'
import { StaticImage } from 'gatsby-plugin-image'

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
                    <a className="button-solid" href="/contact.html" target="_blank" rel="noopener">
                        Main Call To Action
                    </a>
                </div>
            </div>
            <picture>
                <source media="(max-width: 600px)" srcset={landing}/>
                <source media="(min-width: 601px)" srcset={landing}/>
                <img aria-hidden="true" decoding="async" src={landing} alt="new home" width="275" height="132"/>
             </picture>
        </section>
     
    </HeroStyles>
  )
}

export const HeroStyles = styled.header`
  
`

export default Hero
