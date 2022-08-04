import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import InnerHero from '../components/hero/InnerHero'
import unisexAvatar from '../assets/unisex_avatar.jpg'
import { reviews } from '../components/reviews/reviewList'
import stars from '../assets/stars.svg'
import Cta from '../components/cta/cta1'
import WhyChooseUs from '../components/about/WhyChooseUs3'


const Reviews = () => {

  return (
    <Layout>
      <Seo
        title="Reviews"
        description="What our customers say about us"
      />
      <InnerHero pageName="Reviews" />

      <section id="reviews">
        <div className="container">
          
          {reviews.map((item,i) => {
            return(
            <div className="review" key={i}>
            <picture>
              <img
                className="profile"
                loading="lazy"
                decoding="async"
                src={item.image || unisexAvatar}
                alt=""
                width={99}
                height={99}
              />
            </picture>
            <p>
              {item.reviewText}
            </p>
            <div className="star-group">
              <span className="name">
                {item.name}<span className="desc">{item.title}</span>
              </span>
              <picture>
                <img
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  src={stars}
                  alt="stars"
                  width={91}
                  height={15}
                />
              </picture>
            </div>
          </div>
          )
          })}

          
        </div>
      </section>
      <WhyChooseUs/>
      <Cta/>
    </Layout>
  )
}

export default Reviews
