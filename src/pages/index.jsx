import React from 'react'
import Hero from '../components/hero/HomeHero'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import Services from '../components/services/services1'
import About from '../components/about/about1'
import AboutReverse from '../components/about/about1-reverse'
import Cta from '../components/cta/cta1'

const IndexPage = () => {

  return (
    <Layout>
       <Seo title="Home" description=""/>
      <Hero />
      <Services/>
      <About/>
      <AboutReverse/>
      <Cta/>
    </Layout>
  )
}

export default IndexPage
