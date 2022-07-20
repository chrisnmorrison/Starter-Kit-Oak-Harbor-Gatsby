import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const Portfolio = () => {
  return (
    <Wrapper>
      <section id="portfolio">
        <div className="container">
          <div className="row">
            <StaticImage
              src="../../assets/portfolio/port1.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            />
           <StaticImage
              src="../../assets/portfolio/port2.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            />
            <StaticImage
              src="../../assets/portfolio/port3.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            />
          </div>
          <div className="row">
          <StaticImage
              src="../../assets/portfolio/port4.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            />
            <StaticImage
              src="../../assets/portfolio/port5.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            />
            <StaticImage
              src="../../assets/portfolio/port6.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            />
          </div>
          <div className="row">
          <StaticImage
              src="../../assets/portfolio/port7.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            />
           <StaticImage
              src="../../assets/portfolio/port8.jpg"
              placeholder="blurred"
              layout="fixed"
              width={420}
            /><StaticImage
            src="../../assets/portfolio/port9.jpg"
            placeholder="blurred"
            layout="fixed"
            width={420}
          />
          </div>
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.div`

.gatsby-image-wrapper{
  margin: 0 0.6875em;
}

.gatsby-image-wrapper img{
  height: auto;
  width: auto;
}

@media only screen and (max-width: 420px) {
 #portfolio .container .row picture img{
 }
 .gatsby-image-wrapper{
  width: 95vw !important;
  border-radius: 5px !important;
}

}

`

export default Portfolio
