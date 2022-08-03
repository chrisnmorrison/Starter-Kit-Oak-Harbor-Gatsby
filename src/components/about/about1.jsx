import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import check from '../../assets/check.svg'
import { Link } from 'gatsby'

const About = () => {
  const aboutList = [
    '400+ happy clients across the North Grenville area',
    '5000+ trees planted, in cooperation with ABC Planting',
    '95 Happy, Experienced Employees',
  ]

  return (
    <section id="sidebyside" className="sidebyside">
      <div className="container">
        <div className="content">
          <h2 className="title">
            Trusted landscapers in North Grenville for over 20 years
          </h2>
          <p>
            We work with a select group of landscape contractors, water
            specialists, and rural planners to ensure the landscaping design
            process is smooth and seamless, from initial concept to project
            completion.
          </p>
          <h3 style={{marginBottom:'1rem'}}>
            Why Choose Us:
          </h3>
          <ul>
            {aboutList.map((item,i) => {
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
                  <span>{item}</span>
                </li>
              )
            })}
          </ul>
          <p>
            Whether you are looking for plants, trees, shrubs or garden
            accessories, at Terra, we've got you covered. Established in 1991,
            we supply top quality garden plants and accessories throughout North
            Grenville. We can also give you expert advice and guidance on how to
            care for your plants throughout the year.
          </p>
          <Link className="button-solid" href="/projects">
            See Our Projects
          </Link>
        </div>
        <div className="image-box">
          <StaticImage
            src="../../assets/about1.jpg"
            alt="Picture of yard"
            width={800}
            placeholder="blurred"
            loading="lazy"
          />
        </div>

     
      </div>
    </section>
  )
}

export default About
