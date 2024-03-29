import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import InnerHero from '../components/hero/InnerHero'
import Portfolio from '../components/projects/portfolio'
import WhyChooseUs from '../components/about/WhyChooseUs3'
import Cta from '../components/cta/cta1'

const Projects = () => {
  return (
    <Layout>
      <Seo
        title="Projects"
        description="View our successful landscaping projects completed in North Grenville"
      />
      <InnerHero pageName="Projects" />
      <Portfolio />
      <WhyChooseUs/>
      <Cta />
    </Layout>
  )
}

export default Projects
