import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import InnerHero from '../components/hero/InnerHero'
import Vision from '../components/about/WhyChoseUs1'
import WhyChooseUs2 from '../components/about/WhyChoseUs2'
import About from '../components/about/about1'
import Cta from '../components/cta/cta1'

const about = () => {
  return (
    <Layout>
      <Seo title="About Us" description="" />
      <InnerHero pageName="About Us" />
      <About />
      <Vision />
      <WhyChooseUs2/>
      <Cta />
    </Layout>
  )
}

export default about
