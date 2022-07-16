import React from 'react'
import { Link } from 'gatsby'
import check from '../../assets/check.svg'
import { StaticImage } from 'gatsby-plugin-image'

const AboutReverse = () => {
  const aboutList = [
    'Healthy soil',
    'Effective cover crops',
    'Pest control',
    'Lower water requirements',
  ]

  return (
    <section id="sidebyside-reverse">
      <div className="container">
        <div className="content">
          <h2 className="title">Our Focus on Sustainability</h2>
          <p>
            Planting native plants and trees is one of the best ways to work
            with, rather than against, nature. By matching plant species to your
            particular area, you will have plants and trees that require less
            care and energy. They will also be healthier than exotic species.
          </p>
          <p>
            Another benefit is that native birds, insects, and other wildlife
            have evolved with native plant species and are best able to use the
            fruits and nectars these plants and trees provide.
          </p>
          <p>
            <strong>Sustainable practices result in:</strong>
          </p>
          <ul>
            {aboutList.map(item => {
              return (
                <li>
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
            Reach out to us any time to discuss your custom project, and we're
            happy to give a free, no-hassle estimate.
          </p>
          <Link className="button-solid" to="/contact">
            Get Your Free Quote
          </Link>
        </div>
        <div className="image-box">
          <StaticImage
            src="../../assets/about2.jpg"
            alt=""
            width={1662}
            placeholder="blurred"
          />
        </div>
      </div>
    </section>
  )
}

export default AboutReverse
