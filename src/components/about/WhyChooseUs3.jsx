import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'

const WhyChooseUs3 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="flex-group">
          <div className="contact-info">
            <h2>Why Terra Landscaping?</h2>
            <div className="contact-info-group">
              <StaticImage
                className="why-icon"
                src="../../assets/service.png"
                alt="Service icon"
                width={100}
                placeholder="blurred"
                loading="lazy"
              />
              <div className="contact-text">
                {' '}
                <h3>High-Quality Service</h3>
                <p>
                  Our friendly staff are ready to take your call and discuss
                  your dream project.
                </p>
              </div>
            </div>
            <div className="contact-info-group">
              <StaticImage
                className="why-icon"
                src="../../assets/award.png"
                alt="Medal icon"
                width={100}
                placeholder="blurred"
                loading="lazy"
              />
              <div className="contact-text">
                <h3>North Grenville's Favourite Landscapers</h3>
                <p>
                  Our decades of experience can be seen all around North
                  Grenville.
                </p>
              </div>
            </div>
          </div>
          <StaticImage
            src="../../assets/portfolio/port13.jpg"
            alt="Closeup of garden and steps"
            className="why-pic"
            placeholder="blurred"
            loading="lazy"
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .flex-group {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 50px;
    height: auto;
  }

  .contact-info {
    padding: 0;

    h2 {
      font-size: 2.2rem;
    }
  }

  .contact-text {
    h3 {
      margin-bottom: 0.25rem;
    }
  }

  .contact-info-group {
    height: auto;
    margin-bottom: 90px;
    margin-top: 50px;
    position: relative;
    width: 70%;
    display: flex;
  }

  .contact-info-group svg {
    width: 50px;
    height: auto;
    float: left;
    margin: 0 25px 150px 0;
  }

  .why-icon {
    margin-right: 1rem;
  }

  .why-pic {
    width: 600px;
    height: auto;
    padding-top: 0px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1244px) {
    .why-pic {
      width: 400px !important;
    }
  }

  @media screen and (max-width: 900px) {
    .flex-group {
      flex-direction: column;
    }
    .contact-info-group {
      max-width: 100%;
      height: auto;
    }
  }
`

export default WhyChooseUs3
