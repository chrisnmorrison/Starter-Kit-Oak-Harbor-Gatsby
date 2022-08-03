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
import medalSvg from '../../assets/medal.svg'
import serviceSvg from '../../assets/service.svg'
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

const WhyChooseUs3 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="flex-group">
          <div className="contact-info">
            <h2>Why Valley Construction Supply?</h2>
            <div className="contact-info-group">
              <img src={serviceSvg} alt="customer service icon" width={50} />
              <h3>Best Service</h3>
              <p>
                Our sales team have the most combined experience around. They
                are knowledgeable, friendly, and ready to take your call
              </p>
            </div>
            <div className="contact-info-group">
              <img src={medalSvg} alt="award icon" width={50} />
              <h3>#1 Industry Leader</h3>
              <p>
                Our sales team have the most combined experience around. They
                are knowledgeable, friendly, and ready to take your call
              </p>
            </div>
          </div>
          <img
            className="valley-exterior"
            src="https://d33wubrfki0l68.cloudfront.net/ea21de291f1d2193e7397e0a2a3fb1a57088131e/fff1f/images/valley-exterior.jpg"
            alt="outside of valley construction office building"
            width="400px"
          />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .flex-group {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 100px;
    padding-top: 250px;
    height: auto;
  }

  .contact-info {
    padding: 0;
  }

  .contact-info-group {
    height: auto;
    margin-bottom: 90px;
    margin-top: 50px;
    position: relative;
    max-width: 340px;
  }

  .contact-info-group svg {
    width: 50px;
    height: auto;
    float: left;
    margin: 0 25px 150px 0;
  }

  .valley-exterior {
    width: 600px !important;
    height: auto !important;
    padding-top: 0px;
    margin: 0;
  }

  @media screen and (max-width: 1025px) {
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
