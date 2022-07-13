import React from 'react'
import cabinets from '../../assets/cabinets2.jpg'
import cabinetsMob from '../../assets/cabinets2-m.jpg'
import { StaticImage } from 'gatsby-plugin-image'

const CTA = () => {
  return (
    <section id="cta">
      <div className="container">
        <h2 className="title">
          If you can dream it,<br/>we can build it!
        </h2>
        <p>
        Get your free quote today. We'll be happy to schedule a free consultation.
        </p>
        <a href="/contact.html" className="button-solid">
          Contact Us
        </a>
      </div>
      <StaticImage className='cta-img' src='../../assets/cta.jpg' layout="fullWidth"/>
      {/* <picture>
        <source media="(max-width: 600px)" srcSet={cabinetsMob} />
        <source media="(min-width: 601px)" srcSet={cabinets} />
        <img
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          src={cabinets}
          alt="kitchen cabinets"
          width={1920}
          height={1280}
        />
      </picture> */}
    </section>
  )
}

export default CTA
