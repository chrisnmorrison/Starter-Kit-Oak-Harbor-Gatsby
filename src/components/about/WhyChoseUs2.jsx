import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import {StaticImage} from 'gatsby-plugin-image'
import icon1 from '../../assets/icons/deforestation.png'

const items = [{
  icon: icon1,
  title: 'Experienced',
  text: 'Indignation and dislike mens who are so beguiled & the demoralized.',
  link: '#'
}]

const WhyChooseUs2 = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="row first">
          <div className="col-12 col-md-6">
            <div className="title">
              <h5>Why Choose Us</h5>
              <h3>Experts Trusted Us</h3>
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
              How to pursue pleasure rationally encounter consequences that
              painful again is there anyone who loves.
            </p>
          </div>
        </div>
        <div className="second">
          <div className="row clearfix">
            {items.map((item)=> {
              return(
                 <div className="why-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="icon-box">
                  <img className='card-icon' src={item.icon} />
                </div>
                <h5>{item.title}</h5>
                <div className="text">
                {item.text}
                </div>
                <div className="more-link">
                  <a
                    href={item.link}
                    className="theme-btn"
                  >
                    <span className="">→</span>
                  </a>
                </div>
                <div className="right-curve"></div>
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
    background: #24a77e;
  }

  .inner-box{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 45px 45px;
  }

  .why-block .inner-box {
  position: relative;
  display: block;
  text-align: center;
  
  background: #ffffff;
  border-radius: 7px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.10);
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

.why-block:hover .icon-box::before {
  left: 8px;
  background: #228a69;
}

.why-block .icon-box span {
  background: #24a77e;
}

h5{
  color: #575757 !important;
}

.why-block .more-link a {
  background: #24a77e;
}
.why-block:hover .more-link a {
  color: #ffffff;
}
.why-block .more-link a {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  color: #777777;
  font-size: 20px;
}

.card-icon{
  background-color: #228a69;
  padding: 1rem;
  border-radius: 1rem;
  width: 90px;
  height: auto;

}

h5{
  margin-top: 1.2rem;
}

.text{
  margin-top: .5rem;
}
`

export default WhyChooseUs2
