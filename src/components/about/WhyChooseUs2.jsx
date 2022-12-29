import React from 'react'
import styled from 'styled-components'
import { BiPackage } from 'react-icons/bi'
import {
  IoCalendarOutline,
  IoCheckmarkDoneOutline,
  IoConstructOutline,
  IoFlagOutline,
  IoPeopleOutline,
  IoContractOutline,
  IoShieldCheckmarkOutline,
} from 'react-icons/io5'
import leaf from '../../assets/leaf-four-1.png'

const icons = [
  IoConstructOutline,
  IoCheckmarkDoneOutline,
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
  IoCalendarOutline,
  IoFlagOutline,
  IoContractOutline,
  BiPackage,
]

const items = [
  {
    title: 'Experienced',
    text:
      "With 500+ large projects complete, we're always looking for a new challenge.",
  },
  {
    title: 'Full Service',
    text:
      'We pride ourselves as a full-service landscape construction company.',
  },
  {
    title: 'Friendly',
    text:
      'Quick response times and a friendly greeting to ensure your needs are met quickly.',
  },
  {
    title: 'Professional',
    text:
      "A company that values customer service and quality workmanship, we're the best in our industry.",
  },
  {
    title: 'Dependable',
    text:
      'We have a team of experienced professionals who will take care of everything for you.',
  },
  {
    title: 'Licensed',
    text:
      "We're fully licensed and insured, so you can rest assured that your property is in good hands.",
  },
  {
    title: 'Experienced',
    text:
      "We've been strongly operating in the North Grenville area for 30+ years.",
  },
  {
    title: 'Quality Material',
    text: 'Ensuring your project is long lasting and sturdy.',
  },
]

const WhyChooseUs2 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row first">
          <div className="col-12 col-md-6 row title-row">
            <div className="title">
              <h5>Expert Landscapers</h5>
              <h3>Trusted in North Grenville</h3>
            </div>{' '}
            <div className="title-icon-container">
              <img className="title-icon" src={leaf} alt='leaf icon in title'/>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p className="first-right">
              Terra is committed to promising the best quality of work and
              highest quality materials for our clients, and helping our clients
              achieve the outdoor space of their dreams.
            </p>
          </div>
        </div>
        <div className="second">
          <div className="row clearfix">
            {items.map((item, i) => {
              const Icon = icons[i]

              return (
                <div className="why-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="icon-box">
                      <Icon className="card-icon" />
                    </div>
                    <div className="card-text">
                      <h5 className="card-title">{item.title}</h5>
                      <div className="text">{item.text}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 5rem;

  .first {
    margin-top: 5rem;
    margin-bottom: 3.5rem;
    align-items: center;
  }

  .title-row {
    align-items: center;
  }

  .title {
    text-align: right;

    h5 {
      color: var(--primary);
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.9rem;
    }
  }

  .title-icon-container {
    position: relative;
    height: 100%;
    margin-left: 1.2rem;
  }

  .title-icon-container::before {
    position: absolute;
    /* right: -1rem; */
    top: -8px;
    content: '';
    background-color: var(--primary);
    height: 110%;
    width: 2.2rem;
    z-index: -5;
  }

  .inner-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 3rem;
    position: relative;
    text-align: center;
    background: #ffffff;
    border-radius: 0.5em;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1);

    margin-bottom: 30px;
  }
  .icon-box {
    position: relative;
    top: 0;
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto 0;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .icon-box::before {
    content: '';
    left: 8px;
    height: 100%;
    width: 100%;
    background: var(--primary);
    position: absolute;
    z-index: -5;
  }

  .card-title {
    color: #393939;
    font-size: 120%;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .why-block .more-link a {
    background: var(--primary);
  }
  .why-block .more-link a {
    color: #ffffff;
  }
  .why-block .more-link a {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
  }

  .card-icon {
    background-color: var(--primary);
    padding: 1.3rem;
    border-radius: 1rem;
    width: 90px;
    height: auto;
    color: white;
  }

  .card-text {
    height: 8.5rem;
  }

  @media screen and (max-width: 1378px) {
    .first {
      margin: 0 auto 3.5rem;
    }

    background: #ffffff;
    border-radius: 7px;
    justify-content: space-between;
    align-items: center;
    /* box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.1); */
  }
  .why-block .icon-box {
    position: relative;
    top: 0;
    display: block;
    width: 90px;
    height: 90px;
    margin: 0 auto 0;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 1148px) {
    .title-icon-container {
      display: none;
    }

    @media screen and (max-width: 767px) {
      .title {
        text-align: center;
        margin: 0 auto;
      }

      .card-text {
        height: 6.5rem;
      }

      .first-right {
        text-align: center;
      }
    }
    @media screen and (max-width: 349px) {
      .card-text {
        height: 8.5rem;
      }
    }
  }
`

export default WhyChooseUs2
