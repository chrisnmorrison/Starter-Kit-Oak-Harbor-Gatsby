import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
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
    text: 'Indignation and dislike mens who are so beguiled & the demoralized.',
  },
  {
    title: 'Full Service Company ',
    text:
      'We pride ourselves as a full-service landscape construction company and have a wide variety of services to choose from.',
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
    title: 'Licensed and Insured',
    text:
      "We're fully licensed and insured, so you can rest assured that your property is in good hands.",
  },
  {
    title: 'Experienced',
    text: 'Indignation and dislike mens who are so beguiled & the demoralized.',
  },
  {
    title: 'High Quality Material',
    text: 'Ensuring your project is long lasting and sturdy.',
  },
]

const WhyChooseUs2 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row first">
          <div className="col-12 col-md-6">
            <div className="title">
              <h5>Why Choose Us</h5>
              <h3>Trusted Experts in North Grenville</h3>
              <GatsbyImage
                className="title-icon"
                src="../../assets/leaf-four-1.png"
                layout="fixed"
                width={36}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <p>
              Terra is committed to promising the best quality of work and
              highest quality materials for our clients, and helping them
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
    margin-bottom: 2.5rem;
    align-items: center;
  }

  .title {
    text-align: right;

    h5 {
      color: var(--primary);
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.7rem;
    }
  }

  .sec-title .title-icon {
    position: absolute;
    left: 20px;
    top: 32px;
  }
  .sec-title::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 3px;
    width: 40px;
    height: 65px;
    background: var(--primary);
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
    height: 7.5rem;
  }
`

export default WhyChooseUs2
