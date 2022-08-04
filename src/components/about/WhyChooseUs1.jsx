import React from 'react'
import styled from 'styled-components'
import house from '../../assets/icons/happy-house.png'
import supplier from '../../assets/icons/supplier.png'
import lawn from '../../assets/portfolio/port12.jpg'

const Vision = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <img
            src={lawn}
            alt="nicely trimmed lawn"
            class="why-mob-img"
            loading="lazy"
          />
        </div>
        <div className="row">
          <div className="col grid">
            <div className="grid-item grid-item-title">
              <div className="title">
                <h2>We know <br aria-hidden='true'/>Landscaping</h2>
              </div>
            </div>

            <div className="grid-item grid-item-right grid-item-vision">
              <img
                src={supplier}
                alt="Icon of local business"
                className="about-icon"
              />

              <div className="vision">
                <h3>Local Business in North Grenville</h3>
                <p>
                  Born and raised in Kemptville, Terra is a full-service grounds
                  care company with a passion to beautify North Grenville. Our
                  established systems allow us to deliver industry-leading lawn
                  care and landscape solutions to commercial and residential
                  clients.
                </p>
              </div>
            </div>

            <div className="grid-item grid-item-right grid-item-mission">
              <img
                src={house}
                alt="Icon of local business"
                className="about-icon"
              />

              <div className="mission">
                <h3>Family-Owned</h3>
                <p>
                  Built on a family tradition of caring, we are driven by a
                  passion to exceed customer expectations and consistently
                  deliver client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .title {
    font-size: 2rem;
    margin: 0 auto;
    text-align: center;
  }

  .why-mob-img {
    display: none;
  }

  .about-icon {
    width: 3rem;
    height: auto;
    margin-right: 2rem;
  }

  .col {
    display: grid;
    width: 100%;
    min-height: 450px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title vision'
      'title mission';
    border-right: 1px solid var(--primary);
    border-top: 1px solid var(--primary);
    border-bottom: 1px solid var(--primary);
    /* border-left: 1px solid var(--primary); */
    padding: 0;
    margin-bottom: 5rem;
  }

  .grid-item-right {
    border-left: 1px solid var(--primary);
  }

  .grid-item-title {
    grid-area: title;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .grid-item-vision {
    grid-area: vision;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
    border-bottom: 1px solid var(--primary-light);
  }

  .grid-item-mission {
    grid-area: mission;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .grid-item {
    padding: 2.5rem 2.5rem 2.5rem 2rem;
  }

  @media screen and (max-width: 1029px) {
    .vision p,
    .mission p {
      font-size: 90%;
    }
  }

  @media screen and (max-width: 767px) {
    text-align: center;
    .why-mob-img {
      width: 70vw;
      margin: 0 auto 1rem;
      text-align: center;
      display: block;
    }

    .about-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }

    .col {
      display: grid;
      width: 100%;
      min-height: 450px;
      grid-template-rows: 0.5fr 1fr 1fr;
      grid-template-columns: 1fr;
      grid-template-areas:
        'title'
        'vision'
        'mission';
      padding: 0;
      margin-bottom: 2rem;
    }
    .grid-item-right,
    .col,
    .grid-item-vision {
      border: none;
    }
    .grid-item {
      padding: 0;
      flex-direction: column;
      max-width: 90vw;
    }

    .grid-item-right {
      margin-bottom: 1.25rem;
    }

    .title {
      margin: 0 auto 1.5rem;
    }

    h3 {
      position: relative;
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    .vision h3::after {
      position: absolute;
      content: '';
      background-color: var(--primary-light);
      opacity: 0.6;
      width: 104%;
      height: 6px;
      left: 0;
      bottom: 4px;
      z-index: -1;
    }

    .mission h3::after {
      position: absolute;
      content: '';
      background-color: var(--primary-light);
      opacity: 0.6;
      width: 109%;
      height: 6px;
      left: 0;
      bottom: 4px;
      z-index: -1;
    }
  }

  @media screen and (max-width: 463px) {
    .col {
      grid-template-rows: 0.3fr 1fr 1fr;
    }

    h2 {
      font-size: 100%;
    }
    h3 {
      font-size: 96%;
    }

    .why-mob-img {
      width: 85vw;
    }

    .vision h3::after,
    .mission h3::after {
      height: 4px;
    }
  }
`

export default Vision
