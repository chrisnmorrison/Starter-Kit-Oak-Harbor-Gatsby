import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import InnerHero from '../components/hero/InnerHero'
import styled from 'styled-components'

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
    <InnerHero pageName="Page Not Found" />
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>Sorry, the page you tried cannot be found.</h3>
        <Link to="/" className="button-solid">
          Back home
        </Link>
      </div>
    </section>
    </Wrapper>
  </Layout>
)

const Wrapper = styled.div`
  .error-page{
    margin: 10vh 5vw;
    text-align: center;
    font-size: 150%;
    line-height: 5rem;
  }
`

export default NotFoundPage
