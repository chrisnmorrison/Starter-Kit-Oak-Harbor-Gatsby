import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/SEO'
import ContactForm from '../components/ContactForm'
import InnerHero from '../components/hero/InnerHero'

const contact = () => {
  return (
    <Layout>
      <Seo
        title="Contact Us"
        description="Reach out to us anytime for any inquiries"
      />
      <InnerHero pageName="Contact Us" />

      <ContactForm />
    </Layout>
  )
}

export default contact
