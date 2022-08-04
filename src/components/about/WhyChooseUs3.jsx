import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import award from '../../assets/award.png'
import service from '../../assets/service.png'

const WhyChooseUs3 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="why-section">
          <div className="why-info">
            <h2>Why Terra Landscaping?</h2>
            <div className="why-info-group">
              <img
                className="why-icon"
                src={service}
                alt="Service icon"
                placeholder="blurred"
                loading="lazy"
              />
              <div className="why-text">
                {' '}
                <h3>High-Quality Service</h3>
                <p>
                  Our friendly staff are ready to take your call and discuss
                  your dream project. We design and install a full range of
                  custom Gazebos, Cabanas, Pergolas, Arbors, Sheds, Decks,
                  Fences and more, using the highest quality materials.
                </p>
              </div>
            </div>
            <div className="why-info-group">
              <img
                className="why-icon"
                src={award}
                alt="Medal icon"
                placeholder="blurred"
                loading="lazy"
              />
              <div className="why-text">
                <h3>North Grenville's Favourite Landscapers</h3>
                <p>
                  Our decades of experience can be seen all around North
                  Grenville. We are available by appointment at your home to
                  give you the advice you need. Whatever your
                  budget, we can develop and execute a landscape plan for you.
                  Contact us today for a consultation.
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
  .why-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 50px;
    padding-top: 30px;
    height: auto;
  }

  .why-info {
    padding: 0;

    h2 {
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    }
  }

  .why-text {
    h3 {
      margin-bottom: 0.25rem;
    }
  }

  .why-info-group {
    height: auto;
    margin-bottom: 90px;
    margin-top: 50px;
    position: relative;
    width: 80%;
    display: flex;
    align-items: center;
  }

  .why-icon {
    margin-right: 1rem;
    width: 100px;
    height: 88px;
  }

  .why-pic {
    width: 100%;
    height: auto;
    padding-top: 0px;
    margin: 0 auto;
  }

  @media screen and (max-width: 1244px) {
    .why-info-group {
      width: 85%;
    }

    .why-info h2{
      text-align: center;
    }

    .why-pic {
      display:none;
    }

    .why-icon {
      width: 130px;
      height: auto;
    }
  }

  @media screen and (max-width: 900px) {
    .why-section {
      flex-direction: column;
    }
    .why-info-group {
      max-width: 100%;
      height: auto;
      margin: 0 auto 2.5rem;
      flex-direction: column;
      text-align: center;
    }

    .why-pic {
      width: 90vw;
    }

    .why-icon {
      width: 100px;
      margin: 0 auto 1rem;
    }
    .why-info {
      padding: 0;

      h2 {
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 468px) {
    .why-pic {
      width: 90vw;
    }
  }
`

export default WhyChooseUs3
