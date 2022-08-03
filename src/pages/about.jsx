import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import InnerHero from '../components/hero/InnerHero'
import Vision from '../components/about/WhyChooseUs1'
import WhyChooseUs3 from '../components/about/WhyChooseUs3'
import About from '../components/about/about1'
import Cta from '../components/cta/cta1'

const about = () => {
  return (
    <Layout>
      <Seo title="About Us" description="Terra has proudly been operating in North Grenville since 1991." />
      <InnerHero pageName="About Us" />
      <About />
      <Vision />
      <WhyChooseUs3/>
      <Cta />
    </Layout>
  )
}

export default about
