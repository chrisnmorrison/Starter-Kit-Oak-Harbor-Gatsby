import React from 'react'
import heroImg from '../../assets/cabinets2.jpg'
import heroImgMob from '../../assets/cabinets2-m.jpg'


const InnerHero = (props) => {
  return (
    <section id="int-hero">
  <h1 id="home-h">{props.pageName}</h1>
  <picture>
    <source media="(max-width: 600px)" srcSet={heroImgMob} />
    <source media="(min-width: 601px)" srcSet={heroImg} />
    <img aria-hidden="true" decoding="async" src={heroImg} alt="cabinets" width={400} height={662} />
  </picture>
</section>

  )
}

export default InnerHero