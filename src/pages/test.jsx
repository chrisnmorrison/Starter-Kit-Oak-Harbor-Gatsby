import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import InnerHero from '../components/hero/InnerHero'
import Cta2 from '../components/cta/cta2'
import Vision from '../components/about/WhyChooseUs1'

// Page for testing new components. Not linked to anywhere

const Test = () => {
  return (
    <Layout>
      <Seo
        title="Test page"
        description="Terra has proudly been operating in North Grenville since 1991."
      />
      <InnerHero pageName="About Us" />
      <Vision />
      <Cta2 />
    </Layout>
  )
}

export default Test
