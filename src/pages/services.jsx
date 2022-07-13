import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import Service from '../components/services/services2'
import InnerHero from '../components/hero/InnerHero'
import Cta from '../components/cta/cta1'

const Services = () => {
  return (
    <Layout>
      <Seo
        title="Services"
        description="List of our favourite, completed projects"
      />
      <InnerHero pageName="Services" />
      <Service />
      <Cta/>
    </Layout>
  )
}

export default Services
