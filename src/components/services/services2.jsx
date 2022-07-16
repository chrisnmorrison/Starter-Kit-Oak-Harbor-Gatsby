import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import check from '../../assets/check.svg'

const Service = () => {
  const allServices = [
    'Terrain Modification',
    'Custom Gardens',
    'Property Maintenance',
    'Special Event Plants',
    'Pathways & Patios',
    'Hedges',
  ]

  return (
    <Wrapper className="container">
      <div className="service-text">
        <h2>We offer Hard & Soft Landscape Solutions</h2>
        <p>
          Whether you are looking for plants, trees, shrubs or garden
          accessories, at Terra, we've got you covered. Established in 1911, we
          supply top quality garden plants and accessories throughout North
          Grenville. We can also give you expert advice and guidance on how to
          care for your plants throughout the year.
        </p>
        <p style={{ marginBottom: '.5rem' }}>Our Primary Services include:</p>
        <ul>
          {allServices.map((service, i) => {
            return (
              <li key={i}>
                <img
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={check}
                  alt="check mark"
                  width={20}
                  height={20}
                />
                <span>{service}</span>
              </li>
            )
          })}
        </ul>
        <p>Interested in a service not on this list?</p>
        <p> React out to us any time - let's discuss your custom project.</p>
        <Link to="/contact" className="button-solid service-button">
          Get Your Free Estimate
        </Link>
      </div>
      <div className="service-card card1">
        <div className="card-content">
          <StaticImage src="../../assets/sustainable.png" width={80} />
          <h3>
            Landscape
            <br aria-hidden="true" />
            Design
          </h3>
        </div>
      </div>
      <div className="service-card card2">
        <div className="card-content">
          <StaticImage src="../../assets/grass.png" width={80} />
          <h3>
            Landscape
            <br aria-hidden="true" /> Management
          </h3>
        </div>
      </div>
      <div className="service-card card3">
        <div className="card-content">
          <StaticImage src="../../assets/grow-plant.png" width={80} />
          <h3>
            Plant & Tree
            <br aria-hidden="true" /> Solutions
          </h3>
        </div>
      </div>
      <div className="service-card card4">
        <div className="card-content">
          <StaticImage src="../../assets/planter.png" width={80} />
          <h3>
            Landscape
            <br aria-hidden="true" /> Enhancements
          </h3>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  height: 100%;
  margin: 5rem auto;
  grid-template-areas:
    'text card1 card2'
    'text card3 card4';
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 2.5fr 1fr 1fr;

  .card-content {
    margin: auto;
  }

  .service-text {
    grid-area: text;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem;

    h2 {
      font-size: 36px;
    }

    h2,
    p {
      margin-bottom: 2rem;
    }
  }

  .service-button {
    display: inline-block;
    width: 16rem;
    padding: 0 2.14285714em;
  }

  .service-card {
    display: flex;
    flex-direction: column;
    padding: 0 0.2rem 2rem 0.2rem;
    border: 1px solid #e6e6e6;
    text-align: center;
    margin: 2.5rem;
  }

  .card1 {
    grid-area: card1;
  }
  .card2 {
    grid-area: card2;
  }
  .card3 {
    grid-area: card3;
  }
  .card4 {
    grid-area: card4;
  }

  h3 {
    font-size: 24px;
    font-weight: 300;
    margin: 0 1rem;
  }

  .gatsby-image-wrapper {
    margin: 2rem auto;

    img {
      height: auto;
      width: auto;
      margin: 0 auto;
    }
  }

  ul {
    list-style: none;
    margin-bottom: 1.5rem;

    li {
      margin-bottom: 0.2rem;
    }

    img {
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 1476px) {
    .service-card {
      margin: 0.4rem;
    }

    .card1,
    .card2 {
      margin-top: 20rem;
    }

    .card3,
    .card4 {
      margin-bottom: 20rem;
    }

    h3 {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 1023px) {
    display: grid;
    height: 100%;
    margin: 3rem auto;
    grid-template-areas:
      'card1 card2'
      'card3 card4'
      'text text';
    grid-template-rows: 0.2fr 0.2fr 1fr;
    grid-template-columns: 1fr 1fr;

    .card1,
    .card2 {
      margin-top: 2rem;
    }

    .card3,
    .card4 {
      margin-bottom: 2rem;
    }
  }

  @media screen and (max-width: 645px) {
    .service-text {
      margin: 2rem 1rem;
    }

    h3 {
      font-size: 17px;
    }

    .service-card {
      margin: 1rem;
    }

    .gatsby-image-wrapper img {
      width: 90%;
    }
  }

  @media screen and (max-width: 447px) {
    grid-template-rows: 0.1fr 0.1fr 1fr;

    h3 {
    }

    .service-card {
      margin: 0 0.4rem;
      border: none;
    }

    .gatsby-image-wrapper img {
      width: 70%;
    }
  }

  @media screen and (max-width: 362px) {
    grid-template-rows: 0.1fr 0.1fr 1fr;

    h3 {
      margin: 0 0.2rem;
    }

    .service-card {
      margin: 0.7rem;
      border: none;
    }

    .gatsby-image-wrapper img {
      width: 70%;
    }
  }
`

export default Service
