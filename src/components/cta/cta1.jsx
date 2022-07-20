import React from 'react'

import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const CTA = () => {
  return (
    <Wrapper>
    <section id="cta">
      <div className="container">
        <h2 className="title">
          If you can dream it,<br/>we can build it!
        </h2>
        <p>
        Get your free quote today. We'll be happy to schedule a free consultation.
        </p>
        <a href="/contact.html" className="button-solid">
          Contact Us
        </a>
      </div>
      <StaticImage className='cta-img' src='../../assets/cta-img.jpg' layout="fullWidth"/>

    </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.gatsby-image-wrapper{
  margin: 0;
}
`

export default CTA
